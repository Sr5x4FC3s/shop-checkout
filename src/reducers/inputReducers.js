export const FNinput = (state = '', action) => {
  switch (action.type) {
    case `FN_INPUT`:
      return action.firstName;
    default: 
      return state;
  }
};

export const LNinput = (state = '', action) => {
  switch (action.type) {
    case `LN_INPUT`:
      return action.lastName;
    default: 
      return state;
  }
};

export const PWinput = (state = '', action) => {
  switch (action.type) {
    case `PW_INPUT`:
      return action.password;
    default:
      return state;
  }
};

export const IDinput = (state = '', action) => {
  switch (action.type) {
    case `ID_INPUT`:
      return action.id;
    default:
      return state;
  }
};

export const L1input = (state = '', action) => {
  switch (action.type) {
    case `LINE1_INPUT`:
      return action.line1;
    default:
      return state;
  }
};

export const L2input = (state = '', action) => {
  switch (action.type) {
    case `LINE2_INPUT`:
      return action.line2;
    default:
      return state;
  }
};

export const Cityinput = (state = '', action) => {
  switch (action.type) {
    case `CITY_INPUT`:
      return action.city;
    default:
      return state;
  }
};

export const Stateinput = (state = '', action) => {
  switch (action.type) {
    case `STATE_INPUT`:
      return action.state;
    default:
      return state;
  }
};

export const Zipinput = (state = '', action) => {
  switch (action.type) {
    case `ZIP_INPUT`:
      return action.zipcode;
    default:
      return state;
  }
};

export const CCinput = (state = '', action) => {
  switch (action.type) {
    case `CC_INPUT`:
      return action.credit;
    default:
      return state;
  }
};

export const EXPinput = (state = '', action) => {
  switch (action.type) {
    case `EXP_INPUT`:
      return action.expire;
    default:
      return state;
  }
};

export const CVVinput = (state = '', action) => {
  switch (action.type) {
    case `CVV_INPUT`:
      return action.cvv;
    default:
      return state;
  }
};

export const ZIP2input = (state = '', action) => {
  switch (action.type) {
    case `ZIP2_INPUT`:
      return action.zip;
    default:
      return state;
  }
};