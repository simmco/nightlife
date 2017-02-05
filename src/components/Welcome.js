import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Search from './home/Search'
import BarList from './home/BarList';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.searchBar = this.searchBar.bind(this);
  }
  searchBar(e) {
    this.props.fetchBar(e);
  }
  render() {
    return(
      <div>
        <Search searchBar={this.searchBar}/>
        <BarList getBar={this.props.bar} addUser={this.props.addUser}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { bar: state.bar };
}

export default connect (mapStateToProps, actions)(Welcome);
