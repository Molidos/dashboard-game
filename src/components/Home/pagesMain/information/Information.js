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

export const Information = () => {
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
    const unsubscribe = onSnapshot(colNews, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setNews(items);
    });

    return () => unsubscribe(); // Limpa o listener quando o componente é desmontado
  }, []);

  const [input, setInput] = useState({
    title: '',
    content: '',
    type: '',
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
        type: '',
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
                placeholder="Título da notícia"
                value={input.title}
                onChange={handleChange}
              />
              <textarea
                name="content"
                placeholder="Conteúdo"
                value={input.content}
                onChange={handleChange}
              ></textarea>
              <input
                type="text"
                name="type"
                placeholder="Tipo"
                value={input.type}
                onChange={handleChange}
              />
              <button type="submit">Criar Notícia</button>
            </form>
          </div>
        }

        <div className="containerAllInfo">
          <h3>Todas as mensagens</h3>
          <div className="containerMsg">
            {news.map((item) => (
              <div className="containerInfo" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <p>{item.createdAt && item.createdAt.toDate().toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};