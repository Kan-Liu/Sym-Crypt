import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import * as symCrypt from "./symCrypt";
import "./App.css";

interface State {
  toEncrypt: string;
  myEnKey: string;
  toDecrypt: string;
  myDeKey: string;
  showAlert: boolean;
  strToShow: string;
  strHeading: string;
  alertType: "success" | "danger";
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
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }

  state: State = {
    toEncrypt: "",
    myEnKey: "",
    toDecrypt: "",
    myDeKey: "",
    showAlert: false,
    strToShow: "",
    strHeading: "",
    alertType: "success"
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

    this.setState({
      showAlert: true,
      strHeading: "Your encrypted string",
      strToShow: encrypted,
      alertType: "success"
    });
  }

  handleClickDecrypt(event: any) {
    try {
      const decrypted = symCrypt.symDecrypt(
        this.state.toDecrypt,
        this.state.myDeKey
      );

      this.setState({
        showAlert: true,
        strHeading: "Your decrypted string",
        strToShow: decrypted,
        alertType: "success"
      });
    } catch (e) {
      this.setState({
        showAlert: true,
        strHeading: "Error",
        strToShow: "Please eneter a valid encrypted string to decrypt!",
        alertType: "danger"
      });
    }
  }

  handleCloseAlert() {
    this.setState({
      showAlert: false
    });
  }

  render() {
    return (
      <div className="App-header">
        <Alert
          className="Main-Alert"
          show={this.state.showAlert}
          variant={this.state.alertType}
          onClose={this.handleCloseAlert}
          dismissible
        >
          <Alert.Heading className="Alert-Heading">
            {this.state.strHeading}
          </Alert.Heading>
          <p>{this.state.strToShow}</p>
        </Alert>
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
              variant="info"
            >
              Decrypt
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default App;
