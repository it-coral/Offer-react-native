import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../index';
import styles from '../../../styles/auth/index'

export default class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.welcomeText]}>OfferBot</Text>
          <Button onPress={Actions.login} btnText={"Login"} />
          <Button onPress={Actions.register} btnText={"Register"} bordered />
        </View>
      </View>
    );
  }

}
