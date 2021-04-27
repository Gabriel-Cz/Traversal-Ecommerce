import React from 'react'
import Container from 'react-bootstrap/Container'
import ProductsPageHeader from '../../components/ProductsPageHeader'
import ProductsPageContent from '../../components/ProductsPageContent'

export default function Products() {
    return(
        <>
          <Container>
              <ProductsPageHeader></ProductsPageHeader>
              <ProductsPageContent></ProductsPageContent>
          </Container>
        </>
    )
}