import React from 'react'
import { Container } from './style'


export const BuyCoin = () => {
  return (
    <Container>
      <h2>Confira os nossos pacotes</h2>
      <div className="containerAllPackages">
        <div className="containerPackage">
          <img src="https://i.pinimg.com/originals/54/ca/a5/54caa5a4c466ef5b269b772cb73f7765.jpg" alt="" />
          <p>Pacote com 300 moedas</p>
          <button>Comprar agora</button>
        </div>{/*containerPackage*/}

        <div className="containerPackage">
          <img src="https://i.pinimg.com/originals/9b/f4/fe/9bf4feab40dbf84aff64658f3fa5d0e8.jpg" alt="" />
          <p>Pacote com 1000 moedas</p>
          <button>Comprar agora</button>
        </div>{/*containerPackage*/}

        <div className="containerPackage">
          <img src="https://cdn.dribbble.com/users/4709886/screenshots/11649099/media/36c301f52246c6f95dec0971eb4c4e34.png?compress=1&resize=400x300&vertical=center" alt="" />
          <p>Pacote com 1200 moedas</p>
          <button>Comprar agora</button>
        </div>{/*containerPackage*/}
      </div>{/*containerAllPackages */}

    </Container>
  )
}
