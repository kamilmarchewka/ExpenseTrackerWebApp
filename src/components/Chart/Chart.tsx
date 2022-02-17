import { stringify } from "querystring";
import { useState } from "react";
import Bar from "./Bar";
import styles from "./Chart.module.scss";

type Props = {
  expenses: {
    name: string;
    date: string;
    price: number;
    category: "investment" | "house" | "food" | "education" | "entertainment";
  }[];
};

const Chart = ({ expenses }: Props) => {
  // declare categories which will be displayed on the chart
  let categories = [{ name: "investment", amount: 0, fill: "" }];

  let biggestAmount = 0;

  expenses.forEach((expense) => {
    let categoryExists = false;
    let categoryToPush = { name: "", amount: 0, fill: "" };

    // loop through categories
    categories.forEach((category) => {
      // if category exists, set 'categoryExists' to true and return
      if (category.name === expense.category) {
        categoryExists = true;
        return;
      }
      // if category DOESN'T exist, create new category to push
      categoryToPush = {
        ...categoryToPush,
        name: expense.category,
        amount: expense.price,
      };
    });

    // adding amount to the existing category
    if (categoryExists) {
      categories.forEach((category) => {
        if (category.name === expense.category)
          category.amount += expense.price;
      });
      return;
    }

    // adding new category to the categories list
    categories.push(categoryToPush);

    // set the biggest amount (100%)
    categories.forEach((category) => {
      if (category.amount > biggestAmount) biggestAmount = category.amount;
    });

    // add fill to each category
    categories.forEach((category) => {
      category.fill = `${Math.floor((category.amount / biggestAmount) * 100)}%`;
    });
  });

  return (
    <div className={styles.chart}>
      {categories.map((category) => (
        <Bar
          key={category.name}
          category={category.name}
          fill={category.fill}
        />
      ))}
    </div>
  );
};

export default Chart;
