import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButton from '../components/buttons/CircleButton';

export default function VenueSettingScreen() {
  return (
    <View style={styles.container}>
      <CircleButton>
        <FontAwesome style={{ color: '#ffffff' }} name="plus" size={32} />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56,56,56,0.8)',
    flex: 1,
  },
});
