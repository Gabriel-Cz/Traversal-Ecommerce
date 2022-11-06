import React, {useState, useEffect} from 'react'
import Toast from 'react-bootstrap/Toast'

function ToastNotification({message, variant, showToastProp}) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(showToastProp)
    }, [])
    return (
        <Toast className="position-fixed" style={{right: '0', zIndex: '9'}} onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Traversal</strong>
            <small>{Date.now()}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
  }

export default ToastNotification;
