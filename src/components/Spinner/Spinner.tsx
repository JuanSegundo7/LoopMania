import { DotWave } from "@uiball/loaders";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <section className={styles.container}>
      <div className={styles.spinner}>
        <DotWave size={70} speed={1} color="black" />
      </div>
    </section>
  );
}

export default Spinner;
