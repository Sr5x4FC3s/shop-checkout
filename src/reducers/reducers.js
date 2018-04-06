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
      return action.f2complete;
    default: 
      return state;
  }
};

export const F1data = (state = null, action) => {
  switch (action.type) {
    case `GOT_F1_DATA`:
      return action.f1data;
    default: 
      return state;
  }
}

export const F2data = (state = null, action) => {
  switch (action.type) {
    case `GOT_F2_DATA`:
      return action.f2data;
    default: 
      return state;
  }
}

export const F3data = (state = null, action) => {
  switch (action.type) {
    case `GOT_F3_DATA`:
      return action.f3data;
    default: 
      return state;
  }
}
