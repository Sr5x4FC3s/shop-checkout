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
