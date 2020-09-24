import React from 'react';
import { connect } from 'react-redux';
import { SearchPanel } from '../../components/SearchPanel/SearchPanel';
import NewsItem from '../../components/NewsItem/NewsItem';
import CreateNews from '../../components/CreateNews/CreateNews';
import './News.css'

const News = (props) => {

    const { role } = props;

    return(
        <div className="News">
            <SearchPanel />
            <NewsItem />
            { role === 'user' ? <CreateNews /> : null }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        role: state.user.role
    };
};


export default connect(mapStateToProps)(News);


