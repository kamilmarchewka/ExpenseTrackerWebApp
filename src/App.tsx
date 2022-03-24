import { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import ContentWrapper from "./components/helpers/ContentWrapper/ContentWrapper";
import RecentExpenses from "./components/RecentExpenses/RecentExpenses";
import TopBar from "./components/TopBar/TopBar";
import { dummy_data } from "./dummy_data";

// import logo from "./logo.svg";

// we use .tsx if we want to add jsx elements to the .ts file
// enum Category {
//   HOME,
//   INVESTMENT,
//   FOOD,
//   EDUCATION,
//   ENTERTAINMENT,
// }

function App() {
  const [expenses, setExpenses] = useState(dummy_data);

  const onAddExpense = (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => setExpenses((prevExpenses) => [expense, ...prevExpenses]);

  const onRemoveExpense = (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => setExpenses((prev) => prev.filter((item) => item.id !== expense.id));

  return (
    <div>
      <TopBar />
      <ContentWrapper>
        <>
          <Chart expenses={expenses} />
          <RecentExpenses
            addExpense={onAddExpense}
            removeExpense={onRemoveExpense}
            expenses={expenses}
          />
        </>
      </ContentWrapper>
    </div>
  );
}

export default App;
