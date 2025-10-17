import styles from '../styles/TipCalculator.module.css';

export default function Home() {
  return (
    <main className="calculator">
<div className={styles["left-panel"]}>
  <div>
    <label htmlFor="bill">Bill</label>
    <input
      type="number"
      id="bill"
      className={styles["input-field"]}
      placeholder="0"
    />
  </div>

  <div>
    <label>Select Tip %</label>
    <div className={styles["tip-options"]}>
      <button className={styles["tip-button"]}>5%</button>
      <button className={styles["tip-button"]}>10%</button>
      <button className={styles["tip-button"]}>15%</button>
      <button className={styles["tip-button"]}>25%</button>
      <button className={styles["tip-button"]}>50%</button>
      <input
        type="number"
        className={`${styles["input-field"]} ${styles["tip-custom"]}`}
        placeholder="Custom"
      />
    </div>
  </div>

  <div>
    <label htmlFor="people">Number of People</label>
    <input
      type="number"
      id="people"
      className={styles["input-field"]}
      placeholder="0"
    />
  </div>
</div>

      <div className={styles["right-panel"]}>
  <div>
    <div className={styles["result-group"]}>
      <div className={styles["result-label"]}>
        <span>Tip Amount</span>
        <span>/ person</span>
      </div>
      <div className={styles["result-value"]}>$0.00</div>
    </div>

    <div className={styles["result-group"]}>
      <div className={styles["result-label"]}>
        <span>Total</span>
        <span>/ person</span>
      </div>
      <div className={styles["result-value"]}>$0.00</div>
    </div>
  </div>

  <button className={styles["reset-btn"]}>Reset</button>
</div>

    </main>
  );
}
