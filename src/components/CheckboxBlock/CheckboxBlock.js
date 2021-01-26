import React, { useState } from 'react';
import './CheckboxBlock.css';

const CheckboxBlock= () => {

  const [ischecked, setChecked] = useState(false);
  
  const toggling = () => {
    setChecked(!ischecked);
    };

  return ( 
    <div className="checkboxWrapper">
      <label className="checkbox-label">
        <input type="checkbox" id="agreement" />
        <span 
          className="custom-checkbox"
          onClick={toggling}
        >
        </span>
        Я принимаю <a href="#">условия</a> соглашения
      </label>
    </div>
  );
}
 
export default CheckboxBlock;