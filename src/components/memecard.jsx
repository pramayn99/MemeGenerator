import React, { Component } from "react";
import Meme from "./generatedmeme";
import {
  Card,
  CardImg,
  Button,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

class MemeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      top: "",
      bottom: "",
      meme: false,
      targetMeme: {}
    };
    this.handleTop = this.handleTop.bind(this);
    this.handleBottom = this.handleBottom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMeme = this.handleMeme.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleTop(event) {
    this.setState({ top: event.target.value });
  }

  handleBottom(event) {
    this.setState({ bottom: event.target.value });
  }

  handleSubmit(event) {
    this.handleMeme();
    this.setState({ meme: true });
    this.toggle();
    event.preventDefault();
  }

  handleMeme() {
    const params = {
      template_id: this.props.meme.id,
      username: "pramayn99",
      password: "3124306",
      text0: this.state.top.trim(),
      text1: this.state.bottom.trim()
    };

    var url = new URL("https://api.imgflip.com/caption_image");
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    fetch(url, {
      method: "POST"
    })
      .then(response => response.json())
      .then(content => {
        this.setState({ targetMeme: content.data });
      });
  }

  render() {
    if (!this.state.meme) {
      return (
        <React.Fragment>
          <Card body className="text-center meme-card" onClick={this.toggle}>
            <CardTitle className="card-title">{this.props.meme.name}</CardTitle>
            <CardImg
              bottom
              width="100%"
              src={this.props.meme.url}
              alt="Card image cap"
            />
          </Card>
          <Modal
            centered
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader className="text-info" toggle={this.toggle}>
              Create Meme
            </ModalHeader>
            <form onSubmit={this.handleSubmit}>
              <ModalBody>
                <img
                  className="modal-image"
                  width="100%"
                  src={this.props.meme.url}
                  alt="Card image cap"
                />
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Top Text</InputGroupText>
                  </InputGroupAddon>
                  <Input value={this.state.top} onChange={this.handleTop} />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Bottom Text</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={this.state.bottom}
                    onChange={this.handleBottom}
                  />
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button className="sharp" color="success">
                  Get Meme
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        </React.Fragment>
      );
    } else {
      // return <h1>No Luck{this.state.targetMeme.url}</h1>;
      return (
        <Meme
          targetMeme={this.state.targetMeme}
          buttonText={this.props.buttonText}
        />
      );
    }
  }
}

export default MemeCard;
