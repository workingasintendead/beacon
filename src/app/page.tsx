import TransactionTile from "./components/transactionTile";
import { transactionList } from "@/tests/mocks/transactionStub";

export default function Home() {
  // needs to be memoized/cached
  // TODO: fetch goes here
  const listOfTransactions = transactionList();
  const listOfTransactionIds = listOfTransactions.map((transaction) => transaction.transactionId);

  return (
    <div className="container mx-auto p-4">
      <input
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        type="text"
        placeholder="Search"
      />
      <div className="grid grid-cols-1 gap-4">
        {listOfTransactionIds.map((id) => (
          <TransactionTile key={id} transactionId={id} />
        ))}
      </div>
    </div>
  );
}
