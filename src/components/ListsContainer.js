import React, { Component } from 'react';
import List from './List';
import axios from 'axios';
class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get('users.json')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
            return (
                <div className="lists-container">
                    {this.state.lists.map( list => {
                        return (<List list={list} key={list.id} />)
                    })}
                </div>
            )
        }
}
export default ListsContainer;
