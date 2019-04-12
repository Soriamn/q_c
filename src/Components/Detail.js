import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../data/Detail/service'

class Detail extends Component {

    componentDidMount(){
        this.props.getImage();
    }

    render(){
        return(
         <div>
             <img src={this.props.detail.image} alt="" />
         </div>   
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        detail: state.detail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getImage: () => {
            getDetail( dispatch, ownProps );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Detail );