import React, { Component } from 'react';
import SearchPage from './pages/SearchPage';
import LoadingScreen from './LoadingScreen';

export class EntryPoint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoading:true,
        }
    }

    componentDidMount()
    {
        setTimeout(()=>this.setState({
            isLoading:false
        }),20);
    }
    

    render() {
        return (
            this.state.isLoading? <LoadingScreen></LoadingScreen>:<SearchPage></SearchPage>
        )
    }
}

export default EntryPoint
