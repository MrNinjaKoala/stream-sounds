import React from "react";
import _ from "lodash";
import Result from './Result/Result';
import './Results.css';

class Results extends React.Component {

    constructor(props) {
        console.log('props', props.type)
        super(props);
    }

    render_results(data) {
        var result_array = [];
        for (const [k,v] of Object.entries(data)) {
            result_array.push(<Result command={k} description={v} highlight={this.props.highlight}/>);
        }
        return result_array;
    }

    render() {
        var matches = null;
        if(!_.isEmpty(this.props.matches)) {
            matches = 
                <div id="matches">
                    Matches:
                    {this.render_results(this.props.matches)}
                </div>
            ;
        }


        var suggestions = null;
        if(!_.isEmpty(this.props.suggestions)) {
            suggestions =
                <div id="suggestions">
                    Suggestions:
                    {this.render_results(this.props.suggestions)}
                </div>
            ;
        }
        return [
            matches, suggestions
        ];


    }
}

export default Results;
