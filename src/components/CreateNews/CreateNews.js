import React from 'react';
import './CreateNews.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { create_news } from '../../redux/actionCreator';
import { connect } from 'react-redux';

class CreateNews extends React.Component {

    state = {
        name: '' ,
        text: '', 
        data: '',
        isApproved: false
    }
    
    onChangeNameHandler = (e) => {

        const data = new Date().toLocaleDateString();

        this.setState({
            name: e.target.value,
            data
        });
    }

    onChangeTextHandler = (e) => {

        this.setState({
            text: e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
    };

    createNewHandler = () => {
        
        const news = this.state;
        this.props.create_news(news);
        this.setState ({
            name: '',
            text: '', 
            data: '',
            id: '',
            isApproved: false
        });
    };

    render() {

        const { name, text } = this.state;
        
        return (
            <div className="CreateNews">
                <h3>Создать новость</h3>
                <form onSubmit={this.submitHandler}>
                    <Input 
                        label="Название" 
                        onChange={this.onChangeNameHandler}
                        value={name}
                    />
                    <Input 
                        label="Текст" 
                        onChange={this.onChangeTextHandler}
                        value={text}
                    />
                    <Button                     
                        type="primary"
                        onClick={this.createNewHandler}
                    >
                        Создать новость
                    </Button>
                </form>
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        create_news: (news) => {
            dispatch(create_news(news));
        }
    };
};

export default connect(null, mapDispatchToProps)(CreateNews);