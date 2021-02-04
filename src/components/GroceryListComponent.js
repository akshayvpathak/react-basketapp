import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';import AddCircleIcon from '@material-ui/icons/AddCircle';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function GroceryList() {
  const classes = useStyles();
  const [dense] = React.useState(false);
  return (
    <div className={classes.demo}>
    <List dense={dense}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ShoppingCartOutlinedIcon style={{ color: red[600] }}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Strawberry"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <AddCircleIcon color="primary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>,
    </List>
  </div>
  );
}
