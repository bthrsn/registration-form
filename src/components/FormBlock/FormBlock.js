import React, { useState } from 'react';
import './FormBlock.css';
import LanguageBlock from  '../LanguageBlock';
import CheckboxBlock from '../CheckboxBlock';
import SubmitButtonBlock from '../SubmitButtonBlock';
import {validateInput, validName, validEmail, validPhone} from '../../services/validateInput';


const FormBlock = () =>  {

const [name, setName] = useState(''),
      [email, setEmail] = useState(''),
      [phone, setPhone] = useState('');
      
return ( 
      <>
        <form>
          <label>
            Имя
            <input type="text" placeholder="Введите Ваше имя" 
              onInput={(e) => validateInput(e, validName, setName)} />
            <span className="error">{name.error}</span>
          </label>
          <label>
            Email
            <input type="email" id="email" placeholder="Введите ваш email" 
              onInput={(e) => validateInput(e, validEmail, setEmail)}/>
            <span className="error">{email.error}</span>
          </label>
          <label>
            Номер телефона
            <input type="phone"  id="phone" placeholder="Введите номер телефона" 
              onInput={(e) => validateInput(e, validPhone, setPhone)}/>
            <span className="error">{phone.error}</span>
          </label>
        </form> 
        <LanguageBlock />
        <CheckboxBlock />
        <SubmitButtonBlock />
      </>
    );
}
 
export default FormBlock;