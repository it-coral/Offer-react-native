import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import {setStatus, logout} from '../../reducers/actions/index'; //Import your actions
import { Button } from './index'; //Import your Button
import styles from '../../styles/auth/index' //Import your styles
import { fetchOffer, fetchCategory } from '../../redux/actions/OfferActions';
import * as Progress from 'react-native-progress';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var _this = this;
    this.props.fetchOffer();
    this.props.fetchCategory();

    // Check if token exist
    AsyncStorage.getItem('token', (err, token) => {
      if (token === null) Actions.welcome();
      else Actions.offerlist();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Progress.Circle size={30} indeterminate={true} style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', }} />
        </View>
      </View>
    );
  }

}

export default connect(null, { fetchOffer, fetchCategory })(Home);