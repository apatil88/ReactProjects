import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentDidMount(){  //React Lifecycle method called automatically by React after the component has showed up inside the DOM.
        this.props.fetchPosts();   //start the data loading process
    }

    renderPosts(){
        //Note: this.props.posts is an object containing all posts
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    { post.title }
                </li>
            )
        });
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new" >
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts : fetchPosts })(PostsIndex);  //another way of binding action creators to components