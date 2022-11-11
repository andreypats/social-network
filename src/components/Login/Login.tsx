import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: any) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} component={'input'} name={'Login'}/>
            </div>
            <div>
                <Field type="text" placeholder={'Password'} component={"input"} name={'Password'}/>
            </div>
            <div>
                <Field component={"input"} name={'RememberMe'} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login;