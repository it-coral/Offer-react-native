import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import styles from '../styles/usercard';
import dumpimage from '../images/dump.jpg';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class OfferList extends Component {

  constructor(props) {
    super(props);
    this.gotocarddetails = this.gotocarddetails.bind(this);
  }

  gotocarddetails(value) {
    Actions.offerdetails({ 'details': value });
    // console.log('listitem:',value);
  }

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    const image_url_array = item.image_urls;
    const image_urls = image_url_array[0];
    let image_content = <Image resizeMode='cover' source={{ uri: image_urls }} style={styles.listimage} />;
    if (this.props.randomoffer.isFetching) {
      image_content = <Image resizeMode='cover' source={dumpimage} style={styles.listimage} />;
    }
    return (
      // <View>
      //   <View style={styles.cardContainerStyle}>
      //     <View style={{ paddingRight: 5 }}>
      //       <Text style={styles.cardTextStyle}>
      //         {name.first} {name.last} {"\n"}
      //         {cell} {"\n"}
      //         {email}
      //       </Text>
      //     </View>
      //     <Image
      //       style={styles.faceImageStyle}
      //       source={{ uri: picture.medium }}
      //     />
      //   </View>
      // </View>
      <TouchableHighlight onPress={() => this.gotocarddetails(item)} underlayColor='rgb(2,139,141)'>
        <View style={styles.listview}>
          <View style={styles.imageview}>
            {image_content}
          </View>
          <TouchableHighlight style={styles.controlbutton}>
            <Text style={styles.buttontext}>{item.pricing}</Text>
          </TouchableHighlight>
          <Text style={styles.itemcontent}>
            {item.name}
          </Text>
          <Text style={styles.itemtitle}>
            {item.story}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    let output = <FlatList
                    style={{ flex: 1 }}
                    data={this.props.offer}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />

    if (this.props.offer.length == 0) {
      output = <View style={{alignItems: 'center'}}><Text>No offers available at this time. Please check back again later.</Text></View>;
    }

    return output;
  }
}


function mapStateToProps(state, props) {
  return {
    randomoffer: state.OfferReducer
  }
}

export default connect(mapStateToProps, null)(OfferList);