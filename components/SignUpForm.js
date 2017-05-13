import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-246c7.cloudfunctions.net';

class SignUpForm extends Component {

  state = { phone: '6308027370' }; // Equivalent to constructor syntax.

  handleSubmit = async () => { // Binds "this" to handleSubmit variable
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone }) // Await a promise from post request.
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) { // Failed network request response
      console.log(err)
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          title="Submit"
          onPress={this.handleSubmit} title="Submit"
        />
      </View>
    )
  }
}

export default SignUpForm;
