import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TitleText(props: { children: string; style: any }) {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

TitleText.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
