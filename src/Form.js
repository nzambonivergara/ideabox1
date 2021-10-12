import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      errorMessage: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state
    }

    this.props.addIdea(newIdea);

    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', description: '', errorMessage: '' });
  }

  showError = (event) => {
    event.preventDefault();
    this.setState({ errorMessage: 'Please fill out all fields' });
  }

  validateInputs = (event) => {
    this.state.title && this.state.description ? this.submitIdea(event) : this.showError(event);
  }

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Title'
        name='title'
        value={this.state.title}
        onChange={event => this.handleChange(event)}
        />

        <input
        type='text'
        placeholder='Description'
        name='description'
        value={this.state.description}
        onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.validateInputs(event)}>SUBMIT</button>

        {this.state.errorMessage && <h3 className="error"> {this.state.errorMessage} </h3>}
      </form>
    )
  }
}

export default Form;
