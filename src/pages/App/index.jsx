import React from 'react';
import styled from 'styled-components';

import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';
import { Cards } from '../../components/Cards';
import { Card } from '../../components/Card';
import { Profile } from '../../components/Profile';
import { Popup } from '../../components/Popup';
import { Preview } from '../../components/Preview';
import { Form } from '../../components/Form';
import { PopupConfirm } from '../../components/PopupConfirm';

import { useApi } from '../../hooks/useApi';
import { usePreviewPopup } from '../../hooks/usePreviewPopup';
import { useAddPopup } from '../../hooks/useAddPopup';
import { useEditProfil } from '../../hooks/useEditProfil';
import { useChangeAvatar } from '../../hooks/useChangeAvatar';
import { useConfirm } from '../../hooks/useConfirm';

import { dataAddCard } from '../../utils/constants';
import { dataEditProfil } from '../../utils/constants';
import { dataChangeAvatar } from '../../utils/constants';
import { dataConfirm } from '../../utils/constants';

import './styles.css';

export const App = () => {
  const {
    cards,
    user,
    handlerCardDelete,
    handlerCardLike,
    handlerAddCard,
    handlerEdit,
    handlerChangePhoto,
  } = useApi();
  const { previewData, handlerOpenPreview, handlerClosePreview } = usePreviewPopup();
  const { showPopupAdd, handlerOpenPopupAdd, handlerClosePopupAdd, handlerSubmit } = useAddPopup({
    handlerAddCard,
  });
  const { showEditProfil, handlerOpenEditProfil, handlerCloseEditProfil, handlerEditSubmit } =
    useEditProfil({
      handlerEdit,
    });
  const { showChangeAvatar, handlerOpenChange, handlerCloseChange, handlerChangeSubmit } =
    useChangeAvatar({
      handlerChangePhoto,
    });
  const { showConfirm, handlerOpenConfirm, handlerCloseConfirm, handlerConfirmSubmit } = useConfirm(
    {
      handlerCardDelete,
    }
  );

  const Test = styled.div`
  background: red;
    width: 100px;
    height: 100px;
  `

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
          onCardAdd={handlerOpenPopupAdd}
          onEditProfil={handlerOpenEditProfil}
          onChangeAvatar={handlerOpenChange}
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
              onConfirm={handlerOpenConfirm}
              onOpenPopup={handlerOpenPreview}
            />
          ))}
        </Cards>
      </Main>
      <Footer />

      <Popup show={previewData.src} onClose={handlerClosePreview}>
        <Preview src={previewData.src} alt={previewData.alt} />
      </Popup>

      <Popup show={showPopupAdd} onClose={handlerClosePopupAdd}>
        <Form data={dataAddCard} onSubmit={handlerSubmit} show={showPopupAdd} />
      </Popup>

      {user.name ? (
        <Popup show={showEditProfil} onClose={handlerCloseEditProfil}>
          <Form data={dataEditProfil} onSubmit={handlerEditSubmit} initialValue={user} show={showEditProfil} />
        </Popup>
      ) : null}

      <Popup show={showChangeAvatar} onClose={handlerCloseChange}>
        <Form data={dataChangeAvatar} onSubmit={handlerChangeSubmit} />
      </Popup>

      <Popup show={showConfirm} onClose={handlerCloseConfirm}>
        <PopupConfirm data={dataConfirm} onClick={handlerConfirmSubmit} />
      </Popup>

      <Test>Hello</Test>
    </div>
  );
};
