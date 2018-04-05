const axios = require('axios');

export const handleCheckout = (bool) => {
  return {
    type: `CHECKOUT_CLICKED`,
    homepage: bool
  }
};

export const F1complete = (bool) => {
  return {
    type: `F1_COMPLETE`,
    f1complete: bool
  }
};

export const F2complete = (bool) => {
  return {
    type: `F2_COMPLETE`,
    f2complete: bool
  }
};

export const F3complete = (bool) => {
  return {
    type: `F3_COMPLETE`,
    f3complete: bool
  }
};

export const F1data = (data) => {
  return {
    type: `GOT_F1_DATA`,
    f1data: data
  }
};

export const F2data = (data) => {
  return {
    type: `GOT_F2_DATA`,
    f2data: data
  }
};

export const F3data = (data) => {
  return {
    type: `GOT_F3_DATA`,
    f3data: data
  }
};

export const sendData = (data) => {
  return ((dispatch) => {
    let id = data.id;

    axios.post(`/account/id=${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  })
};