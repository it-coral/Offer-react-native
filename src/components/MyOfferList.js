
import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View, TouchableHighlight, Modal } from "react-native";
import PropTypes from "prop-types";
import styles from '../styles/myoffer';
import dumpimage from '../images/dump.jpg';
import { Actions } from 'react-native-router-flux';
import barcodeimage from '../images/barcode.png';
import { connect } from 'react-redux';
class MyOfferList extends Component {
  constructor(props) {
    super(props);

  }
  _keyExtractor = item => item.id;
  _renderItem = ({ item }) => {
    return (
      <View style={styles.listview}>
        <Text style={styles.listtitletext}>{item.name}</Text>
        <Text style={styles.listtimetext}>5 pm today</Text>
        <Text style={styles.listcontenttext}>{item.story}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.randomoffer.offer}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    randomoffer: state.OfferReducer
  }
}
export default connect(mapStateToProps, null)(MyOfferList);
