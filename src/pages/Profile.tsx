import { useAuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-8 px-6 text-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="bg-blue-100 h-full w-full flex items-center justify-center">
                      <span className="text-5xl font-bold text-blue-600">
                        {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <h1 className="mt-4 text-2xl font-bold text-white">
              {user?.displayName || 'User Name'}
            </h1>
            <p className="text-blue-100">
              {user?.email || 'user@example.com'}
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Profile;