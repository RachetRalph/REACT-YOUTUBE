import React, {Component} from 'react';
// Define a new class called SearchBar, that is present in the React.Component
class SearchBar extends Component{
    constructor(props){
        super(props); // Super Calls the parent method 

        this.state = {term: ''}; //Create a new object, will contain props of state 
    }

    render() {
        return (
        <div className="search-bar">
            
            {/* The input sets the change: AKA if there is no input the state does not change */}
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange (event.target.value)} />
            
        </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

