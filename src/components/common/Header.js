// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// Functional Component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',

    // Alignment
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,

    // Shadow around element
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,

    // For later
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
