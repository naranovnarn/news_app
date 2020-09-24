import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NewsItemList } from '../NewsItemList/NewsItemList';
import './NewsItem.css'

class NewsItem extends React.Component {

    render () {
        return(
            <div className="NewsItem">
                <div className="list-group">
                    <ul>
                        {
                            this.props.newsList.map((item, index) => {
                                return(
                                    <li key={item.name}>
                                        <NewsItemList name={item.name} text={item.text} data={item.data}/>
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
    };
};


export default connect(mapStateToProps)(NewsItem);