import React, { Component } from 'react';
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xMGh0bajSyNdC"
    }
  }

  search = (query) => {
    giphy('8mD71GurIzyrVAXXEbN8Z74UWrYDR4ul').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  componentDidMount() {
    this.search("Michael Scott");
  }

  changeGif = (gifid) => {
    this.setState({
      selectedGifId: gifid
    })
  }

  render () {
    // const gifs = [
    //   { id: "dxocWugDZRyG4"},
    //   { id: "mWY8bJS2bplx6"},
    //   { id: "Yb8ebQV8Ua2Y0"}
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeGifFunction={this.changeGif} />
        </div>
      </div>
    );
  }
}

export default App;