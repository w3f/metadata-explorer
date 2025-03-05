import styles from "./page.module.css";
import Metadata from "./Metadata";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Metadata version="V14" />
      </main>
    </div>
  );
}
