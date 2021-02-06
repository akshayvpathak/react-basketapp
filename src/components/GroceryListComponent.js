import React ,{Component} from 'react';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { red } from '@material-ui/core/colors';
import { fetchGrocery,addbasketitem } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import  Loading from './LoadingComponent';


const styles = (theme) => ({
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

function RenderGroceryList({grocery,onPress}){
    return (grocery.grocery.map(groceryitem =>{
      return(
        <ListItem key={groceryitem.id} button>
        <ListItemAvatar>
          <Avatar>
            <ShoppingCartOutlinedIcon style={{ color: red[600] }}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={groceryitem.name}
        />
        <ListItemSecondaryAction aria-label="delete">
        <IconButton data-id={groceryitem.id} data-value={groceryitem.name} onClick={onPress}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
   )
    }))
}
const mapStateToProps = state => {
  return {
      grocery: state.grocery
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGrocery: () => { dispatch(fetchGrocery()) },
  addBasketItem: (item) => { dispatch(addbasketitem(item)) },

});
class GroceryList extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    componentDidMount() {
      this.props.fetchGrocery();
    }
    handleSubmit(event) {
    const id = event.currentTarget.getAttribute("data-id");
    const name = event.currentTarget.getAttribute("data-value");
    const bucketitem = {
      id: id,
      name: name,
      count: 1
    };
    this.props.addBasketItem(bucketitem);
  }
  render(){
    const { classes } = this.props;
    if(this.props.grocery.isLoading){
      return (
        <Loading />
      );
    }
    else if(this.props.grocery.errMess){
      return (
        <div>
          <h1>Error</h1>
        </div>
      );
    }
    else if(this.props.grocery.grocery){
      return (
        <div className={classes.demo}>
            <List dense>
              <RenderGroceryList grocery= {this.props.grocery} onPress={this.handleSubmit} />
            </List>
      </div>
      );
    }
    
  }

}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GroceryList));