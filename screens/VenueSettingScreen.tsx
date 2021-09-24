import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NomalText from '../components/texts/NormalText';

export default function VenueSettingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circleButton}>
        <FontAwesome style={{ color: '#ffffff' }} name="plus" size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56,56,56,0.8)',
    flex: 1,
  },
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
