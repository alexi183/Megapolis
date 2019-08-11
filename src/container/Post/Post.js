import React, { Component } from 'react'
import './Post.scss'
import edit from "../../img/edit.svg"
import remove from "../../img/delete.svg"
import * as actions from "../../actions/PostAction"
import {connect} from "react-redux";

const id = 760;

class Post extends Component {

   /* state = {
       productsItemShow: false
    }

    openBlock = () => {
       this.setState({
          productsItemShow: true
       })
    }

    closeBlock = () => {
       this.setState({
          productsItemShow: false
       })
    }

    handleClick = (id) => {

       this.openBlock()
    }*/

   render() {

      const {id, title, num, removePost} = this.props

     /* console.log(id);*/



      return (
          <tr className="table-row">
             <td className="table-cell">Задача № {num+1}</td>
             <td className="table-cell">{title}</td>
             <td className="table-cell user-bar">
                <img className="edit"
                    src={edit} alt='Редактировать'/>
                <img
                    className="remove"
                    onClick={() => removePost(id)}
                    src={remove}
                    alt='Удалить' />
             </td>
          </tr>
      )
   }
}


/*
const mapStateToProps = state => {
   return {
      productTypes: state.post.productTypes
   };
};
*/


/*const mapDispatchToProps = dispatch => {
   return {
    /!*  removeProducts : () => dispatch(actions.removeProducts())*!/
   }
};*/


export default connect(
   /* mapStateToProps,*/
    /* mapDispatchToProps*/
)(Post);




