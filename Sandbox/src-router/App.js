
import React from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';

import Service from  './components/Service';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Signon from './components/Signon';
import Product from './components/Product';
import Customer from './components/Customer';
import Dashboard from './components/dashboard';


import { connect } from "react-redux";
import { aAction } from "./actions/aAction";
import { bAction } from "./actions/bAction";

//can be multiple export
//import * as Creater from "./actions/bAction";
//npm install --save redux-thunk
class App extends React.Component{


  constructor(props){

    super();
    this.state ={
      data:'abcd',
      users:[]
    }
  }

  frm_click=()=>{

        this.setState({data:'new data ..is changed'});

        var name,email,pwd;
        name = this.refs.name.value;
        email = this.refs.email.value;
        pwd = this.refs.pwd.value;

        var users = this.state.users;
        users.push({uname:name,uemail:email,uwd:pwd});

        this.setState({users:users});
        console.log(this.state.users);

        this.frm_clear();

        //
        var html  ="<input type='button' value='dynamic html' />"
        this.refs.out.innerHTML=" <input ty <input type='text' />";
        
  }

  componentDidMount(){

    console.log('hi.');

  }
  componentDidUpdate(){

    console.log('update');
    
  }
  frm_clear(){

    this.refs.name.value ="";
    this.refs.email.value="";
    this.refs.pwd.value="";

  }
  frm_remove=(email)=>{

      console.log('del .. ',email);

      var users = this.state.users;
      var usr = users.filter(x=>  x.uemail != email);

      this.setState({users:usr});



  }

  frm_update = ()=>{


    var users = this.state.users;    
    for(let i=0; i<users.length;i++){

      if(users[i].uemail === this.refs.email.value){
        users[i].uname = this.refs.name.value;          
        users[i].upwd = this.refs.pwd.value;
      }
    }

    this.setState({users:users});
    this.frm_clear();

  }
  frm_edit = (email)=>{

    var users = this.state.users;
    
    for(let i=0; i<users.length;i++){

      if(users[i].uemail === email){


          this.refs.name.value =users[i].uname;
          this.refs.email.value=users[i].uemail;
          this.refs.pwd.value=users[i].upwd;
      }
    }

  }

  frm_service=()=>{

    var obj = new Service();
    var res = obj.getData();
    console.log(res);
    console.log(typeof( res));
    //console.log(res.length);

  }
  render(){

    var a =11;
    var b =44;
    var c  = a+b;

    return(
      <div className="page">

    <Header/>
    

    <hr/>
    
        <Router>
          
        <div className="nav">
            <Link to="/" > New User </Link>
            <Link to="/product" > Product </Link>
            <Link to="/customer" > Order </Link>

          </div>

        <div>
            <Route  exact path="/" component={Home} />
            <Route  path="/product/:p1?/:p2?" component={Product} />
            <Route  path="/customer" component={Customer} />
            <Route  path="/Signon" component={Signon} />
            
          </div>


        </Router>

      <hr/>
      <h2> Dashboard </h2>
      <Dashboard/>
      <hr/>
{/* 
        <p>
          Name : <input type="text" ref="name" />

        </p>
        <p>
          Email : <input type="email"  ref="email"/>
          </p>
          <p>
            Password : <input type="password"  ref="pwd"/>
          </p>
          
      <p>

        <input type="button" onClick={this.frm_click} value="Click Me" />
        <input type="button" onClick={this.frm_update} value="Update" />
        <input type="button" onClick={this.frm_service} value="Call Service" />


      </p>
      
      <p ref="out"> </p>


      <div>
        <h1> User List </h1>

        {this.state.users.map((item,i)=> 
        <Users frm_edit={this.frm_edit} frm_remove={this.frm_remove} item={item} key={i} /> )}
      </div>


      <p>
          Expression (Interpolation) { 2+ 2}
        </p>

      <p>
            {c }
        </p>

        <p>
          {this.state.data}
          </p>
 */}

 <h2> Redux Example </h2>
 <p>
   </p>
    Out is : {this.props.data}
   <p>
      <button onClick={this.props.up} > Up </button>
      <button onClick={this.props.down} > Down </button>
      {this.props.loading && <img src={logo} className="App-logo"/>}
   </p>
   
      <Footer/> 
      
      </div>


    );
  }

}

const mapStateToProps = state => {
  return{
    data: state.value,
    loading: state.loading

  };
};
const mapDispatchToProps = dispatch => {
  return{
  up: () => dispatch({type:"UP",value:3}),
  down: () => dispatch({type:"DOWN",value:3})
  //up: () => dispatch(aAction(3)),
  //down: () => dispatch(bAction(3))
  };
};

//export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
