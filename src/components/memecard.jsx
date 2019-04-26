import React, { Component } from "react";
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
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
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
              <Input />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Bottom Text</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button className="sharp" color="success" onClick={this.handleMeme}>
              Get Meme
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MemeCard;
