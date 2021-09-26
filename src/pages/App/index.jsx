import React from 'react';

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

import { useNormalizeData } from '../../hooks/useNormalizeData';
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
  const { cards, user, handlerCardDelete, handlerCardLike } =
    useNormalizeData();
  const { previewData, handlerTogglePreview } = usePreviewPopup();
  const { showPopupAdd, handlerTogglePopupAdd, handlerSubmit} = useAddPopup();
  const { showEditProfil, handlerToggleEditProfil, handlerEditSubmit} = useEditProfil();
  const { showChangeAvatar, handlerToggleChange, handlerChangeSubmit} = useChangeAvatar();
  const { showConfirm, handlerToggleConfirm, handlerConfirmSubmit} = useConfirm();
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
          onCardAdd={handlerTogglePopupAdd}
          onEditProfil={handlerToggleEditProfil}
          onChangeAvatar={handlerToggleChange}
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
              onConfirm={handlerToggleConfirm}
              onOpenPopup={handlerTogglePreview}
            />
          ))}
        </Cards>
      </Main>
      <Footer />
      <Popup show={previewData.src} onclose={handlerTogglePreview}>
        <Preview src={previewData.src} alt={previewData.alt} />
      </Popup>
      <Popup show={showPopupAdd} onclose={handlerTogglePopupAdd}>
        <Form data={dataAddCard} onSubmit={handlerSubmit} />
      </Popup>
      <Popup show={showEditProfil} onclose={handlerToggleEditProfil}>
        <Form data={dataEditProfil} onSubmit={handlerEditSubmit} />
      </Popup>
      <Popup show={showChangeAvatar} onclose={handlerToggleChange}>
        <Form data={dataChangeAvatar} onSubmit={handlerChangeSubmit} />
      </Popup>
      <Popup show={showConfirm} onclose={handlerToggleConfirm}>
        <PopupConfirm data={dataConfirm} onClick={handlerConfirmSubmit}/>
      </Popup>
    </div>
  );
};
