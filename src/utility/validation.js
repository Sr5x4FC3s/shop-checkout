const axios = require('axios');
const { verifyValidID } = require('./utility');

export const checkFirstName = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z -])/gi;

  if (props.firstName.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkLastName = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z -])/gi;

  if (props.lastName.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkPassword = (props) => {
  let valid = true;

  if (props.password.length > 7) {
  } else {
    valid = false;
    alert('enter a password with length that is greater than 7');
  }
  return valid;
};

export const checkCustomId = async (props) => {
  let valid = true;
  let matchIntegers = /([0-9])/gi;

  if (props.id.match(matchIntegers)) {
    await verifyValidID(props).then((response) => {
      console.log(response.data);
      let data = response.data;
      if (data === `NOT_FOUND`) {
        return valid;
      } else {
        valid = false;
        alert('ID you\'ve selected is already in use');
      }
    }).catch((error) => {
      console.log(error);
    });
    return valid;
  } else {
    alert('Enter a numerical value');
    return false;
  }
};

export const checkAddress1 = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z /-_,.])/gi;

  if (props.address1.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkAddress2 = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z /-_,.])/gi;

  if (props.address2.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkCity = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z /-_,.])/gi;

  if (props.city.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkState = (props) => {
  let valid = true;
  let matchAlphabet = /([A-Za-z /-_,.])/gi;

  if (props.state.match(matchAlphabet)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkZipCode = (props) => {
  let valid = true;
  let matchIntegers = /([0-9])/gi;

  if (props.id.match(matchIntegers) && props.zipcode.length === 5) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkCredit = (props) => {
  let valid = true;
  let matchIntegers = /([0-9])/gi;

  if ((props.id.match(matchIntegers) && props.credit.length === 15) || (props.id.match(matchIntegers) && props.credit.length === 16)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkExpiration = (props) => {
  let valid = true;
  let expirationMatch = /(\d{2}\/\d{4})/gi;
  let matchIntegers = /([0-9])/gi;

  if (props.id.match(matchIntegers) && props.expiration.toString().match(expirationMatch)) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkCVV = (props) => {
  let valid = true;
  let matchIntegers = /([0-9])/gi;

  if (props.id.match(matchIntegers) && props.cvv.length === 3) {
  } else {
    valid = false;
  }
  return valid;
};

export const checkZipCode2 = (props) => {
  let valid = true;
  let matchIntegers = /([0-9])/gi;

  if (props.id.match(matchIntegers) && props.zipcode2.length === 5) {
  } else {
    valid = false;
  }
  return valid;
};

export const validate = (props, valid1, valid2, valid3, valid4, valid5) => {
  let valid = true;
  let argumentsArray = [valid1, valid2, valid3, valid4, valid5];

  for (let k = 0; k < argumentsArray.length; k++) {
    if (argumentsArray[4] === null) {
      argumentsArray.pop();
    }
    if (argumentsArray[k] === false) {
      valid = false;
      break;
    }
  }

  if (valid === true) {
    props.handleClick();
  } else {
    props.reset();
  }
}