import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
  return ( 
    <div className="AppHeader">
      <h1>Регистрация</h1>
      <span>Уже есть аккаунт?
        <a href="#"> Войти</a>
      </span>
    </div>
  );
}
 
export default AppHeader;