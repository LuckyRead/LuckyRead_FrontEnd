//Dependencies
import React from 'react';

//Components
//styles
import '../../styles/homepage.css';

//Data

const HomePage_Categorie =({topics, deleteTopic}) => {
    // const topicList = topics.map (topic => {
    //   if(topic.id==1){
    //   return(
    //     <div className="topic" key={topic.id}>
    //     <div className="row">
    //       <div className="col-sm-12" >
    //       <button onClick={this.handleClick} id="CategoryButton"
    //         onMouseOver={this.handleMouseOver}>{topic.name}</button>
    //       </div>
    //       </div>
    //       </div>
    //   )
    // } else{
    //   return null
    // }
    // })


    const topicList = topics.map(topic =>{
      return topic.id>=0 ? (
            <div className="topic" key={topic.id}>
            <div className="row">
              <div className="col-sm-12" >
              <button id="CategoryButton">{topic.name}</button>
            <button onClick={() => deleteTopic(topic.id)}>Eliminar categoria</button>
              </div>
              </div>
              </div>
      ) : null
    })


    return(
      <div className="topic-list">
        {topicList}
      </div>
    )
}

export default HomePage_Categorie
