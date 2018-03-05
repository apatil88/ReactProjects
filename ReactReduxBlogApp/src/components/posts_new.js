import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    renderTitleField(field){  //field contains event handlers that we need to wire up JSX that we return
        return (
            <div>
                <input 
                    type="text"
                    { ...field.input } //communicate built in event handlers as props to Field component
                />
            </div>
        );
    }

    render(){
        return (
            <form>
                <Field 
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form : 'PostsNewForm' //needs to be unique if we do not want this form to share its application state with any other forms
})(PostsNew);