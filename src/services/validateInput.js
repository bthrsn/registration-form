
const validateInput = (e, validItem, setValue) => {
  const value = e.target.value;
  if (!value.match(validItem)) {
    setValue({...value, error: 'Введено некорректное значение'});
    return false; 
  } else {
    setValue(value);
    return true;  
  }
}

const validName = /^[А-ЯЁа-яё -]+$/,
      validEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
      validPhone = /^[\d]{11}[()+-]*$/;

export {validateInput, validName, validEmail, validPhone}