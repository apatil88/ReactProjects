import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    renderField(field){  //field contains event handlers that we need to wire up JSX that we return
        return (
            <div className="form-group">
                <label>{ field.label }</label>
                <input className="form-control"
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
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form : 'PostsNewForm' //needs to be unique if we do not want this form to share its application state with any other forms
})(PostsNew);