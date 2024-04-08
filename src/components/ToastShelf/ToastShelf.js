import { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite" // waits until SR is done announcing whatever it was doing
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} message={message} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
