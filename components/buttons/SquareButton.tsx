import React from 'react';
import { View, StyleSheet } from 'react-native';
import NomalText from '../texts/NormalText';

export default function SquareButton(props: { children: string; style: any }) {
  const { children, style } = props;
  return (
    <View style={[styles.buttonContainer, style]}>
      <NomalText>{children}</NomalText>
    </View>
  );
}

SquareButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(29,31,33,0.8)',
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
