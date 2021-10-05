import React from 'react';
import { ThemeProvider } from 'styled-components';

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
import { FlexContainer } from '../../components/FlexContainer';

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


const theme = {
  device: {
    tablet: 'screen and (min-width: 625px)',
    iPads: 'screen and (min-width: 768px)',
    laptops: 'screen and (min-width: 920px)',
    desktop: 'screen and (min-width: 1024px)',
  }
}

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

  return (
    <ThemeProvider theme={theme}>
    <div className="page">
        <Header device={theme}>
        <FlexContainer >
          <Logo device={theme}/>
          <FlexContainer gap='0 24px'>
            <p>aa.kupova@gmail.com</p>
            <button>Выйти</button>
          </FlexContainer >
        </FlexContainer >
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
    </div>
    </ThemeProvider>
  );
};
