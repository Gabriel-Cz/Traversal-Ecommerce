import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'

export default function ProductAlert({title, showAlert}) {
    const [show, setShow] = useState(false);
    showAlert ? setShow(true) : setShow(false);
    return(
        <Alert show={show} variant="success">
            <em>{title} was addedd to your</em><Alert.Link href="/cart">cart.</Alert.Link>
        </Alert>
    );
}