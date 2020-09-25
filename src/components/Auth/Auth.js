import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import { log_in_success, stop_log_in } from '../../redux/actionCreator';
import './Auth.css';



class Auth extends React.Component  {

    state = {
        tryLogIn: false,
        login: '',
        password: '',
    };

    loginHandler = () => {
        const users = {
            admin: { login: 'admin', password: 'admin', role: 'admin'},
            user: { login: 'user', password: 'user', role: 'user'}
        };
        const { login , password } = this.state;

        if (login === users.admin.login && password === users.admin.password) {
            this.props.log_in_success(users.admin);
        }

        if (login === users.user.login && password === users.user.password) {
            this.props.log_in_success(users.user);
        }
        this.setState({
            tryLogIn: true
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
    };

    onChangeHandler = (e, paramName) => {

        this.setState({
            [paramName]: e.target.value
        });

    };

    stopLogin = () => {
        this.props.stop_log_in();
    };



    render() {
        
        return (
            <div className="Auth">
                <h1>Авторизация</h1>
                <form onSubmit={this.submitHandler}>
                    <Input 
                        label="Login" 
                        onChange={ (e) => this.onChangeHandler(e, 'login') }
                        errorMessage={ this.state.tryLogIn ? 'Неверные данные': null}
                        isValid={ this.state.tryLogIn }
                    />
                    <Input 
                        label="Пароль" 
                        onChange={ (e) => this.onChangeHandler(e, 'password') }
                        errorMessage={ this.state.tryLogIn ? 'Неверные данные': null}
                        isValid={ this.state.tryLogIn }
                    />
                    <Button                     
                        type="primary"
                        onClick={this.loginHandler}
                    >
                        Войти
                    </Button>
                    <Button                     
                        type="primary"
                        onClick={this.stopLogin}
                    >
                        Отмена
                    </Button>
                </form>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        isOpenPopUp: state.isOpenPopUp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        log_in_success: (login) => {
        dispatch(log_in_success(login));
        },
        stop_log_in: () => {
        dispatch(stop_log_in());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
