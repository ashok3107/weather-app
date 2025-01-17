import { MouseEventHandler } from 'react';
import styles from './PageOverlay.module.scss';

type PageOverlayType = {
  onClick: MouseEventHandler;
};

const PageOverlay = (props: PageOverlayType) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} tabIndex={0} className={styles.pageOverlay}>
      
    </div>
  );
};

export default PageOverlay;
