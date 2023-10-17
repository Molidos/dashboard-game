import React, { useContext } from 'react'
import { Container } from './style'
import logo from '../../../imgs/references/logo.gif'
import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase'
import { UserViewContext } from '../../../context/userViewContext'


import { Shop } from '../pagesMain/shop/Shop'
import { UserPanel } from '../pagesMain/userPanel/UserPanel'
import { BuyCoin } from '../pagesMain/buyCoin/BuyCoin'
import { Information } from '../pagesMain/information/Information'
import { VipPass } from '../pagesMain/vipPass/VipPass'
import { Events } from '../pagesMain/events/Events'
import { HistoryEvents } from '../pagesMain/historyEvents/HistoryEvents'
import { Rules } from '../pagesMain/rules/Rules'
import { Support } from '../pagesMain/support/Support'

export const Left = () => {

    const { view, setView } = useContext(UserViewContext)

    return (
        <Container>
            <div className='headerLeft'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>{/*Logo*/}

                <div className="btnPlay">
                    <button onClick={() => {
                        setView(<Shop />)
                    }}>Comprar Items</button>
                </div>{/*btnPlay */}
            </div>{/*headerLeft*/}

            <div className="mainLeft">
                <div className="InfoLeft">
                    <ul>
                        <li className='containerItemMenu'>
                            <div className="nameCategory">
                                <h3>News</h3>
                            </div>{/*nameCategory*/}

                            <ul>
                                <li
                                    onClick={() => {
                                        setView(<Information />)
                                    }}>Arquivo de Noticias</li>

                                <li
                                    onClick={() => {
                                        setView(<Events />)
                                    }}>Agenda de Eventos</li>
                            </ul>

                        </li>

                        <li className='containerItemMenu'>
                            <div className="nameCategory">
                                <h3>Shop</h3>
                            </div>{/*nameCategory*/}

                            <ul>
                                <li onClick={() => {
                                    setView(<BuyCoin />)
                                }}>Adquirir Moedas</li>

                                <li onClick={() => {
                                    setView(<Shop />)
                                }}>WebShop</li>

                                <li onClick={() => {
                                    setView(<VipPass />)
                                }}>Vantagens Vips</li>
                            </ul>

                        </li>


                        <li className='containerItemMenu'>
                            <div className="nameCategory">
                                <h3>Support</h3>
                            </div>{/*nameCategory*/}

                            <ul>
                                <li
                                    onClick={() => {
                                        setView(<Rules />)
                                    }}>Nossas Regras</li>
                                <li
                                    onClick={() => {
                                        setView(<Support />)
                                    }}>Equipe de Suporte</li>
                            </ul>
                        </li>

                        <li className='containerItemMenu'>
                            <div className="nameCategory">
                                <h3>Conta</h3>
                            </div>{/*nameCategory*/}

                            <ul>

                                <li onClick={() => {
                                    setView(<UserPanel />)
                                }}>Meu Perfil</li>

                                <li onClick={() => {
                                    signOut(auth)
                                        .then(() => console.log("signOut Success"))
                                        .catch((err) => { console.log("erro: ", err.message) })

                                }}>
                                    Sair
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>{/*InfoLeft*/}
            </div>{/*mainLeft*/}
        </Container>
    )
}
