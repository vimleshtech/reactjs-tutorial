import React,{Component} from 'react';

export default class Home extends Component{


    constructor(props){
        super();


    }

    add_customer=()=>
    {
        var name = this.refs.uname.value;
        var pwd = this.refs.pwd.value;
        if(name === "" || pwd ===""){
            alert('email or password canot be blank!!!');
        }
        else{

                localStorage.setItem("uname",name);
                localStorage.setItem("pwd",pwd);
                console.log(localStorage.getItem('uname'));

                this.props.history.push('/Signon');

        }
    }
    render(){

        return(

                <div className="dv">
                        <h1>  Registration !!!! Form </h1>
                        <p>
                             <input placeholder="Email id" className="form-control" type="text" ref="uname" />
                        </p>
                        <p>
                             <input placeholder="Password" className="form-control" type="password" ref="pwd" />
                        </p>
                        <p>
                           <input type="button" className="btn btn-primary" value="Register" onClick={this.add_customer} />
                           <a href="http://localhost:3002/product">Alreay User?</a>
                        </p>
                        

                </div>


        );

    }



}

