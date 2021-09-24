import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SubtitleText(props: { children: string; style: any }) {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

SubtitleText.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SubtitleText;
