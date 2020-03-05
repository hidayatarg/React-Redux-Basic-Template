import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {decreaseCounter} from '../redux/actions/counterActions'
import {connect} from "react-redux"

class DecreaseCounter extends Component {

    handleDecrease = (e) => {
        this.props.dispatch(decreaseCounter());
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handleDecrease}>
                    1 eksilt
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(decreaseCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(DecreaseCounter);