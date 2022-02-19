import exp from "constants";
import React, { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import ContentWrapper from "./components/helpers/ContentWrapper/ContentWrapper";
import TopBar from "./components/TopBar/TopBar";
// import logo from "./logo.svg";

// we use .tsx if we want to add jsx elements to the .ts file
enum Category {
  HOME,
  INVESTMENT,
  FOOD,
  EDUCATION,
  ENTERTAINMENT,
}
const DUMMY_DATA: {
  id: number;
  name: string;
  date: string;
  price: number;
  category: Category;
}[] = [
  {
    id: Math.random(),
    name: "New flat",
    date: "20/01/2022",
    price: 12000,
    category: Category.INVESTMENT,
  },
  {
    id: Math.random(),
    name: "TV",
    date: "22/02/2022",
    price: 2000,
    category: Category.HOME,
  },
  {
    id: Math.random(),
    name: "something",
    date: "22/02/2022",
    price: 20,
    category: Category.HOME,
  },
  {
    id: Math.random(),
    name: "Burger",
    date: "22/01/2022",
    price: 5,
    category: Category.FOOD,
  },
  {
    id: Math.random(),
    name: "Ecommerce Online Course",
    date: "01/01/2022",
    price: 1000,
    category: Category.EDUCATION,
  },
  {
    id: Math.random(),
    name: "Ecommerce Offline Course",
    date: "01/01/2022",
    price: 1500,
    category: Category.EDUCATION,
  },
  {
    id: Math.random(),
    name: "Cinema",
    date: "13/03/2022",
    price: 12,
    category: Category.ENTERTAINMENT,
  },
  {
    id: Math.random(),
    name: "Sky Diving",
    date: "13/03/2022",
    price: 2000,
    category: Category.ENTERTAINMENT,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const clickHandler = () => {
    setExpenses((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: "Sky Diving3",
        date: "13/03/2022",
        price: 2500,
        category: Category.ENTERTAINMENT,
      },
    ]);
  };

  return (
    <div>
      <button onClick={clickHandler}>Add expense</button>
      <TopBar />
      <ContentWrapper>
        <Chart expenses={expenses} />
      </ContentWrapper>
    </div>
  );
}

export default App;
