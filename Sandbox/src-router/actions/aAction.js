export const aActionAsnc =(val)=> {
    return {type: "UP",    value: val}
  };

  
  export const loading =() =>{
    
        return { 
            type:"LOADING"
        }
      }
  export const aAction= val=>{
      return dispatch =>{
          dispatch(loading());
          setTimeout(()=>{
              val++;
                    dispatch(aActionAsnc(val))
          },5000)
      }
  }
