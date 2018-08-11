import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
  state = {firstThreeGifs: []}

  makeFetchRequest = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json()).then(res => this.gifFunction(res.data))
  }

  gifFunction = (gifs) => {
    let arr = [gifs[0], gifs[1], gifs[2]]
    this.setState({
      firstThreeGifs: arr
    })
  }

  render(){
    return(<div><GifSearch onSearch={this.makeFetchRequest}/>
              <GifList someGifs={this.state.firstThreeGifs}/>
            </div>)
  }



}
