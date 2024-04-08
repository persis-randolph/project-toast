import { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, closeToast } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            id={id}
            variant={variant}
            message={message}
            handleClose={closeToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
