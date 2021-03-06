
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin, fetchOffer } from '../../../redux/actions/OfferActions'; //Import your actions
import { View } from 'native-base';
import { Authentication } from './index';
import { Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: false
        };
    }
    render() {
        let content = <View />;
        if (this.props.isloginFetching) {
            content = <Progress.Circle size = {30} indeterminate = {true} />;
        }
        return (
            <Grid>
                <Row>
                    <Authentication login onPress = {this.login.bind(this)} />
                </Row>
                <Row style = {{ flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
                    {content}
                </Row>
            </Grid>
        );
    }

    login(data, errorCB) {
        this.setState({ fetching: true });
        this.props.fetchLogin(data);
    }
};
function mapStateToProps(state, props) {
    return {
        loggedIn: state.OfferReducer.loggedIn,
        isloginFetching: state.OfferReducer.isloginFetching
    }
}
export default connect(mapStateToProps, { fetchLogin })(Login);