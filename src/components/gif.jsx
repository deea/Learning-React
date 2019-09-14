import React, { Component } from 'react';

class Gif extends Component {
  
  render () {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" width="700px"
        onClick={ () => this.props.changeGifFunction(this.props.id) }
        // onClick={console.log}
      />
    );
  }
}

export default Gif;