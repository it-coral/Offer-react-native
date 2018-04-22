import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { fetchSignup, fetchOffer } from '../../../redux/actions/OfferActions'; //Import your actions
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Progress from 'react-native-progress';
import { Authentication } from './index';

class Register extends Component {

  register(data, errorCB) {
    this.props.fetchSignup(data);
  }

  render() {
    let content = <View />;

    if (this.props.issignupFetching) {
      content = <Progress.Circle size={30} indeterminate={true} />;
    }

    return (
      <Grid>
        <Row>
          <Authentication register onPress={this.register.bind(this)} />
        </Row>
        <Row style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', }}>
          {content}
        </Row>
      </Grid>
    );
  }

}

function mapStateToProps(state, props) {
  return {
    issignupFetching: state.OfferReducer.issignupFetching
  }
}

export default connect(mapStateToProps, { fetchSignup })(Register);