import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

interface Transaction {
  _id: string;
  requestAmount: string;
  status: "pending" | "approved" | "rejected";
  transactionType: string;
  currentBalance: number;
  totalAdded: number;
  totalPaid: number;
  createdBy: string;
  createdAt: string;
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const Requests = () => {
  const axiosSecure = useAxiosSecure();

  const { data: transactions = [], isLoading, refetch } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await axiosSecure("/transactions");
      return data;
    },
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const handleApprove = async (transactionId: string) => {
    

    const res = await axiosSecure(`/transaction/${transactionId}`);
    console.log(res.data);

    const requestAmount = res.data.requestAmount;
    const transactionType = res.data.transactionType;
    const currentBalance = res.data.currentBalance;
    const totalAdded = res.data.totalAdded;
    const totalPaid = res.data.totalPaid;
    const status = "approved";

    const data = {
        requestAmount,
        transactionType,
        currentBalance,
        totalAdded,
        totalPaid,
        status
    }


    try {
        const res = await axiosSecure.patch(`/transaction/${transactionId}`, data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("Success", "Request approved successfully!", "success");
      }
    } catch (error) {
      Swal.fire("Error", `Failed to approve ${error}`, "error");
    }
  };
  const handleReject = async (transactionId: string) => {
    

    const res = await axiosSecure(`/transaction/${transactionId}`);
    console.log(res.data);

   
    const status = "rejected";

    const data = {
        status
    }


    try {
        const res = await axiosSecure.patch(`/transaction/${transactionId}`, data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("Success", "Request rejected successfully!", "success");
      }
    } catch (error) {
      Swal.fire("Error", `Failed to reject ${error}`, "error");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
  <div className="sm:flex sm:items-center">
    <div className="sm:flex-auto">
      <h1 className="text-xl font-semibold text-gray-900">Transaction Requests</h1>
      <p className="mt-2 text-sm text-gray-700">
        A list of all transaction requests including details.
      </p>
    </div>
  </div>
  <div className="mt-8 flow-root">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Amount
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Type
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  User
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Date
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Balance
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    ${parseFloat(transaction.requestAmount).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {transaction.transactionType}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[transaction.status]}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {transaction.createdBy}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {formatDate(transaction.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    ${transaction.currentBalance.toFixed(2)}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(transaction._id)}
                        disabled={transaction.status !== 'pending'}
                        className={`text-green-600 hover:text-green-900 ${transaction.status !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(transaction._id)}
                        disabled={transaction.status !== 'pending'}
                        className={`text-red-600 hover:text-red-900 ${transaction.status !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {transactions.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No transactions found
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Requests;