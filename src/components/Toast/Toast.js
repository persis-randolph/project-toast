import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, message, variant, handleClose }) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon icon={ICONS_BY_VARIANT[variant]} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => handleClose(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
