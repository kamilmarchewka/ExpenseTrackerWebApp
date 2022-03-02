import ContentWrapper from "../helpers/ContentWrapper/ContentWrapper";

import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <header className={styles.header}>
      <ContentWrapper>
        <div className={styles.logo}>
          <span>E</span>xpi
        </div>
      </ContentWrapper>
    </header>
  );
};

export default TopBar;
