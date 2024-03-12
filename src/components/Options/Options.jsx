import css from "../../components/Options/Options.module.css";

function Options({ feedback, updateFeedback, totalFeedback, handleReset }) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button
            className={css.optionButton}
            onClick={() => {
              updateFeedback("good");
            }}
          >
            Good:{feedback.good}
          </button>
        </li>
        <li>
          <button
            className={css.optionButton}
            onClick={() => {
              updateFeedback("neutral");
            }}
          >
            Neutral:{feedback.neutral}
          </button>
        </li>
        <li>
          <button
            className={css.optionButton}
            onClick={() => {
              updateFeedback("bad");
            }}
          >
            Bad:{feedback.bad}
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button className={css.optionButton} onClick={handleReset}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default Options;
