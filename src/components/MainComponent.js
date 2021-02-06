import React, { Component } from 'react';
import Header from './HeaderComponent';
import GroceryList from './GroceryListComponent';
import BasketList from './BasketListComponent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Grocery
                        </Typography>
                        <GroceryList />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                                Basket
                        </Typography>
                        <BasketList />
                    </Grid>
                </Grid>
                </Container>
           </>
        );
    }
}

export default Main;
