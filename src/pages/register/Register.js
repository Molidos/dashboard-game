import React, { useState } from 'react'
import { Container } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { db } from '../../config/firebase';
import BackgroundImg from "../../imgs/defaultWallpaperRegister.png"
import {
  addDoc, collection, serverTimestamp
} from "firebase/firestore"

const addUser = collection(db, "users")

export const Register = () => {

  const navigate = useNavigate()
  /*useStates*/

  const [username, setUsername] = useState();
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState()
  const [errRegister, setErrRegister] = useState()

  return (
    <Container>
      <div className="background">
        <img src={BackgroundImg} alt="" />
      </div>
      
      <div className="form">

        <form action="">

          <div className="container-input">
            <input
              type="text"
              placeholder='nome de usuário'
              onChange={(e)=>{
                setUsername(e.target.value)
                console.log(username)
              }}
            />
          </div>{/*container-input*/}

          <div className="container-input">
            <input
              type="text"
              placeholder='email'
              onChange={(e)=>{
                setEmail(e.target.value)
                console.log(email)
              }}
            />
          </div>{/*container-input*/}

          <div className="container-input">
            <input
              type="password"
              placeholder='senha'
              onChange={(e)=>{
                setPassword(e.target.value)
                console.log(password)
              }}
            />
          </div>{/*container-input*/}

          <div className="container-input">
            <input
              type="password"
              placeholder='confirmação de senha'
              onChange={(e)=>{
                setRepeatPassword(e.target.value)
                console.log(repeatPassword)
              }}
            />
          </div>{/*container-input*/}

          <div className="container-button">
            <button onClick={(e)=>{
              e.preventDefault()

              //Validations
              if(username === "")
                return setErrRegister("Campo nome de usuário obrigatório!")
                
              if(email === "")
                return setErrRegister("Campo email é obrigatório!")
              if(password === "")
                return setErrRegister("Campo senha é obrigatório!")
              if(repeatPassword !== password)
                return setErrRegister("Senha e confirmação de senha diferentes!")
              
              createUserWithEmailAndPassword(auth, email, password)
              .then(()=>{
                
                navigate("/")
                console.log("SignUp Success!")
              })
              .catch((err)=>console.log("erro:",err.message))

              addDoc(addUser, {
                userName: username,
                email: email,
                coins: 0,
                level: 0,
                isAdm: false,
                createdAt: serverTimestamp()
              })

              
            }} >
              Cadastrar-se
            </button>
          </div>{/*container-button*/}

        </form>
        <div className="errContainer">
            <p>{errRegister}</p>
        </div>{/*ErrContainer*/}

      </div>{/*form*/}
      <p>Já possui cadastro? <Link to="/login">Fazer Login</Link></p>
    </Container>
  )
}
