import React from 'react';
import './SubmitButtonBlock.css';
import isDisabled from '../../services/isDisabled';

const SubmitButtonBlock = () => { 

  return ( 
      <div className="button-wrapper">
        <button type="submit" 
        disabled={isDisabled()}
        >
          Зарегестрироваться
        </button>
      </div>
    );
}
 
export default SubmitButtonBlock;