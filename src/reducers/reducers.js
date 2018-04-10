export const handleCheckout = (state = false, action) => {
  switch (action.type) {
    case `CHECKOUT_CLICKED`:
      return action.homepage;
    default: 
      return state;
  }
};

export const F1Complete = (state = false, action) => {
  switch (action.type) {
    case `F1_COMPLETE`:
      return action.f1complete;
    default: 
      return state;
  }
};

export const F2Complete = (state = false, action) => {
  switch (action.type) {
    case `F2_COMPLETE`:
      return action.f2complete;
    default: 
      return state;
  }
};

export const F3Complete = (state = false, action) => {
  switch (action.type) {
    case `F3_COMPLETE`:
      return action.f3complete;
    default: 
      return state;
  }
};

export const Response = (state = {}, action) => {
  switch (action.type) {
    case `DATA_SEARCH_SUCCESSFUL`:
      return action.payload;
    default:
      return state;
  }
};

export const GoSearch = (state = false, action) => {
  switch (action.type) {
    case `LETS_SEARCH`:
      return action.gosearch;
    default:
      return state;
  }
};