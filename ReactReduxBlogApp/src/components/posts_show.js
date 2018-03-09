import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;  //All possible wildcards (:id) provided by react router as props 
        this.props.fetchPost(id);
    }

    render(){
        return (
            <div>
                Posts Show
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post : posts[ownProps.match.params.id] };  //Only pass specific post to the PostsShow component instead of passing the list of posts
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);