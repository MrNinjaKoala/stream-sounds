import React from "react";
import Search from '../Search/Search'
import Results from '../Results/Results'
import data from '../../data.json';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.update_search = this.update_search.bind(this);
  }

  update_search(input) {
    var [matches, suggestions] = this.search_data(input, data);
    this.setState({
      input: input,
      matches: matches,
      suggestions: suggestions
    });
  }

  search_data(input, data) {
    var matches = {}
    var suggestions = {}

    if (data[input]) {
      matches[input] = data[input];
    }

    if(input.length > 2){
      var filtered = Object.keys(data).reduce(function (filtered, key) {
          if (data[key].includes(input) || key.includes(input)) filtered[key] = data[key];
          return filtered;
      }, {});
      suggestions = filtered;
    }
    
    return [matches,suggestions];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search onUpdate={this.update_search}/>
        </header>
        <Results matches={this.state.matches} suggestions={this.state.suggestions} highlight={this.state.input}/>
      </div>
    );
  }
}

export default App;
