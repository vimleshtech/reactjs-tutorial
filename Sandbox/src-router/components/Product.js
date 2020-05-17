import React,{Component} from 'react';
import ProductService from '../Service/ProductService';

export default class Product extends Component{
    
    constructor(props){
        super();
        console.log('in constructor -product');

        //create object of ProductService
        this.prod = new ProductService();

    }
    add_product=()=>{
        console.log('in add product ....will hit service method ..')
        var out = this.prod.ProductModel('ADD_PRODUCT');
        console.log('Response from services : ',out);


    }
    fetch_api=()=>{
     
    console.log('in fetch api method ..')   
     var out = this.prod.ProductModel('FETCH_API');
     console.log('response from service call ..',out);


    }
    render(){

        return(

                <div className="dv">
                        <h1>  Product !!!! Component {this.props.match.params.p1} </h1>
                        <p>
                            Product id : <input className="form-control" type="text" ref="pid" />
                        </p>

                        <p>
                            Product Name : <input className="form-control" type="text" ref="pname" />
                        </p>
                        <p>
                            Price : <input className="form-control" type="text" ref="price" />
                        </p>
                        
                        <p>
                           <input type="button" className="btn btn-primary" 
                           value="Add Product" onClick={this.add_product} />
                           
                           <input type="button" className="btn btn-success" 
                           value="Call API" onClick={this.fetch_api} />

                        </p>
                        
                </div>


        );

    }



}

