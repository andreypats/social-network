import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login'} component={'input'} name={'Login'}/>
            </div>
            <div>
                <Field type="text" placeholder={'password'} component={"input"} name={'Password'}/>
            </div>
            <div>
                <Field component={"input"} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login;