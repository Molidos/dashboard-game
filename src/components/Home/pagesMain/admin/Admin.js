import React, { useEffect, useState } from 'react'
import { Container } from './style'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../../config/firebase'

export const Admin = () => {

  //UserItems

  //Msgs
  const supportRef = collection(db, "support")
  const findUsersMsg = query(supportRef)
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    onSnapshot(findUsersMsg, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      setMsgs(items)
    })
  }, []);

  //coins
  const coinRef = collection(db, "requests")
  const findCoinsReq = query(coinRef, where("type", "==", "coin"))

  const [coins, setCoins] = useState([])

  useEffect(() => {
    onSnapshot(findCoinsReq, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
        console.log(items)
      })
      setCoins(items)
    })
  }, []);

  //Items
  const itemRef = collection(db, "Items")
  const findUsername = query(itemRef, where("required", "!=", null))

  const [items, setItems] = useState([])

  useEffect(() => {
    onSnapshot(findUsername, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      setItems(items)
    })
  }, []);

  return (
    <Container>
      <h2>Painel Admin</h2>
      <h3>Pedidos de compra</h3>
      <h4>moedas</h4>
      <div className='containerAllItems'>
        {
          coins.map((item) => {
            return (
              <div className="containerItem" key={item.id}>
                <p>Comprador: {item.buyer}</p>
                <p>Valor: {item.value}</p>
                <button>Permitir compra</button>
              </div>
            )
          })
        }
      </div>{/*containerItem*/}
      
      <h4>itens</h4>
      <div className='containerAllItems'>
        {
          items.map((item) => {
            return (
              <div className="containerItem" key={item.id}>
                <p>Item: {item.name}</p>
                <p>Comprador: {item.required}</p>
                <p>Vendedor: {item.owner}</p>
                <button>Permitir compra</button>
              </div>
            )
          })
        }
      </div>{/*containerItem*/}

      <h3>Suport</h3>
      <p>Mensagens recebidas</p>
      <div className="containerAllMsgs">
        {
          msgs.map((item) => {
            return (
              <div className='containerMsgSupport' key={item.id}>
                <h3>{item.userName}</h3>
                <p>{item.msg}</p>
                <p className='date'>{item.createdAt && item.createdAt.toDate().toLocaleString()}</p>
              </div>/*containerMsgSupport*/
            )
          })
        }
      </div>{/*containerAllMsgs*/}
      

    </Container>
  )
}
