import ExpenseItem from "./ExpenseItem";
import AddExpenseModal from "../AddExpenseModal/AddExpenseModal";
import styles from "./RecentExpenses.module.scss";
import { useState } from "react";
type Props = {
  addExpense: (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => void;
  removeExpense: (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => void;

  expenses: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }[];
};
const RecentExpenses = ({ expenses, removeExpense, addExpense }: Props) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isRemoveMode, setIsRemoveMode] = useState(false);

  const onCloseModal = () => {
    setIsAddModalVisible(false);
  };

  return (
    <>
      <section className={styles["recent-expenses"]}>
        <header className={styles["recent-expenses__header"]}>
          <h2>Recent expenses</h2>
          <div>
            <button onClick={() => setIsAddModalVisible(true)}>Add</button>
            <button onClick={() => setIsRemoveMode((prev) => !prev)}>
              Remove
            </button>
          </div>
        </header>
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              isRemoveMode={isRemoveMode}
              removeExpense={(expense) => removeExpense(expense)}
            />
          ))}
        </ul>
      </section>
      {isAddModalVisible && (
        <AddExpenseModal closeModal={onCloseModal} addExpense={addExpense} />
      )}
    </>
  );
};

export default RecentExpenses;
