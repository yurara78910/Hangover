import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NomalText from '../components/texts/NormalText';
import SubtitleText from '../components/texts/SubtitleText';

export default function GameHistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <NomalText>X</NomalText>
        </View>
      </View>

      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <NomalText>X</NomalText>
        </View>
      </View>

      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
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
  },
  historyListItem: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
});
