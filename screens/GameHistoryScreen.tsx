import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NomalText from '../components/texts/NormalText';
import SubtitleText from '../components/texts/SubtitleText';

export default function GameHistoryScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <NomalText>X</NomalText>
        </View>
      </View>

      <View>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <NomalText>X</NomalText>
        </View>
      </View>

      <View>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <NomalText>X</NomalText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(56,56,56,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
