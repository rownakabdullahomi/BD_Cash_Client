/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import { useAuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UserDashboard = () => {
  const [totalAddedBalance, setTotalAddedBalance] = useState<number>(0);
  const [totalPaidBalance, setTotalPaidBalance] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0); // Example balance
  const { user } = useAuthContext();
  console.log(user?.email);
  const [type, isLoading] = useRole();
  console.log("Role status:", { type, isLoading });

  const axiosSecure = useAxiosSecure();

  const {
    data: transaction,
    isLoading: isLoadingTransaction,
    refetch,
  } = useQuery({
    queryKey: ["transaction"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/latest/transaction/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  console.log("Transaction status:", {
    isLoadingTransaction,
    transaction,
    userEmail: user?.email,
  });

  // Use useEffect to handle side effects when data changes
  useEffect(() => {
    if (transaction) {
      console.log(transaction);
      setTotalAddedBalance(transaction.totalAdded || 0);
      setTotalPaidBalance(transaction.totalPaid || 0);
      setBalance(transaction.currentBalance || 0);
    }
  }, [transaction]);

  const handleAddMoney = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const requestAmount = formData.get("addAmount") as string;
      const createdBy = user?.email;
      const currentBalance = balance;
      const totalAdded = totalAddedBalance;
      const totalPaid = totalPaidBalance;

      // Validation checks
      if (parseFloat(requestAmount) <= 0) {
        toast.error("Add money amount must be greater than 0");
        return;
      }

      const addMoneyData = {
        requestAmount,
        status: "pending",
        transactionType: "Add Money",
        currentBalance,
        totalAdded,
        totalPaid,
        createdBy,
        createdAt: new Date().toISOString(),
      };

      await axiosSecure.post("/add-money-request", addMoneyData);
      toast.success("Add Money request sent successfully!");

      form.reset();
    } catch (error: any) {
      toast.error("Failed to add money", error.message);
    }
  };
  const handlePayMoney = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const requestAmount = formData.get("payAmount") as string;
      const createdBy = user?.email;
      const currentBalance = balance;
      const totalAdded = totalAddedBalance;
      const totalPaid = totalPaidBalance;

      // Validation checks
      if (parseFloat(requestAmount) <= 0) {
        toast.error("Payment amount must be greater than 0");
        return;
      }

      if (parseFloat(requestAmount) > currentBalance) {
        toast.error("Insufficient balance for this payment");
        return;
      }

      const payMoneyData = {
        requestAmount,
        status: "pending",
        transactionType: "Pay Money",
        currentBalance,
        totalAdded,
        totalPaid,
        createdBy,
        createdAt: new Date().toISOString(),
      };

      await axiosSecure.post("/pay-money-request", payMoneyData);
      toast.success("Pay Money request sent successfully!");

      form.reset();
    } catch (error: any) {
      toast.error("Failed to pay money", error.message);
    }
  };

  if (isLoading || isLoadingTransaction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="text-lg font-medium text-gray-600 animate-pulse">
          Loading...
        </span>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Current Balance Section */}
          <div className="lg:flex-1 bg-base-300 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Current Balance
              </h2>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-indigo-600">
                  BDT {balance.toFixed(2)}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-base-100 p-4 rounded-lg">
                  <p className=" text-sm">Total Added</p>
                  <p className="font-medium text-blue-600">
                    BDT {totalAddedBalance}
                  </p>
                </div>
                <div className="bg-base-100 p-4 rounded-lg">
                  <p className="text-sm">Total Expenses</p>
                  <p className="font-medium text-red-500">
                    BDT {totalPaidBalance}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Money Form */}
          <div className="lg:flex-1 bg-base-300 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Add Money
              </h2>
              <form onSubmit={handleAddMoney}>
                <div className="mb-6">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium mb-2"
                  >
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-medium">
                      <span className=" px-2 py-1 text-sm">BDT</span>
                    </span>
                    <input
                      type="number"
                      name="addAmount"
                      className="block w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="0.00"
                      step="1"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                >
                  Add Money
                </button>
              </form>
            </div>
          </div>
          <div className="lg:flex-1 bg-base-300 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Pay Money
              </h2>
              <form onSubmit={handlePayMoney}>
                <div className="mb-6">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium mb-2"
                  >
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-medium">
                      <span className=" px-2 py-1 text-sm">BDT</span>
                    </span>
                    <input
                      type="number"
                      name="payAmount"
                      className="block w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="0.00"
                      step="1"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                >
                  Pay Money
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
