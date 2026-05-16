import styles from "./CardStatus.module.css";

const CardStatus = ({ counter, title, icon }) => {
  return (
    <>
      {/* Parent Card */}
      <div className={`${styles.cardStatus} d-flex align-items-center`}>
        {/* Icon Parent */}

        <div
          className={`${styles.icon} d-flex align-items-center justify-content-center w-100`}
        >
          <i class={icon}></i>
        </div>

        {/* Info */}

        <div
          className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}
        >
          <span className={styles.counter}>{counter}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </>
  )
}

export default CardStatus