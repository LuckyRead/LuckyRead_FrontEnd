// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import {Button} from 'reactstrap';
// import Reactions from './Reactions'
// import axios from 'axios'
// import {connect} from 'react-redux';
// import { deletePost } from '../../actions/fragmentActions'
// import '../../styles/fragmentcontainer.css';
//
// class Fragment extends Component {
//
//   handleClick = () => {
//     this.props.deletePost(this.props.post.id);
//     this.props.history.push('/');
//   }
//
//   render() {
//     const post = this.props.post ? (
//       <div className="container" id="container">
//       <br/>
//         <div className="row" id="container_fragment">
//           <div className="text-center" id="title_fragment">
//             <h2><strong>{this.props.post.title}</strong></h2>
//             <div className = "row justify-content-center" id="content">
//               <div className="col-4" id="image">
//                 <img src={this.props.post.source} alt="Imagen de referencia"/>
//               </div>
//               <div className="col-8" id="text">
//                 <h4><strong>Introducción</strong></h4>
//               <p className = "text-justify">{this.props.post.body}</p>
//                 <h4><strong>Contenido</strong></h4>
//                 <p className = "text-justify">{this.props.post.content}</p>
//               </div>
//               <div className="center">
//                 <button className="btn grey" onClick={this.handleClick}>
//                   Delete post
//                 </button>
//                 <p className = "text-justify">{this.props.post.content}</p>
//                 <br/>
//                 <h6><strong>Fuente</strong></h6><p>{this.props.post.source}</p>
//               </div>
//             </div>
//           </div>
//           <Reactions/>
//         </div>
//         <div className="row justify-content-center" id="button">
//           <Button color="primary" tag={Link} to="/FragmentsPage">Volver</Button>
//         </div>
//       </div>
//     ) : (
//       <div className="center">Cargando fragmento...</div>
//     );
//
//     return (
//       <div className="container">
//         {post}
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.fragment_id;
//   return {
//     post: state.posts.find(post => post.id === id)
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => dispatch(deletePost(id))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Fragment)
