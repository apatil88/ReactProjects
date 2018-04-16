import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

    class Authentication extends Component{
        //class-level property
        static contextTypes = {
            router : React.PropTypes.object  //define class level property on contextType to get access to router
        }

        componentWillMount(){
            if(!this.props.authenticated){
                this.context.router.push('/');  //if user is not authenticated, navigate the user to root route
            }
        }

        componentWillUpdate(nextProps){  //called when component gets re-rendered with next set of props
            if(!nextProps.authenticated){
                this.context.router.push('/');  //remove resource list when the user clicks sign out
            }
        }

        render(){
            //console.log(this.props.resources);  //resourceList
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            authenticated: state.authenticated
        }
    }
    return connect(mapStateToProps)(Authentication);
}

/*
//In some other location...not in this file
//We want to use this HOC

import Authentication  //This is my HOC
import Resources       //This is the component I want to wrap

const ComposedComponent = Authentication(Resources);

//In some render method
<ComposedComponent resources = { resourceList }/>
*/