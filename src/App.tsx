import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as symCrypt from "./symCrypt";
import "./App.css";

interface State {
  toEncrypt: string;
  myEnKey: string;
  toDecrypt: string;
  myDeKey: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEncrypt = this.handleEncrypt.bind(this);
    this.handleDecrypt = this.handleDecrypt.bind(this);
    this.handleClickDecrypt = this.handleClickDecrypt.bind(this);
    this.handleEncryptKey = this.handleEncryptKey.bind(this);
    this.handleDecryptKey = this.handleDecryptKey.bind(this);
    this.handleClickEncrypt = this.handleClickEncrypt.bind(this);
  }

  state: State = {
    toEncrypt: "",
    myEnKey: "",
    toDecrypt: "",
    myDeKey: ""
  };

  handleSubmit(event: any) {
    event.preventDefault();
  }

  handleEncrypt(event: any) {
    this.setState({
      toEncrypt: event.target.value
    });
  }

  handleDecrypt(event: any) {
    this.setState({
      toDecrypt: event.target.value
    });
  }

  handleEncryptKey(event: any) {
    this.setState({
      myEnKey: event.target.value
    });
  }

  handleDecryptKey(event: any) {
    this.setState({
      myDeKey: event.target.value
    });
  }

  handleClickEncrypt(event: any) {
    const encrypted = symCrypt.symEncrypt(
      this.state.toEncrypt,
      this.state.myEnKey
    );
    alert(`Your encrypted string is: ${encrypted}`);
  }

  handleClickDecrypt(event: any) {
    const decrypted = symCrypt.symDecrypt(
      this.state.toDecrypt,
      this.state.myDeKey
    );
    alert(`Your encrypted string is: ${decrypted}`);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          Sym-Crypt
          <br />
          <header className="App-header3">
            <Form name="Sym-Crypt Form" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formToEncrypt">
                <Form.Label>String to be encrypted</Form.Label>
                <Form.Control
                  onChange={this.handleEncrypt}
                  placeholder="Enter your string to encrypt"
                  style={{ width: "410px", height: "30px" }}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="formEncryptKey">
                <Form.Label>Encryption Key</Form.Label>
                <Form.Control
                  onChange={this.handleEncryptKey}
                  placeholder="Enter your encryption key"
                  style={{ width: "410px", height: "30px" }}
                  type="text"
                />
              </Form.Group>

              <Button
                onClick={this.handleClickEncrypt}
                style={{ width: "410px" }}
              >
                Encrypt
              </Button>
              <br />
              <br />
              <br />
              <br />
              <Form.Group controlId="formToDecrypt">
                <Form.Label>String to be decrypted</Form.Label>
                <Form.Control
                  onChange={this.handleDecrypt}
                  placeholder="Enter your string to decrypt"
                  style={{ width: "410px", height: "30px" }}
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="formDecryptKey">
                <Form.Label>Decryption Key</Form.Label>
                <Form.Control
                  onChange={this.handleDecryptKey}
                  placeholder="Enter your decryption key"
                  style={{ width: "410px", height: "30px" }}
                  type="text"
                />
              </Form.Group>

              <Button
                onClick={this.handleClickDecrypt}
                style={{ width: "410px" }}
              >
                Decrypt
              </Button>
            </Form>
          </header>
        </header>
      </div>
    );
  }
}

export default App;
