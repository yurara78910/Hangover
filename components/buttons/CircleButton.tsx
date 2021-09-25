import { FontAwesome } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export default function CircleButton(props: { name: any; style: any }) {
  const { name, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <FontAwesome style={{ color: '#ffffff' }} name={name} size={32} />
    </View>
  );
}

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'rgba(29,31,33,0.8)',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
