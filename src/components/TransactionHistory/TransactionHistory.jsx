import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr className={css.string} key={transaction.id}>
            <td className={css.item}>{transaction.type}</td>
            <td className={css.item}>{transaction.amount}</td>
            <td className={css.item}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
