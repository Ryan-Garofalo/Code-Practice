import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SignIn extends Component {
    onSubmit({ email, password }) {
        console.log(email);
        console.log(password);
        this.props.signinUser({email,password})
    }

    renderField(field) {
        return (
            <fieldset className="form-group">
                <label>{field.label}:</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
            </fieldset>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="email"
                    label="Email"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

const reduxFormSignin = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignIn);

// Export wrapped Signin container with connect helper
export default connect(null, actions)(reduxFormSignin);
