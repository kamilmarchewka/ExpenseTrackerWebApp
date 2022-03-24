import styles from "./ContentWrapper.module.scss";

type Props = {
  children: JSX.Element;
};

const ContentWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ContentWrapper;
