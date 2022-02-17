import React, { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import TopBar from "./components/TopBar/TopBar";
// import logo from "./logo.svg";

// we use .tsx if we want to add jsx elements to the .ts file

const DUMMY_DATA: {
  id: number;
  name: string;
  date: string;
  price: number;
  category: "investment" | "house" | "food" | "education" | "entertainment";
}[] = [
  {
    id: Math.random(),
    name: "New flat",
    date: "20/01/2022",
    price: 12000,
    category: "investment",
  },
  {
    id: Math.random(),
    name: "TV",
    date: "22/02/2022",
    price: 2000,
    category: "house",
  },
  {
    id: Math.random(),
    name: "something",
    date: "22/02/2022",
    price: 20,
    category: "house",
  },
  {
    id: Math.random(),
    name: "Burger",
    date: "22/01/2022",
    price: 5,
    category: "food",
  },
  {
    id: Math.random(),
    name: "Ecommerce Online Course",
    date: "01/01/2022",
    price: 1000,
    category: "education",
  },
  {
    id: Math.random(),
    name: "Ecommerce Offline Course",
    date: "01/01/2022",
    price: 1500,
    category: "education",
  },
  {
    id: Math.random(),
    name: "Cinema",
    date: "13/03/2022",
    price: 12,
    category: "entertainment",
  },
  {
    id: Math.random(),
    name: "Sky Diving",
    date: "13/03/2022",
    price: 2000,
    category: "entertainment",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  useEffect(() => {
    setTimeout(() => {
      setExpenses((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          name: "Sky Diving3",
          date: "13/03/2022",
          price: 200000,
          category: "entertainment",
        },
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <TopBar />
      <Chart expenses={expenses} />
    </div>
  );
}

export default App;
