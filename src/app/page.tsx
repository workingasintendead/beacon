import TransactionTile from "./components/transactionTile";
import { transactionList } from "@/tests/mocks/transactionStub";

export default function Home() {
  // needs to be memoized/cached
  // TODO: fetch goes here
  const listOfTransactions = transactionList()
  const listOfTransactionIds = listOfTransactions.map((transaction) => transaction.transactionId);

  return (
    <div className="container">
      <input className="mb-4" type="text" placeholder="Search" />
      {listOfTransactionIds.map(id => <TransactionTile key={id} transactionId={id} />)}
    </div>
  );
}
