import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import NomalText from '../components/texts/NormalText';
import SubtitleText from '../components/texts/SubtitleText';

export default function GameHistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NomalText>300円</NomalText>
        </View>
        <View>
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
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
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
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
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
        </View>
      </View>
    </ScrollView>
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
