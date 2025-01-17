import styles from './FullPageLoader.module.scss';

const FullPageLoader = () => {
  return (
    <div className={styles.fullPageLoader}>
      <div className={styles.spinningLoader} />
    </div>
  )
};

export default FullPageLoader;