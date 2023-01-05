import React from "react";
import './Search.css';

class Search extends React.Component {

    constructor(props) {
        console.log('props', props.type)
        super(props);
        this.onUpdate = this.props.onUpdate;
        this.input = <input id="input" type="text" class="text" oninput="search()"/>
        this.state = {
            input: "Search:"
        };
        this.onType = this.onType.bind(this);
    }

    getValue() {
        return this.state.input;
    }

    onType(event) {
        this.onUpdate(event.target.value);
    }

    render() {
        return (
            <div class="text-field">
                {this.state.input}
                <input id="input" type="text" class="text" onChange={this.onType}/>
                {/*<button id="copy"></button>*/}
            </div>
        )
    }
}

export default Search;
