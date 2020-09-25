import React from 'react';
import { connect } from 'react-redux';
import NewsItemList from '../NewsItemList/NewsItemList';
import './NewsItem.css';

class NewsItem extends React.Component {

    render () {

        let visibleList = this.props.newsList || [];

        if (this.props.term.length > 0) {
            visibleList = this.props.filterNewsList;
        }

        console.log(this.props.user.login)

        return(
            <div className="NewsItem">
                <div className="list-group">
                    <ul>
                        {
                            this.props.user.login === 'guest' ? (visibleList.filter((item, index) => item.isApproved == true).map((item, index) => {
                                return(
                                    <li key={item.id}>
                                        <NewsItemList  key={item.id} name={item.name} text={item.text} data={item.data} isApproved={item.isApproved} id={item.id}/>
                                    </li>
                                )
                            })) :
                            
                            visibleList.map((item, index) => {
                                return(
                                    <li key={item.id}>
                                        <NewsItemList  key={item.id} name={item.name} text={item.text} data={item.data} isApproved={item.isApproved} id={item.id}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newsList: state.newsList,
        filterNewsList: state.filterNewsList,
        term: state.term,
        user: state.user
    };
};


export default connect(mapStateToProps)(NewsItem);