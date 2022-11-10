import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

const LoginForm = () => {
    return (
        <form action="">
            <div>
                <input type="text" placeholder={'Login'}/>
            </div>
            <div>
                <input type="text" placeholder={'Password'}/>
            </div>
            <div>
                <input type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default Login;