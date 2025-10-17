import styles from "../styles/TipCalculator.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        {/* Left Side */}
        <div className={styles.leftPanel}>
          <div>
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" placeholder="0" />
          </div>

          <div>
            <label>Select Tip %</label>
            <div className={styles.tipButtons}>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input
                type="number"
                placeholder="Custom"
                className={styles.customInput}
              />
            </div>
          </div>

          <div>
            <label htmlFor="people">Number of People</label>
            <input type="number" id="people" placeholder="0" />
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.rightPanel}>
          <div className={styles.amountDisplay}>
            <div className={styles.resultRow}>
              <div>
                <p>Tip Amount</p>
                <p>/ person</p>
              </div>
              <h2>$0.00</h2>
            </div>

            <div className={styles.resultRow}>
              <div>
                <p>Total</p>
                <p>/ person</p>
              </div>
              <h2>$0.00</h2>
            </div>
          </div>

          <button className={styles.resetButton}>RESET</button>
        </div>
      </div>
    </div>
  );
}
