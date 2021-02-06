import React ,{Component} from 'react';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removebasketitem,decrementbasketitem } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
      basket: state.basket
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeBasketItem: (item) => { dispatch(removebasketitem(item)) },
  decrementBasketItem: (item) => { dispatch(decrementbasketitem(item)) },
});

const style = theme => ({
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
});

function RenderBasketList({basket,onPress}){
  return (basket.list.map(basketitem =>{
    return(
            <ListItem key={basketitem.id}>
              <ListItemAvatar>
              <IconButton edge="end" aria-label="delete" data-type="decrement" data-id={basketitem.id} data-value={basketitem.name}  onClick={onPress}>
                  <RemoveCircleIcon color="primary" />
                </IconButton>
              </ListItemAvatar>
              <ListItemText
                primary={' ('+basketitem.count + ') ' +basketitem.name}
              />
              <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" data-type="remove" data-id={basketitem.id} data-value={basketitem.name}  onClick={onPress}>
                  <DeleteIcon color="primary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
 )
  }))
}
class BasketList extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(event) {
  const id = event.currentTarget.getAttribute("data-id");
  const name = event.currentTarget.getAttribute("data-value");
  const type = event.currentTarget.getAttribute("data-type");
  const bucketitem = {
    id: id,
    name: name
  };
  if(type === 'remove')
  this.props.removeBasketItem(bucketitem);
  else if(type === 'decrement')
  this.props.decrementBasketItem(bucketitem);

}
  render(){
    
    const { classes } = this.props;
    if(this.props.basket.isEmpty){
      return (
       <div>
         <h1>Your Basket Is Empty</h1>
       </div>
      );
    }
    else if(this.props.basket.list){
      return (
        <div className={classes.demo}>
        <List dense>
            <RenderBasketList basket={this.props.basket} onPress={this.handleSubmit}/>
        </List>
      </div>
      );
    } 
  }
}

export default withStyles(style)(connect(mapStateToProps,mapDispatchToProps)(BasketList));
