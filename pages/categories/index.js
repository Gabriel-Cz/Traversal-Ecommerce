import React from 'react'
import CategorieHeader from '../../components/CategorieHeader'
import CategorieContent from '../../components/CategorieContent'

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <>
              <CategorieHeader></CategorieHeader>
            </>
        );
    }
}