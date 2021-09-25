import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import NormalText from '../texts/NormalText';

export default function SquareButton(props: { children: string; style: any; onPress: any }) {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <NormalText>{children}</NormalText>
    </TouchableOpacity>
  );
}

SquareButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(29,31,33,0.8)',
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
