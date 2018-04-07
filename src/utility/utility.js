const axios = require('axios');

export const stateToArray = (state) => {
  let data = state;
  let listOfData = [];
  let listOfFields = {firstName:`First Name: `, lastName:`Last Name: `, id:`Id: `, address1:`Address-1: `, address2:`Address-2: `, city:`City: `, state:`State: `, zipcode:`ZipCode:`, credit:`Payment Info: `};

  for (let props in data) {
    if (props === 'homepage' || props === 'f1complete' || props === 'f2complete' || props === 'f3complete' || props === 'password' || props === 'expiration' || props === 'cvv' || props === 'zipcode2' || props === 'handleSubmit') {
      continue;
    } else {
      listOfData.push(`${listOfFields[props]}: ${data[props]}`);
    }
  }
  return listOfData;
}

export const APIpost = (props) => {
  let id = props.id;

  console.log('this function was invoked and this is props: ', props);
  console.log('this is the id of props: ', props.id);

  axios.post(`/account/id=${id}`, props)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
}