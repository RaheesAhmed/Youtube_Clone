import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };


  onFormSubmit = (event) => {
    event.preventDefault();
   this.props.onFormSubmit(this.state.term)

    
  };


  render() {
    return (
      <div className="ui segment search-bar "style={{background:'red'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
           
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ borderRadius: "30px" }}
              placeholder="Serach Image here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
