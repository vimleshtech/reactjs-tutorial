
import React,{Component} from 'react';



class Dasboard extends Component{


    constructor()
    {
        super();
    }
    render(){

        var c = localStorage.length;
        if(c>0){
            var name = localStorage.getItem("uname");
            var cust = localStorage.getItem("customers");

            return(<div> 
                
                <h1> Count is {c} </h1>
                <h1>Users  Name is {name} </h1>
                <h1>Customers details is {cust} </h1>

            
            </div>);   
        }
        else{

                return(<div> There is no data </div>);
        }
        
    }
}
export default Dasboard;