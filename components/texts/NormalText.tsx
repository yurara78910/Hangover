import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NormalText(props: { children: string; style: any }) {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

NormalText.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },
});
