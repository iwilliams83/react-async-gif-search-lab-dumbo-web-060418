import React, { Component } from 'react';

export default class GifList extends Component {
  render(){
    let gifs = this.props.someGifs
    console.log('gifs', gifs)

    const allGifs = gifs.map(gif => {
      return( <li><img src={gif.images.original.url} /></li> )
    })
    return(<div>
      <ul>
        {allGifs}
      </ul>
    </div>)
  }
}
