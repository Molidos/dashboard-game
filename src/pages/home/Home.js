import { signOut } from 'firebase/auth'
import React from 'react'
import { Container } from './style';
import { Left } from '../../components/Home/left/Left';
import { Main } from '../../components/Home/main/Main';
import { Right } from '../../components/Home/right/Right';
import defaultBanner from "../../imgs/defaultBanner.png"
import { UserViewProvider } from '../../context/userViewContext';


export const Home = () => {

  //------

  return (
    <UserViewProvider>
      <Container>

        <div className="containerBanner">

          <img src={defaultBanner} alt="" />
        </div>{/*containerBanner */}
        
        
        <main>
          <Left/>
          <Main/>
          <Right/>
        </main>
      </Container>
    </UserViewProvider>
  )
}
