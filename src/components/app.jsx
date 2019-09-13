import React, { Component } from 'react';
// import { cpus } from 'os';
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xMGh0bajSyNdC"
    }
  }

  search = (query) => {
    // implement API call
  }

  render () {
    const gifs = [
      { id: "dxocWugDZRyG4"},
      { id: "mWY8bJS2bplx6"},
      { id: "Yb8ebQV8Ua2Y0"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;