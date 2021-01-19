import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-vr';

import Shape from './vr/components/Shape';

class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      gameShapes: [1, 1, 1, 1]
    }
  }
  render() {
    return (
      <View style={styles.game}>
        <Text style={styles.text}>
          Find the Odd Shape!
        </Text>
        {this.state.gameShapes.map((shape, index) => {
          return (
            <View key={index}>
              <Shape
                shapeNum={shape}
                colorNum={index}
                transform={[{ translate: [(index - 1.5) * 1.5, 0, -5] }]}
              />
            </View>
          )
        })
        }
        {/* <Shape shapeNum={1} transform={[{ translate: [0, 0, -5] }]} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  game: {
    transform: [
      { translate: [-2.25, 0, 0] }
    ]
  },
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      { translate: [0, 2, -5] }
    ]
  }
})

AppRegistry.registerComponent('ShapeGame', () => ShapeGame)