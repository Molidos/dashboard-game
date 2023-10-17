import React, { useState } from 'react'
import { Container } from './style'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import imgBackground from "../../imgs/defaultWallpaperLogin.png"

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMsg, setErrorMsg] = useState()

  return (
    <Container>

      <div className="background">
        <img src={imgBackground} alt="" />
      </div>

      <div className="form">
        <form action="post">
          <h2>Insira os dados abaixo</h2>
          <div className="container-input">
            <input
              type="email"
              placeholder='Email'
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>{/*container-input*/}
          <div className="container-input">
            <input
              type="password"
              placeholder='Senha'
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>{/*container-input*/}

          <div className="container-button">
            <button type='submit'
              onClick={(e)=>{
                e.preventDefault()
                signInWithEmailAndPassword(auth, email, password)
                .then(()=>{
                  navigate("/")
                  console.log("Usuário Logado!")
                })
                .catch((err)=>{
                  alert("Login error: ", err.message)
                  setErrorMsg("Login error: ", err.message)
                });
              }}
            >
              Fazer Login
            </button>
          </div>{/*container-button*/}

        </form>
        
      </div>{/*form*/}
      {errorMsg &&
        <div className="containerError">
          <p>{errorMsg}</p>
        </div>
      }
      <p>Não possui uma conta? <Link to="/register">Cadastrar-se</Link></p>
    </Container>/*Container*/
  )
}
