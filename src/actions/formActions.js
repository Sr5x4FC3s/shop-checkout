//accounting component input actions
export const FNinput = (string) => {
  return {
    type: `FN_INPUT`,
    firstName: string
  }
};

export const LNinput = (string) => {
  return {
    type: `LN_INPUT`,
    lastName: string
  }
};

export const PWinput = (string) => {
  return {
    type: `PW_INPUT`,
    password: string
  }
};

export const IDinput = (string) => {
  return {
    type: `ID_INPUT`,
    id: string
  }
};

//billing component input actions
export const L1input = (string) => {
  return {
    type: `LINE1_INPUT`,
    line1: string
  }
};

export const L2input = (string) => {
  return {
    type: `LINE2_INPUT`,
    line2: string
  }
};

export const Cityinput = (string) => {
  return {
    type: `CITY_INPUT`,
    city: string
  }
};

export const Stateinput = (string) => {
  return {
    type: `STATE_INPUT`,
    state: string
  }
};

export const Zipinput = (string) => {
  return {
    type: `ZIP_INPUT`,
    zipcode: string
  }
};

//credit component input action
export const CCinput = (string) => {
  return {
    type: `CC_INPUT`,
    credit: string
  }
};

export const EXPinput = (string) => {
  return {
    type: `EXP_INPUT`,
    expire: string
  }
};

export const CVVinput = (string) => {
  return {
    type: `CVV_INPUT`,
    cvv: string
  }
};

export const Zip2input = (string) => {
  return {
    type: `ZIP2_INPUT`,
    zip: string
  }
};