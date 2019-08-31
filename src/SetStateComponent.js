import React,{Component} from 'react';
class SetStateComponent extends Component{
    state={
        count:4
    }
    incrementOne(){
        this.setState({count:7})
    }
    render(){
        return(
            <div>
                <h1>statistics count:{this.state.count}</h1>
                 <button onClick={this.incrementOne.bind(this)}>Count</button>
                 <button onClick={this.test}>Test</button>
                
            </div>
        );
    }
}
export default SetStateComponent;