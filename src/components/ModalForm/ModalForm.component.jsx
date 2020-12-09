import React from 'react';
import Validator from '../../helpers/validator';
import { Input } from '../Input/Input.component';
import { CustomButton } from '../CustomButton/CustomButton.component';
import './ModalForm.styles.scss';

const styles = {
  button: {
    width: '100%',
    height: '56px',
    marginTop: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        number: '',
      },
      errors: {
        name: [],
        number: [],
      },
      success: {
        name: false,
        number: false,
      },
      isValid: false,
    };
  }

  handleInputValidation = ({ name, value }) => {
    const isValid = Validator(name, value.trim());
    const { errors, success } = this.state;
    success[name] = !isValid.length;
    errors[name] = isValid;
    this.setState({ errors, success });
  };

  validateOnblur = (e) => {
    this.setState({ isValid: false });
    const { name, value } = e.target;
    this.handleInputValidation({ name, value });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    const { form, errors } = this.state;
    form[name] = value.trim();
    errors[name] = [];
    this.setState({ form, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleInputValidation({ name: 'name', value: this.state.form.name });
    this.handleInputValidation({ name: 'number', value: this.state.form.number });
    const { name, number } = this.state.errors;
    if (!name.length && !number.length) {
      this.setState({ isValid: true });
      console.log(this.state.form);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          error={this.state.errors.name}
          success={this.state.success.name}
          onChange={(e) => this.handleInput(e)}
          onBlur={(e) => this.validateOnblur(e)}
        />
        <Input
          type="text"
          name="number"
          placeholder="Number"
          error={this.state.errors.number}
          success={this.state.success.number}
          onChange={(e) => this.handleInput(e)}
          onBlur={(e) => this.validateOnblur(e)}
        />
        <CustomButton inverted arrow={this.state.isValid} text="order" style={styles.button} />
      </form>
    );
  }
}
