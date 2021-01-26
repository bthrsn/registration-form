import React, {useState} from 'react';
import './LanguageBlock.css';

const options = ['Язык', 'Русский', 'Английский', 'Китайский', 'Испанский'];

const LanguageBlock = () =>  {

  const [isOpen, setToOpen] = useState(false),
        [selectedOption, setSeletedOption] = useState(null),
        [isActive, setActive] = useState(false);
        
  const toggling = () => {
    setActive(!isActive);
    setToOpen(!isOpen)
    };
  
  const onOptionClicked = (value) => () => {
    setSeletedOption(value);
    setToOpen(false);
  } 
  
return ( 
        <>
          <div className="select-wrapper"
          onClick={toggling}>
            <span>Язык</span>
            <div className={`
              select-trigger 
              ${isActive ? 'select-active' : ''}
            `}
              id="language"
              >
              {selectedOption || 'Язык'}
            </div>
            {isOpen && (
              <div  className="dropdown-wrapper ">
                <ul className="select">
                  {options.map(option => (
                    <li className="option" 
                      onClick={onOptionClicked(option)} 
                      key={Math.random()} 
                    >
                    {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
    );
}
 
export default LanguageBlock;