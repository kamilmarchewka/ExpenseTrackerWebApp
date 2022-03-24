import Bar from "./Bar";
import styles from "./Chart.module.scss";

type Props = {
  expenses: {
    name: string;
    date: string;
    price: number;
    category: number;
  }[];
};

const Chart = ({ expenses }: Props) => {
  const categories = [
    {
      name: "home",
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: "investment",
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: "food",
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: "education",
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: "entertainment",
      fill: 0,
      fillInPercentages: "0%",
    },
  ];

  // add price to the certain expense category
  expenses.forEach((expense) => {
    categories[expense.category].fill += expense.price;
  });

  categories.map((cat) => console.log("fill: ", cat.fill));

  // get value for 100% fill
  const categoriesValues = categories.map((cat) => cat.fill);
  let maxValue = Math.max(...categoriesValues);

  console.log("max", maxValue);

  for (const category of categories) {
    category.fillInPercentages = maxValue
      ? Math.floor((category.fill / maxValue) * 100) + "%"
      : "0%";
  }

  categories.map((cat) => console.log("height: ", cat.fillInPercentages));

  return (
    <div className={styles.chart}>
      {categories.map((category) => (
        <Bar
          key={category.name}
          category={category.name}
          fill={category.fillInPercentages}
        />
      ))}
    </div>
  );
};

export default Chart;
