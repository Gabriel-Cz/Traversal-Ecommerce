import React from 'react'
import Cart from '../components/Cart'
import Container from 'react-bootstrap/Container'

export default function About() {
    return(
        <>
          <Container className="mx-auto mt-5">
              <h1 className="text-center" style={{font: "italic 28px 'Unna', serif", color: "rgba($color: black, $alpha: 1)"}}>Traversal Phylosophy</h1>
              <div className="text-center mt-5">
                 <p className="px-5" style={{font: "italic 28px 'Unna', serif", color: "rgba($color: black $alpha: 0.7)"}}>
                    Lorem Ipsum dolor asimet lorem asimet ipsum, 
                    Lorem Ipsum dolor asimet lorem asimet ipsum. Lorem Ipsum dolor asimet lorem asimet ipsum
                    <Cart></Cart>
                </p>
              </div>
          </Container>
        </>
    );
}