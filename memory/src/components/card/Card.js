import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component {

  static propTypes = {
    image: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,

  };

  // state = {
  //   isClosed: true,
  //   image: backward
  // };
  //
  // handlePress = () => {
  //   if (this.state.isClosed) {
  //     this.setImage(cardImages[this.props.imageId], !this.state.isClosed);
  //   } else {
  //     this.setImage(backward, !this.state.isClosed);
  //   }
  // };
  //
  // setImage(newImage, isOpen) {
  //   this.setState(() => ({
  //     image: newImage,
  //     isClosed: isOpen,
  //   }));
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image source={this.props.image} style={styles.image}/>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: '22%',
    aspectRatio: 1,
    backgroundColor: 'red',
    marginHorizontal: 70,
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
