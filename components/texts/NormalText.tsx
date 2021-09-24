import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NomalText(props: { children: string; style: any }) {
  const { children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

NomalText.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default NomalText;
