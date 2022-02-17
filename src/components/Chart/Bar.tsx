import { useState } from "react";
import styles from "./Bar.module.scss";

type Props = {
  fill: string;
  category: string;
};

const Bar = ({ fill, category }: Props) => {
  return (
    <div className={styles.bar}>
      <div style={{ height: fill }} className={styles.bar__fill}>
        {fill}
      </div>
      <span className={styles.bar__icon}>{category}</span>
    </div>
  );
};

export default Bar;
