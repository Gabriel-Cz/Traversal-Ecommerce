import React from 'react'
import Toast from 'react-bootstrap/Toast'
import { createPortal } from 'react-dom';

interface ToastNotificationProps {
  message: string;
  show?: boolean;
  onClose?: () => void
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  show,
  onClose
}) => {
  return show ? createPortal((
    <Toast
      className="position-fixed"
      style={{ right: '0', zIndex: '9' }}
      onClose={onClose}
      show={show}
      delay={5000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">Traversal</strong>
        <small>{Date.now()}</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  ), document.body
  ) : null
}

ToastNotification.defaultProps = {
  show: false,
  onClose: () => {
    throw new Error('Toast: On close function not implemented.')
  }
}