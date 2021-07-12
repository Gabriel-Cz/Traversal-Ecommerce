import React from 'react'
import Container from 'react-bootstrap/Container'

const containerStyle = {
    boxShadow: "0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)",
    headerFont: "26px 'Unna', serif",
    contentFont: "18px 'Unna', serif",
    borderTop: "3px ridge rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    margin: "100px 50px"
}

export default function About() {
    return(
        <>
          <Container className="my-5 my-5">
              <div className="px-sm-5 py-5" style={{boxShadow: containerStyle.boxShadow, borderTop: containerStyle.borderTop, textAlign: containerStyle.textAlign, margin: containerStyle.margin}}>
                  <h1 style={{font: containerStyle.headerFont}}>About Traversal</h1>
                  <div className="mx-2 mt-5 text-center">
                      <p style={{font: containerStyle.contentFont}}>
                          Traversal is a Fictional Jewelry Ecommerce. Build by <a target="_blank" href="https://github.com/Gabriel-Cz">Gabriel Cz</a>.
                      </p>
                  </div>
              </div>
          </Container>
        </>
    );
}