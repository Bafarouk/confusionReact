import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import {Switch , Route , Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {

  constructor(props){
    super(props);
  }



  render(){

    const HomePage = () => {
      return(
        <Home dish={ this.props.dishes.filter((dish) => dish.featured )[0] }
          promotion={ this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader={ this.props.leaders.filter((leader) => leader.featured)[0] } />
      );

    }

    const dishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId ===  parseInt(match.params.dishId))}
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
          <Route path="/menu/:dishId" component={dishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
  
export default withRouter(connect(mapStateToProps)(Main));
