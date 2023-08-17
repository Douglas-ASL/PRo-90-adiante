import React, { Component } from 'react';
import { View } from 'react-native';

class StoryCard extends Component {
  render() {
    const { post, theme } = this.props;
    const styles = theme === 'light' ? lightStyles : darkStyles;

    return (
      <View style={styles.storyCard}>
        {/* Renderizar os detalhes da história aqui */}
      </View>
    );
  }
}

export default StoryCard;
