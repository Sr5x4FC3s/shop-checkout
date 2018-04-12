const axios = require('axios');
const React = require('react');
const bluebird = require('bluebird');

export const stateToArray = (state) => {
  let data = state;
  let listOfData = [];
  let listOfFields = {firstName:`First Name: `, lastName:`Last Name: `, id:`Id: `, address1:`Address-1: `, address2:`Address-2: `, city:`City: `, state:`State: `, zipcode:`ZipCode:`, credit:`Payment Info: `};

  for (let props in data) {
    if (props === 'homepage' || props === 'f1complete' || props === 'f2complete' || props === 'f3complete' || props === 'password' || props === 'expiration' || props === 'cvv' || props === 'zipcode2' || props === 'handleSubmit' || props === 'search' || props === 'response'|| props === 'gosearch' || props === 'dispatch' || props === 'toHomePage' || props === 'reset1' || props === 'reset2' || props === 'reset3') {
      continue;
    } else {
      listOfData.push(`${listOfFields[props]} ${data[props]}`);
    }
  }
  return listOfData;
}

export const APIpost = (props) => {
  let id = props.id;

  axios.post(`/account/id=${id}`, props)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const APIget = (props) => {
  let id = props.search;

  return axios.get(`/search/id=${id}`, props)
    .then((response) => {
      console.log(response.data);
      let data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const verifyValidID = (props) => {
  let id = props.id;

  return axios.get(`/verifyid/id=${id}`, props);
};

