import React, { useEffect, useState } from 'react';
import { Container } from './style';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { auth, db } from '../../../../config/firebase';

export const Events = () => {
  const colNews = collection(db, "News");
  const [news, setNews] = useState([]);
  const [isAdm, setIsAdm] = useState()
  
  const colRef = collection(db, "users")
  const { currentUser } = auth;
  const findUsername = query(colRef, where("email", "==", currentUser.email))
  
  onSnapshot(findUsername, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    setIsAdm(users[0].isAdm)
  })

  useEffect(() => {
    onSnapshot(colNews, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
        setNews(items)
      })
    })
  }, []);

  console.log(news)

  const [input, setInput] = useState({
    title: '',
    content: '',
    type: "Event",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = await serverTimestamp()

    addDoc(colNews, {
      title: input.title,
      content: input.content,
      type: input.type,
      createdAt: date,
    }).then(() => {
      setInput({
        title: '',
        content: '',
      });
    });
  };

  return (
    <Container>
      <h2>Últimas Novidades!</h2>

      <div className="containerInformation">
        {isAdm &&
          <div className="containerNewInfo">
            <h3>Crie uma nova notificação</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Título do evento"
                value={input.title}
                onChange={handleChange}
              />
              <textarea
                name="content"
                placeholder="Conteúdo"
                value={input.content}
                onChange={handleChange}
              ></textarea>
              
              <button type="submit">Criar Evento</button>
            </form>
          </div>
        }

        <div className="containerAllInfo">
          <h3>Todas os Eventos</h3>
          <div className="containerMsg">
            {news.map((item) => {
              item.type === "Event"  &&
                  <div className="containerInfo" key={item.id}>
                    teste
                  </div>
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};
