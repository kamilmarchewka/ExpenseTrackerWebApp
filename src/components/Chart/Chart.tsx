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

  expenses.forEach((expense) => {
    categories[expense.category].fill += expense.price;
  });

  const categoriesValues = categories.map((cat) => cat.fill);
  const maxValue = Math.max(...categoriesValues);

  for (const category of categories) {
    category.fillInPercentages =
      Math.floor((category.fill / maxValue) * 100) + "%";
  }

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
