import React, { Component } from 'react'
import { connect } from 'react-redux'
import Jokes from './Jokes'
import {loadJokes} from '../actions/joke'

class JokesContainer extends Component {

    componentDidMount(){
        this.props.loadJokes()
    }

    render() {
        return (
            <div>
                <Jokes joke={this.props.joke}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke
    }
}

export default connect(mapStateToProps, {loadJokes})(JokesContainer)
