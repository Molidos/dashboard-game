import React, { useContext, useState } from 'react'
import { Container } from './style'
import coinImg from "../../../imgs/coins.png"
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where
} from 'firebase/firestore'
import { auth, db } from '../../../config/firebase'
import { Admin } from '../pagesMain/admin/Admin'
import { UserViewContext } from '../../../context/userViewContext'
import { BuyCoin } from '../pagesMain/buyCoin/BuyCoin'

const addItems = collection(db, "Items")

export const Right = () => {

  const colRef = collection(db, "users")
  const { currentUser } = auth;
  const findUsername = query(colRef, where("email", "==", currentUser.email))
  const [isAdm, setIsAdm] = useState()
  const [userLevel, setUserLevel] = useState()

  const [inputs, setInput] = useState({
    img: "",
    name: "",
    onSale: false,
    owner: "",
    price: "",
    required: null,
  })

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(inputs)
  }


  const { view, setView } = useContext(UserViewContext)
  onSnapshot(findUsername, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    setUserLevel(users[0].level)
    setIsAdm(users[0].isAdm)
  })

  return (
    <Container>
      <div className="playerLevel">
        <h2>Nível do jogador: {userLevel}</h2>
      </div>{/*getCharacter*/}

      <div className="containerShop">
        <h3>Adquirir moedas</h3>
        <button onClick={()=>{
          setView(<BuyCoin />)
        }}><img src={coinImg} alt="" /> Get coins!</button>
      </div>{/*containerDownload*/}

      {isAdm ?
        <div className="containerAdmin">



          <h3>Painel do ADMIN</h3>
          <div className="btnAdmin">
            <button
              onClick={() => {
                setView(<Admin />)
              }}>Painel Admin</button>
          </div>{/*btnAdmin*/}

          <div className="createItems">
            <h2>Criar Items</h2>

            <form action="post">
              <input
                type="text"
                name='img'
                placeholder='imagem do item'
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder='nome'
                name='name'
                onChange={handleChange}
              />
              
              <input
                type="text"
                name='owner'
                placeholder='dono'
                onChange={handleChange} />
              <input
                type="text"
                name='price'
                placeholder='preço do item'
                onChange={handleChange}
              />


              <div className="btnCreateItem">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    addDoc(addItems, {
                      img: inputs.img,
                      name: inputs.name,
                      onSale: inputs.onSale,
                      owner: inputs.owner,
                      price: inputs.price,
                      required:inputs.required
                    })
                  }}

                >Criar Item</button>
              </div>{/*btnCreateItem */}
              <p>Ao clicar em criar item seu item será direcionado para loja</p>
            </form>
          </div>{/*createItems*/}

        </div>/*ContainerAdmin */
        :
        <></>
      }

    </Container>
  )
}
