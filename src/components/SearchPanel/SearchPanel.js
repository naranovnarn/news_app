import React from 'react';
import Button from '../../components/UI/Button/Button'
import './SearchPanel.css'

export const SearchPanel = (props) => {

    const submitHandler = (e) =>{
        e.preventDefault();
    };

    const searhHandler = () => {
        console.log('bbbbb')
    }

    return(
        <div className="SearchPanel">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline" onSubmit={submitHandler}>
                    <input className="form-control mr-sm-1" type="search" placeholder="Поиск по новостям" aria-label="Search" />
                    <Button                     
                        onClick={searhHandler}
                    >
                        Поиск
                    </Button>
                </form>
            </nav>
        </div>

    );
}