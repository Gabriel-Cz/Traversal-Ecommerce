import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from '../../styles/Product.module.scss'
import { AddToCartButton } from '../Buttons'

const buttonStyle = {
    backgroundColor: "linear-gradient(92.21deg, #A3C163 0%, #A4D43F 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
}

export default function ProductImageWithCheckout(props) {
    return(
        <>
          <div>
            <Image fluid src={props.image} />
          </div>
        </>
    );
}