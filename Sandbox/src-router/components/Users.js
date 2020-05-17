import React,{Component} from 'react';


class Users extends Component{

    constructor(){

        super();
    }

    render(){


        return(

            <div>
                <p>
                {this.props.item.uname} | {this.props.item.uemail}  
                <input type="button" onClick={()=>this.props.frm_remove(this.props.item.uemail)} value="Delete" />
                <input type="button" onClick={()=>this.props.frm_edit(this.props.item.uemail)} value="Edit" />

                </p>

            </div>
        );
    }
}

export default Users;
