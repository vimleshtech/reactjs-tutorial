import React,{Component} from 'react';

export default class Signon extends Component{


    constructor(props){
        super();
    }

    frm_login=()=>{

        var un=localStorage.getItem("uname");
        var pwd=localStorage.getItem("pwd");

        var u = this.refs.un.value;
        var p = this.refs.pwd.value;

        if(u===un && p===pwd){
            this.props.history.push('/Product/'+u);
        }
        else{
            alert("user id and password didn't match");
        }


    }
    render(){
        return(
            <div>
                <p><input type="text" placeholder="enter email id" ref="un" /> </p>
                <p><input type="password" placeholder="enter password" ref="pwd" /> </p>
                <p><input type="button" value="SiginOn" onClick={this.frm_login} /></p>
            
            </div>
            
        );
    }
}