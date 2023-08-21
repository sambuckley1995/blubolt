import React, { useState, useEffect } from "react";
import './App.scss'
import { useQuery } from '@apollo/react-hooks'
import GET_PRODUCTS_IN_COLLECTION from './gql/getCollection'
import Product from "./components/Product/Product"




const App = () => {
  const [collectionData, setCollectionData] = useState([])
  const [numberShown, setNumberShown] = useState(5)
  const [reversed, setreversed] = useState(false)
  const [highToLowDisplay, setHighToLowDisplay] = useState(false)
  const [lowToHighDisplay, setLowToHighDisplay] = useState(false)

  const { data, loading, error } = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: numberShown,
      handle: 'skateboard'
    }
  })

  useEffect(() => {
    setCollectionData(data?.collectionByHandle?.products.edges)
  }, [data, reversed])

  const reverseProductData = () => {
    reversed ? setreversed(false) : setreversed(true)
    const reversedData = collectionData?.reverse()
    setCollectionData(reversedData)
  }

  const highToLow = () => {
    highToLowDisplay ? setHighToLowDisplay(false) : setHighToLowDisplay(true)
    const highToLowData = collectionData?.sort((a, b) => parseFloat(b.node?.variants?.edges[0].node.price.amount) - parseFloat(a.node?.variants?.edges[0].node.price.amount))
    setCollectionData(highToLowData)
  }

  const lowToHigh = () => {
    lowToHighDisplay ? setLowToHighDisplay(false) : setLowToHighDisplay(true)
    const lowToHighData = collectionData?.sort((a, b) => parseFloat(a.node?.variants?.edges[0].node.price.amount) - parseFloat(b.node?.variants?.edges[0].node.price.amount))
    setCollectionData(lowToHighData)
  }

  const showNineProducts = () => {
    numberShown === 5 ? setNumberShown(9) : setNumberShown(5);
  }


  if (error) {
    return (<div className="App">`Error ${error.message}` </div>)
  }

  if (loading) {
    // Data is still loading....
    return (<div className="App">Loading....</div>)
  }



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>

        <div className="buttonGroup">
          <button onClick={reverseProductData}>Reverse Product Order</button>
          <button onClick={highToLow}>Price High to Low</button>
          <button onClick={lowToHigh}>Price Low to High</button>
          <button onClick={showNineProducts}>Display 9 products</button>
        </div>

        <div className="ProductList grid-product-list">

          {collectionData?.map((product, i) => {
            return (<Product collectionData={product} key={i}></Product>)
          })}

        </div>


      </main>
    </div>
  )
}

export default App
