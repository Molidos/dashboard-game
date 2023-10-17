import React, { useEffect, useState } from 'react'
import { Container } from './style'
import {
  collection,
  onSnapshot,
  query,
  doc,
  where,
  updateDoc
} from 'firebase/firestore';
import { auth, db } from '../../../../config/firebase';
import { BsCoin } from "react-icons/bs";
//import coinImg from "../../../imgs/"

export const UserPanel = () => {

    //UserName
  const colRef = collection(db, "users")
  const { currentUser } = auth;
  const findUsername = query(colRef, where("email", "==", currentUser.email))

  const [username, setUserName] = useState()
  const [userCoins, setUserCoins] = useState()

  onSnapshot(findUsername, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    setUserName(users[0].userName)
    setUserCoins(users[0].coins)
  })

  //UserItems
  const colItemsRef = collection(db, "Items")
  const findUserItems = query(colItemsRef, where("owner", "==", currentUser.email))
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    onSnapshot(findUserItems, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
        setUserItems(items)
      })
    })
  }, []);



    return (
        <Container>
            <h1>Seja bem vindo {username}</h1>

            <div className="userContent">

                <div className="myItems">
                    <h3>Meus Itens</h3>

                    <div className="containerAllItems">
                        {userItems.map((item) => {

                            const toogleSale = () => {
                                const itemRef = doc(db, "Items", item.id);

                                const data = {
                                    img: item.img,
                                    name: item.name,
                                    onSale: !item.onSale,
                                    owner: item.owner,
                                    price: item.price,
                                    required: item.required
                                };

                                updateDoc(itemRef, data)
                                    .then(docRef => {
                                        console.log("A New Document Field has been added to an existing document");
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            }

                            return (
                                <div className='containerItem' key={item.id}>
                                    <img src={item.img} alt="" />
                                    <p className='itemName'>{item.name}</p>
                                    
                                    {item.onSale ?
                                        <button onClick={() => {
                                            toogleSale()
                                        }}>Tirar da loja</button>
                                        :
                                        <button onClick={() => {
                                            toogleSale()
                                        }}>Vender</button>
                                    }
                                </div>
                            )
                        })}
                    </div>{/*containerAllItems */}
                </div>{/*myItems*/}

                <div className="containerWallet">
                    <h3>Carteira:</h3>
                    <img src="https://i.pinimg.com/564x/33/22/c9/3322c9dd085a88fa55820be0059a6367.jpg" alt="" />
                    <span>{userCoins}</span>
                </div>{/*containerWallet */}

            </div>{/*userContent*/}
            <div className="containerPlayNow">

            </div>{/*containerPlayNow */}
        </Container>
    )
}
