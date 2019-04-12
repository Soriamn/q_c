import React from 'react';
import createList from '../data/Breeds/action';
import { connect } from 'react-redux';
import axios from 'axios';

const List = (props) => {
  const breeds = props.allBreeds.map( breed,index => {
    return (
      <li key={ index }> { breed } </li>
    )
  })

  return (
    <ul>
      { breeds }
    </ul>
  )    
}

const mapStateToProps = (state) => {
  return {
    allBreeds: state.allBreeds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBreeds: () => {
    axios.get('https://dog.ceo/api/breeds/list')
      .then(response => {
          console.log(response);
          dispatch({
            type: 'LIST',
            data: response.data.message
        })
      })
      .catch(error => {
          console.log(error);
      })        
    } 
  }
}; 
export default connect( mapStateToProps, mapDispatchToProps)(List);
  