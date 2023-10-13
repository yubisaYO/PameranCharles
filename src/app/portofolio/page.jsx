import Link from "next/link";
import styles from "./page.module.css";

const Portofolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div
        className={`${styles.items} flex flex-col gap-[20px] items-center md:items-start md:flex-row md:gap-[50px]`}
      >
        <Link href="/portofolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portofolio/websites" className={styles.item}>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href="/portofolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portofolio;
