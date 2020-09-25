import React from 'react';
import { connect } from 'react-redux';
import { filter_news } from '../../redux/actionCreator';
import './SearchPanel.css';

const SearchPanel = (props) => {

    const submitHandler = (e) =>{
        e.preventDefault();
    };

    function search(items, text) {

        if(text.length == 0) {
            return items;
        }

        return items.filter((item) => {
            return item.text.indexOf(text) > -1;
        });
    }

    const searhHandler = (e) => {

        props.filter_news(search(props.newsList, e.target.value), e.target.value);

    };

    return(
        <div className="SearchPanel">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline" onSubmit={submitHandler}>
                    <input className="form-control mr-sm-1" type="search" placeholder="Поиск по новостям" aria-label="Search" onChange={searhHandler}/>
                </form>
            </nav>
        </div>

    );
}


const mapStateToProps = (state) => {
    return {
        newsList: state.newsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter_news: (filterNews, text) => {
            dispatch(filter_news(filterNews, text));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);