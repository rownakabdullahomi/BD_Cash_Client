import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface ProfileUpdateData {
  displayName?: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  userRegister: (email: string, password: string) => Promise<UserCredential>;
  userLogin: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  userLogout: () => Promise<void>;
  updateUserProfile: (updatedData: ProfileUpdateData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const userRegister = (email: string, password: string) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email: string, password: string) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
      setLoading(true);
      return signOut(auth);
  };

  const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = async (updatedData: ProfileUpdateData) => {
      if (!auth.currentUser) {
          throw new Error("No user is currently signed in");
      }
      
      await updateProfile(auth.currentUser, updatedData);
      
      // After update, get the fresh user data
      const updatedUser = auth.currentUser;
      setUser({
          ...updatedUser,
          displayName: updatedData.displayName ?? updatedUser.displayName,
          photoURL: updatedData.photoURL ?? updatedUser.photoURL
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        console.log("CurrentUser-->", currentUser);
        // Fetch the token from the server
        const { data } = await axiosPublic.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );

        console.log("Token:", data);
      }
      else{
        setUser(currentUser);
        const { data } = await axiosPublic.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        )
        console.log(data);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const userInfo: AuthContextType = {
      user,
      setUser,
      loading,
      userRegister,
      userLogin,
      googleLogin,
      userLogout,
      updateUserProfile,
  };

  return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

  
  // Custom Hook to Use TaskContext
  export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};
  