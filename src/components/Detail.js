import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../data/Detail/service';
import { delImage } from '../data/Detail/action';

class Detail extends Component {

    componentDidMount(){
        this.props.getImage();
    }

    componentWillUnmount() {
        this.props.unmImage();
    }

    render(){
        return(
         <div>
             <img src={this.props.detail.image} alt="" />
         </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return{
        detail: state.detail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        getImage: () => {
            getDetail( dispatch, ownProps );
        },

        unmImage: () => {
            dispatch( delImage() );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Detail );