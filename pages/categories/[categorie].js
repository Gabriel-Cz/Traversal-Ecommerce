import React, { useState } from 'react'
import { useRouter } from 'next/router'
import CategorieHeader from '../../components/CategorieHeader'
import CategorieContent from '../../components/CategorieContent'

export default function Categories() {
    const [currentRoute] = useState('');
    const router = useRouter();
    const {categorie} = router.query
    useRouter()
    return(
        <>
          <CategorieHeader categorieName={categorie}></CategorieHeader>
          <CategorieContent categorieName={categorie}></CategorieContent>
        </>
    );
}