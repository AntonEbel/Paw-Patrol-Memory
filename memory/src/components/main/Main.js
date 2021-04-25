import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Card from '../card/Card';

export default class Main extends Component {

  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.number.isRequired,
    })).isRequired,
    onCardPressed: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.cards.map((card) => (
          <Card key={card.id} image={card.image} onPress={() =>this.props.onCardPressed(card.id)}/>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-around'
  },
});