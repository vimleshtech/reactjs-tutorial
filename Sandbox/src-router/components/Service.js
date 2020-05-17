

//fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(out => console.log(out))


export default class  Service{


     response;

    getData(){

        

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())        
        .then(out =>           
           this.response=out //.push(out)   
        )
        
        //console.log('in service ',response);
        return this.response;


    }

}


