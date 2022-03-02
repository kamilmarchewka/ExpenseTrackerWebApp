import styles from "./ExpenseItem.module.scss";
type Props = {
  expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  };
  isRemoveMode: boolean;
  removeExpense: (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => void;
};
const ExpenseItem = ({ expense, removeExpense, isRemoveMode }: Props) => {
  return (
    <li className={styles["expense-item"]}>
      <span className={styles["expense-item__date"]}>{expense.date}</span>
      <h3>{expense.name}</h3>
      <span className={styles["expense-item__price"]}>{expense.price}$</span>

      {/* delete item overlay */}
      {isRemoveMode && (
        <span
          onClick={() => removeExpense(expense)}
          className={styles["expense-item__delete-overlay"]}>
          <svg
            width="27"
            height="31"
            viewBox="0 0 27 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14821 1.07107C8.47366 0.414625 9.14263 0 9.87188 0H17.1281C17.8574 0 18.5263 0.414625 18.8518 1.07107L19.2857 1.9375H25.0714C26.1382 1.9375 27 2.80514 27 3.875C27 4.94486 26.1382 5.8125 25.0714 5.8125H1.92857C0.863638 5.8125 0 4.94486 0 3.875C0 2.80514 0.863638 1.9375 1.92857 1.9375H7.71429L8.14821 1.07107ZM23.7937 28.2209C23.6973 29.8072 22.4377 31 20.9069 31H6.09308C4.56529 31 3.30087 29.8072 3.20565 28.2209L1.87433 7.75H25.0714L23.7937 28.2209Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </li>
  );
};

export default ExpenseItem;
