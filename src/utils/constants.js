export const dataAddCard = {
  title: 'Новое место',
  button: 'Создать',
  fields: [
    {
      minLength: '2',
      maxLength: '30',
      type: 'text',
      name: 'name',
      placeholder: 'Название',
    },
    {
      pattern: 'https://.*',
      type: 'url',
      name: 'link',
      placeholder: 'Ссылка на картинку',
    },
  ],
};

export const dataEditProfil = {
  title: 'Редактировать профиль',
  button: 'Сохранить',
  fields: [
    {
      minLength: '2',
      maxLength: '40',
      type: 'text',
      name: 'name',
      placeholder: 'Имя',
    },
    {
      minLength: '2',
      maxLength: '200',
      type: 'text',
      name: 'about',
      placeholder: 'Описание',
    },
  ],
};

export const dataChangeAvatar = {
  title: 'Обновить аватар',
  button: 'Сохранить',
  fields: [
    {
      pattern: 'https://.*',
      type: 'url',
      name: 'link',
      placeholder: 'Ссылка на фото',
    },
  ],
};

export const dataConfirm = {
  title: 'Вы уверены?',
  button: 'Да',
};
