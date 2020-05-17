import React,{Component} from 'react';

import './customer.css';

export default class Customer extends Component{


    constructor(props){
        super();


    }

    add_customer=()=>{

        var name,ph;
        name = this.refs.cname.value;
        ph = this.refs.cname.value;

        var cust = {name:name,ph:ph};
        localStorage.setItem("customers", cust);


    }
    render(){

        return(

                <div className="dv">
                        <h1>  Customer !!!! Component </h1>
                        <p>
                            Customer Name : <input className="form-control" type="text" ref="cname" />
                        </p>
                        <p>
                            Customer Phone no : <input className="form-control" type="text" ref="pno" />
                        </p>
                        
                        <p>
                           <input type="button" className="btn btn-primary" value="Add Cusotmer" onClick={this.add_customer} />
                        </p>
                        
                </div>


        );

    }



}

