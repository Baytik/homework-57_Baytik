import React, {Component} from 'react';
import './App.css';
import Content from './Components/Content/Content';
import ItemName from './Components/ItemName/ItemName';

class App extends Component {
    state = {
        task: [],
    };

    changeInput = (e) => this.setState({task: e.target.value});
    costInput = (e) => this.setState({task: e.target.value});

    render() {
        return(
            <div className="App">
                <ItemName/>
                <div className="container">
                <Content changeInput = {this.changeInput}/>
                </div>
            </div>
        )
    }
}

export default App;