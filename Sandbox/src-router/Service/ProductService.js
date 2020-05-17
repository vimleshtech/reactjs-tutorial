
export default class ProductService {

    async ProductModel(action){  //async 

    
    switch(action){

        case "ADD_PRODUCT":
                return " .... add from Service ....";
        case "GET_PRODUCT":

                return "get";
        case "DEL_PRODUCT":

            return "del";
        case "UP_PRODUCT":

            return "up";
        case "FETCH_API":
                    console.log('in fetch api');

                    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                    
                    //.then(response => response.json())
                    //.then(out=> { console.log( out)})                   

                    const data = await resp.json()
                    //const out = await data;
                    
                    // this code only runs when data is assigned.
                    return data;
                    
                    /*
                    fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => response.json())
                    .then((json) =>{
                        console.log("IN PROMISE:",json);
                        return json;
                        }                        
                    );
                    return "output TEST";
                    */


        default:
            return "test";

    }


    }
}