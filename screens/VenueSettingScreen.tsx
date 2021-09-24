import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NomalText from '../components/texts/NormalText';

export default function VenueSettingScreen() {
  return (
    <View style={styles.container}>
      <View>
        <NomalText>+</NomalText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56,56,56,0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
