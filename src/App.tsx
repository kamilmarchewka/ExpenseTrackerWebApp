import { useState } from "react";
import Chart from "./components/Chart/Chart";
import ContentWrapper from "./components/helpers/ContentWrapper/ContentWrapper";
import RecentExpenses from "./components/RecentExpenses/RecentExpenses";
import TopBar from "./components/TopBar/TopBar";
// import logo from "./logo.svg";

// we use .tsx if we want to add jsx elements to the .ts file
// enum Category {
//   HOME,
//   INVESTMENT,
//   FOOD,
//   EDUCATION,
//   ENTERTAINMENT,
// }
const DUMMY_DATA = [
  {
    id: Math.random(),
    name: "New flat",
    date: "13/03/2022",
    price: 12,
    category: 1,
  },
  {
    id: Math.random(),
    name: "Sky Diving",
    date: "13/03/2022",
    price: 2000,
    category: 4,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  console.log("expenses from app", expenses);

  const onAddExpense = (expense: {
    id: number;
    name: string;
    date: string;
    price: number;
    category: number;
  }) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
    console.log("adding expense from app.tsx", expense);
  };

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
          {/* <Chart expenses={expenses} /> */}
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
