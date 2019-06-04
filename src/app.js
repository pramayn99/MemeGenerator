import React, { Component } from "react";
import { Button } from "reactstrap";
import MemeCard from "./components/memecard";

function App()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Generate",
      meme: getMeme().then(meme => {
        this.setState({ meme: meme });
      })
    };
  }

  handleGenerate = () => {
    getMeme().then(meme => {
      this.setState({ meme: meme });
    });
  };

  render() {
    return (
      <div className="container text-center">
        <MemeCard meme={this.state.meme} buttonText={this.state.buttonText} />
        <Button
          className="cta-btn mx-auto"
          color="outline-info"
          onClick={this.handleGenerate}
        >
          {this.state.buttonText}
        </Button>
      </div>
    );
  }
}

export default App;

function getMeme() {
  let index = Math.floor(Math.random() * 100 + 1);
  return fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(content => {
      return content.data.memes[index];
    });
}
