import React from 'react'
import Catalog from './components/Catalog/Catalog'
import CatalogList from './components/CatalogList/CatalogList'


export default function App() {

  return (
    
    <div className="main">
      <h2>Приглянитесь к этим предложениям</h2>
      <CatalogList/>
    </div>
  )
}