

const initialValue={
    value: 10,
    loading:1
};
const reducer = (state=initialValue, action) => {

    const newState = {... state};

    switch (action.type) {
      case "UP":
      console.log('up ',action.value);
        newState.value +=action.value;
        newState.loading=false;
        break;
       case "DOWN":
       console.log('down ',action.value);
       newState.value -=action.value;
       break;      
       case "LOADING":
        newState.loading=true;
    }
    initialValue.value=newState.value;
    return newState;
  };
  export default reducer;