import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {query: ''}

  handleClick = (e) => {
    let query = this.state.query
    this.props.onSearch(query)
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }
  render(){
    return(<div onChange={this.handleChange}>
      <input  className="search-for-stuff" type="text" />
      <button onClick={this.handleClick}>Find Jifs</button>
    </div>)
  }
}
