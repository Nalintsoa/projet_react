import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date : new Date() }
    }

    componentDidMount(){
        this.timer = setInterval( ()=>this.changer() , 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    changer(){
        this.setState( {date : new Date()} );
    }

    render(){
        return(
            <>
            { this.state.date.toLocaleTimeString() }
            </>
        )
    }
}

export default Clock;