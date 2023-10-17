import React, { useState } from 'react'
import { Container } from './style'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where
} from 'firebase/firestore'
import { auth, db } from '../../../../config/firebase'

export const Support = () => {
  const { currentUser } = auth;
  const colRef = collection(db, "users")
  const findUsername = query(colRef, where("email", "==", currentUser.email))
  const addSupportMsg = collection(db, "support")
  const [msg, setMsg] = useState();

  const handleChange = (e) =>{
    setMsg(e.target.value)
    console.log(msg)
  }

  const [username, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()

  onSnapshot(findUsername, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    setUserName(users[0].userName)
    setUserEmail(users[0].email)
  })

  return (
    <Container>
      <h2>Envie-nos uma mensagem!</h2>
      <form action="">
        <textarea
          name="mensagem"
          placeholder='Sua mensagem'
          onChange={
            (e) =>{
              setMsg(e.target.value)
              console.log(msg)
            }
          }
        ></textarea>

        <button onClick={(e)=>{
          console.log(findUsername)
          e.preventDefault()
          addDoc(addSupportMsg, {
            userName: username,
            userEmail: userEmail,
            msg:msg,
            createdAt: serverTimestamp()
          })
        }}>Enviar</button>
      </form>
    </Container>
  )
}
