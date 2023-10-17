import React from 'react'
import { Container } from './style'
import { collection, doc, query, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

export const CardItem = ({ item }) => {
    const { currentUser } = auth;
    const colRef = collection(db, "users")

    const btnBuy = ()=>{
        const itemRef = doc(db, "Items", item.id);
        let data = {
            img: item.img,
            name: item.name,
            onSale: item.onSale,
            owner: item.owner,
            price: item.price,
            required: item.required
        };
        
        if(item.required !== null && item.required === currentUser.email){
            data = {
                img: item.img,
                name: item.name,
                onSale: item.onSale,
                owner: item.owner,
                price: item.price,
                required: null
            }
        }else if(item.required === null){
            data = {
                img: item.img,
                name: item.name,
                onSale: item.onSale,
                owner: item.owner,
                price: item.price,
                required: currentUser.email
            }
        }else{
            data = {
                img: item.img,
                name: item.name,
                onSale: item.onSale,
                owner: item.owner,
                price: item.price,
                required: item.required
            }
        }

        if(item.owner === currentUser.email){
            data = {
                img: item.img,
                name: item.name,
                onSale: item.onSale,
                owner: item.owner,
                price: item.price,
                required: item.required
            }
        }

        updateDoc(itemRef, data)
            .then(docRef => {
                console.log("Required modified");
            })
            .catch(error => {
                console.log(error);
        })
    }
    
    const findUsername = query(colRef, where("email", "==", currentUser.email))

    return (
        <Container>
            <img src={item.img} alt="" />
            <p className='itemName'>{item.name}</p>
            <p className='itemName'>Preço: {item.price}</p>
            {item.required?
                
                <button onClick={() => {
                    btnBuy()
                }}>Reservado</button>
                :
                <button onClick={() => {
                    btnBuy()
                }}>Comprar</button>
            }


            
        </Container>
    )
}
