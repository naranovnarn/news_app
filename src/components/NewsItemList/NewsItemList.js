import React from 'react';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import { deleteItem, approveItem } from '../../redux/actionCreator';
import './NewsItemList.css'

class NewsItemList extends React.Component {

    cls = ['list-group-item list-group-item-action '];

    deleteHandler = (id) => {
        this.props.deleteItem(id);
    }

    approveHandler = (id) => {
        this.props.approveItem(id);
    }

    render () {

        if (!this.props.isApproved && !this.cls.includes('draft')) {
            this.cls.push('draft');
        } 

        if (this.props.isApproved && this.cls.includes('draft')) {
            this.cls.pop();
        }

        return(
            <div className="NewsItemList">
                <div className={this.cls.join(' ')}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.name}</h5>
                        <small>{this.props.data}</small>
                    </div>
                    <p className="mb-1">{this.props.text}</p>
                    {   
                        this.props.user.role === 'admin' && !this.props.isApproved ?
                            ( <React.Fragment>
                                <Button 
                                    type="success"
                                    onClick={() => this.approveHandler(this.props.id)}
                                    >Подтвердить</Button>

                                <Button 
                                    type="error"
                                    onClick={() => this.deleteHandler(this.props.id)}
                                    >Удалить</Button>
                            </React.Fragment>) : null
                    }
                    {
                        this.props.isApproved? <small>Подтверждено</small> : <small>На модерации</small> 
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpenPopUp: state.isOpenPopUp,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        },
        approveItem: (id) => {
            dispatch(approveItem(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemList);