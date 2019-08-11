import React, {Component} from 'react'
import {connect} from "react-redux"
import * as actions from "../../actions/PostAction"
import Post from "../Post/Post"
import close from "../../img/close.svg"
import {Button, Modal, ModalBody, ModalHeader, Spinner, Table} from 'reactstrap';
import './Posts.scss'

const url = 'https://test.megapolis-it.ru/api/list';
const id2 = 769;

class Posts extends Component {

   state = {
      modal: false,
      title: ''
   };

   componentDidMount() {
      this.props.getData()
   }

   toggle = () => {
      this.setState(prevState => ({
         modal: !prevState.modal
      }));
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name] : e.target.value
      })
   }

   /*sendPost = (e) => {
      e.preventDefault()
     /!* this.props.getData()*!/
      axios.post(url, this.state.title).
      then (
          this.props.getData()
      )
          .catch((error) => {
             console.log(error)
          });
   }*/


      sendPost = async (e) => {
         e.preventDefault()
         this.props.addPost(this.state.title)
         await this.props.getData()
      }


   // removePost = (id) => {
   //
   //      axios.delete(`url/${id}`).
   //          then (
   //              this.props.getData()
   //          )
   //          .catch((error) => {
   //             console.log(error)
   //          });
   //   }

   render() {

      const {data, isFetching} = this.props

      const {title} = this.state

      const closeBtn = <button className="close" onClick={this.toggle}>
         <img src={close} alt="close" />
      </button>;

      return (
          <div className="container">
             <h1>Список задач</h1>

             <div className="action-bar d-flex justify-content-end mb-4">
                <Button onClick={this.toggle} outline color="success">Добавить</Button>

                <Button outline color="success">Удалить</Button>

                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                   <ModalHeader  close={closeBtn}>
                      Modal title
                   </ModalHeader>
                   <ModalBody>
                      <form onSubmit={this.sendPost}>
                         <input
                             type="text"
                             name="title"
                             onChange={this.handleChange}
                             value={title}
                         />

                         <Button type="submit"
                                 color="primary"
                                 onClick={this.toggle}
                         >Отправить</Button>
                      </form>
                   </ModalBody>
                </Modal>

             </div>

             {(isFetching) ?
                 <Spinner className="spinner-border_modify" /> :

                 data !== undefined && data.length ?
                     <Table bordered>
                        <tbody>
                        {
                           data.map((item, i) =>
                               <Post {...item}
                                     removePost={this.removePost}
                                     key={item.id}
                                     num={i} />
                           )}
                        </tbody>
                     </Table>
                     : <div className="message">Список задач пуст</div>
             }
          </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      data: state.post.data.data,
      isFetching: state.post.isFetching
   }
}

const mapDispatchToProps = dispatch => {
   return {
      getData: () => dispatch(actions.getData()),
      addPost: (title) => dispatch(actions.addPost(title))
   }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
