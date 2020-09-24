import userEvent from '@testing-library/user-event';
import React from 'react';
import { connect } from 'react-redux';
import './Main.css';

const Main = (props) => {
    return(
        <div className="Main">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Привет, { props.user.login } </h1>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authorized: state.authorized,
        user: state.user
    };
};


export default connect(mapStateToProps)(Main);