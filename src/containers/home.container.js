import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as homeActions from '../actions/home.action'
import Loading from '../components/loading/loading'


class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    
    componentWillMount() {
        this.props.homeActions.getCategory()

    }
    render() {

        const {category} = this.props
        if(category == null ) {

            return (
                <div>
                    <Home
                        category={this.props.category}

                    />
                </div>
            )
        }
            else {
                return (
                    <Loading/>
                )
            }
    
    }
}
const mapStateToProps = state => ({
    category: state.homeActions.category.data,
  });

  function mapStateToProps1(state) {
    return { category: state.data }
  }
  

const mapDispatchToProps = dispatch =>{
    return ({
        homeActions: bindActionCreators(homeActions, dispatch),
        })
}
export default connect(
    mapStateToProps1,
    mapDispatchToProps
)(HomeContainer)