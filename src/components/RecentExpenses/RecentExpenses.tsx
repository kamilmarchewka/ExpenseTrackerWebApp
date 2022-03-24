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

  console.log("expenses", expenses);

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
          {expenses.slice(0, 5).map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              isRemoveMode={isRemoveMode}
              removeExpense={(expense) => removeExpense(expense)}
            />
          ))}
        </ul>
        {expenses.length === 0 && (
          <p className={styles["no-expenses-alert"]}>You have no expenses.</p>
        )}
      </section>
      {isAddModalVisible && (
        <AddExpenseModal
          closeModal={onCloseModal}
          addExpense={addExpense}
          changeMode={() => setIsRemoveMode(false)}
        />
      )}
    </>
  );
};

export default RecentExpenses;
