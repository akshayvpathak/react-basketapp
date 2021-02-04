import React, { Component } from 'react';
import Header from './HeaderComponent';
import GroceryList from './GroceryListComponent';
class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <GroceryList />
           </>
        );
    }
}

export default Main;
