import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreeds } from '../data/Breeds/service';
import { Item } from './Item';
import { removeList } from '../data/Breeds/action';

class List extends Component {
  componentDidMount(){
    this.props.getAllBreeds();
  }

  componentWillUnmount(){
    this.props.removeList();
  }

  items = () => {
    const breeds = this.props.allBreeds.map((breed, index) => {
      return (
        <Item breed={`${breed}`} key={`${index}`} />
      )
    })  
    return breeds;
  }

  render(){
    return (
      <ul className="list-group">
        { this.items() }
      </ul>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    allBreeds: state.allBreeds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBreeds: () => {
      getBreeds(dispatch);      
    },
    removeList: () => {
      dispatch(removeList())
    }
  }
}; 
export default connect( mapStateToProps, mapDispatchToProps )( List );
  