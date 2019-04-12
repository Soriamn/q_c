import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreeds } from '../data/Breeds/service';
import { Item } from './Item';

class List extends Component {
  componentDidMount(){
    this.props.getAllBreeds();
  }

  items = () => {
    const breeds = this.props.allBreeds.map((breed, index) => {
      return (
        <Item breed={`${breed}`} key={`${index}`}/>
      )
    })  
    return breeds;
  }

  render(){
    return (
      <ul>
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
    } 
  }
}; 
export default connect( mapStateToProps, mapDispatchToProps)(List);
  