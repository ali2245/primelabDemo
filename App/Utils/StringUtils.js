
export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePassword(password) {
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  const haveCapital = password.match(upperCaseLetters)
  const haveNumber = password.match(numbers)
  const haveSymbol = symbols.test(password)
  const validLngth = password.length >= 10

  return haveCapital && haveNumber && haveSymbol && validLngth
}

export function validatePhoneNumber(phoneNumber) {
  const regix = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
  return regix.test(phoneNumber);
}

export function isValidExpiry(val) {
  const date = new Date();
  const cYear = date.getFullYear();
  const year = val ? parseInt(`20${val}`) : 0;
  return cYear <= year;
}