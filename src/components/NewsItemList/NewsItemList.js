import React from 'react';
import './NewsItemList.css'

export const NewsItemList = (props) => {
    const { name, text, data } = props;
    return(
        <div className="NewsItemList">
            <div className="list-group-item list-group-item-action ">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{name}</h5>
                    <small>{data}</small>
                </div>
                <p className="mb-1">{text}</p>
            </div>
        </div>
    );
}