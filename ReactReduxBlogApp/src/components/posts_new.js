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
                {field.meta.error}
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
                    label="Categories"
                    name="categories"
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

function validate(values){
    //console.log(values) --> { title : 'my post', categories : 'post', content:'nice post' }

    const errors = {};

    //Validate the inputs from 'values'
    if(!values.title){
        errors.title = "Enter a title";
    }

    if(!values.categories){
        errors.categories = "Enter some categories";
    }

    if(!values.content){
        errors.content = "Enter some content";
    }


    //If errors is empty, the form has no errors and can be submitted
    //If errors has any properties, redux form assumes the form is invalid and cannot be submitted
    return errors;
}

export default reduxForm({
    validate : validate,  
    form : 'PostsNewForm' //needs to be unique if we do not want this form to share its application state with any other forms
})(PostsNew);