import React, { Component } from 'react'

import { connect } from 'react-redux'

class BookDetail extends Component{ 

    render(){
        //When the app first boots up, activeBook is null since application state for activeBook as not been created. 
        //activeBook state will be created only when user selects a book. Hence, we need to check if this.props.book exists.
        if(!this.props.book){
            return <div>Select a book to get started:</div>
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>{ this.props.book.title } : {this.props.book.pages } </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){ //state here is the application state
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);