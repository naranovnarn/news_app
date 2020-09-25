import React from 'react';
import { connect } from 'react-redux';
import PopUp from '../PopUp/PopUp';
import { NavLink } from 'react-router-dom';
import { log_in_success, get_data_local } from '../../redux/actionCreator';
import './Navbar.css';

function authWithLocal(){
    let user = JSON.parse(localStorage.getItem('authUser'));
    return user;
}

function getDataFromLocal(){
    let newList = JSON.parse(localStorage.getItem('newsList')) || [];
    return newList;
}

class Navbar extends React.Component {


    componentDidMount() {

        this.props.log_in_success(authWithLocal());

        if (!this.props.newsList.length) {
            this.props.get_data_local(getDataFromLocal());
        }
    }

    render() {
        return(

            <header className="Navbar">
                <nav className="navbar navbar-expand navbar-dark">
                    <ul className="navbar-nav ">
                        <li className="navbar item">
                            <NavLink exact to="/" className="nav-link">Главная</NavLink>
                        </li>
                        <li className="navbar item">
                            <NavLink to="/news/" className="nav-link">Новости</NavLink>
                        </li>
                        <li className="navbar item">
                            <PopUp />
                        </li>
                    </ul>
                </nav>
            </header>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        newsList: state.newsList,
        filterNewsList: state.filterNewsList,
        term: state.term
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        log_in_success: (login) => {
            dispatch(log_in_success(login));
        },
        get_data_local: (data) => {
            dispatch(get_data_local(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

