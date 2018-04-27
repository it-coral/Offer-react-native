import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Tab, Tabs, TabHeading, Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right, List, ListItem, Card, CardItem, View } from 'native-base';
import { StyleSheet, Image, TouchableHighlight, Modal, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Signup from './Signup';
import Usercard from './Usercard';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import logoimage from '../images/logoimage.png';
import styles from '../styles/MyCard';
import barcodeimage from '../images/barcode.png';
import MyOfferList from '../components/MyOfferList';
import MyOfferReddemList from '../components/MyOfferReddemList';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Entypo';
import QRCode from 'react-native-qrcode';

export default class MyOffer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Row style={{ height: 74 }}>
            <Content style={styles.header}>
              <Grid>
                <Col>
                  <TouchableHighlight onPress={() => { Actions.drawerOpen(); }}>
                    <LinearGradient
                      start={{ x: 0.0, y: 0.25 }}
                      end={{ x: 0.5, y: 1.0 }}
                      locations={[0, 0.6, 1]}
                      colors={['rgb(1,123,125)', 'rgb(3,55,55)', 'rgb(3,35,35)']}
                      style={styles.linearGradient}>
                      <Feather name='menu' size={35} color="#FFFFFF" />
                    </LinearGradient>
                  </TouchableHighlight>
                </Col>
                <Col>
                  <Image source={logoimage} style={styles.logo} />
                </Col>
                <Col></Col>
              </Grid>
            </Content>
          </Row>
          <Row>
            <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', marginTop: 50}}>
              <Content>
                <Text style={{ color: '#fff', marginBottom: 10, textAlign: 'center' }}>This is your QR Code</Text>
                <QRCode
                  value='my_username_here'
                  size={200}
                  bgColor='black'
                  fgColor='white' />
                <Text style={{ color: '#fff', marginTop: 10, textAlign: 'center' }}>AHJ9018ILhI091</Text>
              </Content>
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
}
