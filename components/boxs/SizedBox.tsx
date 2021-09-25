import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SizedBox(props: { style: any }) {
  const { style } = props;
  return <View style={[styles.container, style]} />;
}

SizedBox.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 0,
  },
});
