import React from 'react';
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';
import { log_in, stop_log_in, log_out } from '../../redux/actionCreator'
import './PopUp.css';
import Button from '../UI/Button/Button'

class PopUp extends React.Component {

    openModal = () => {
        if (this.props.authorized) {
            this.props.log_out();
        } else {
            this.props.log_in();
        }
    }

    closeModal = (e) => {
        if (e.target === e.currentTarget) {
            this.props.stop_log_in();
        }
    }

    render () {
        
        const { isOpenPopUp, authorized} = this.props;

        return (
            <div className='PopUpAuth' >
                <Button type="primary" onClick={this.openModal} > { authorized ?  'Выйти' : 'Вход' }  </Button>
                { 
                    isOpenPopUp && 
                    (<section className="back-panel" onClick={this.closeModal}>
                        <div className="dialog-container">
                            <Auth />
                        </div>
                    </section>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpenPopUp: state.isOpenPopUp,
        authorized: state.authorized
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        log_in: () => {
            dispatch(log_in());
        },
        stop_log_in: () => {
            dispatch(stop_log_in());
        },
        log_out: () => {
            dispatch(log_out());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);