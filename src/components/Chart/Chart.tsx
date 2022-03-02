import Bar from "./Bar";
import styles from "./Chart.module.scss";

enum Category {
  HOME,
  INVESTMENT,
  FOOD,
  EDUCATION,
  ENTERTAINMENT,
}

type Props = {
  expenses: {
    name: string;
    date: string;
    price: number;
    category: Category;
  }[];
};

const Chart = ({ expenses }: Props) => {
  const categories = [
    {
      name: Category.HOME,
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: Category.INVESTMENT,
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: Category.FOOD,
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: Category.EDUCATION,
      fill: 0,
      fillInPercentages: "0%",
    },
    {
      name: Category.ENTERTAINMENT,
      fill: 0,
      fillInPercentages: "0%",
    },
  ];

  console.log("from chart", expenses);
  expenses.forEach((expense) => {
    categories[expense.category].fill += expense.price;
  });
  console.log(categories);

  const categoriesValues = categories.map((cat) => cat.fill);
  const maxValue = Math.max(...categoriesValues);

  console.log(maxValue);

  // for (const category of categories) {
  //   category.fillInPercentages =
  //     Math.floor((category.fill / maxValue) * 100) + "%";
  // }

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
