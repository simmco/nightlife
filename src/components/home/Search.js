import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class Search extends Component {
  constructor (props) {
    super (props);
    this.state = {
      search: localStorage.getItem('lastSearch') || ''
    }

    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInputSearch (e) {
    this.setState({search: e.target.value})
  }
  handleSearch (e) {
    e.preventDefault();
    if(this.state.search !== '') {
      this.props.searchBar(this.state.search)
      this.setState({search: ''})
    }

  }
  render () {
    return (
      <div className="search">
        <form  onSubmit={this.handleSearch}>
            <TextField
              floatingLabelText="Search Location:"
              hintText="Search Location..."
              onChange={this.handleInputSearch}
              value={this.state.search}
            />
        </form>
      </div>
    );
  }
}

export default Search;
