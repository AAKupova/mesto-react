import React from "react";

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";

import { useNormalizeData } from "../../hooks/useNormalizeData";

import "./styles.css";

export const App = () => {
  const { cards, user, handlerCardDelete, handlerCardLike } =
    useNormalizeData();

  console.log(user);
  console.log(<img />)

  return (
    <div className="page">
      <Header>
        <Logo />
      </Header>
      <Main>
        <Profile
          avatar={user.avatar}
          title={user.name}
          text={user.about}
        />
        <Cards>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              img={card.img}
              likesCount={card.likesCount}
              isMy={card.isMy}
              isMyLike={card.isMyLike}
              onDelete={handlerCardDelete}
              onLike={handlerCardLike}
            />
          ))}
        </Cards>
      </Main>
      <Footer />
    </div>
  );
};
