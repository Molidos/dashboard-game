import React, { useEffect, useState } from 'react'
import { Container } from './style'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../../config/firebase'
import { CardItem } from '../../../cardItem/CardItem'

export const Shop = () => {

  const colItemsRef = collection(db, "Items")
  const findShopItems = query(colItemsRef, where("onSale", "==", true))
  const [storeItems, setStoreItems] = useState([])

  useEffect(() => {
    onSnapshot(findShopItems, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      setStoreItems(items)
    })
  }, []);


  return (
    <Container>
      <h2>Itens a Venda!</h2>
      <div className="cotainerItems">
       {
        storeItems.map((item)=>{
          return(
            <CardItem item={item} key={item.id}/>
          )
        })
       }
          
      </div>{/*containerItems */}
      <div className="containerWallet">
        <h3>Carteira:</h3>
        <img src="https://i.pinimg.com/564x/33/22/c9/3322c9dd085a88fa55820be0059a6367.jpg" alt="" />
        <span>{0}</span>
      </div>{/*containerWallet */}
    </Container>
  )
}
