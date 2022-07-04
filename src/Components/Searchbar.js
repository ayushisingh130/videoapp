import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (Event) => {
    Event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Searchbar;
