import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import NormalText from '../components/texts/NormalText';
import SubtitleText from '../components/texts/SubtitleText';

export default function GameHistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NormalText>300円</NormalText>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NormalText>300円</NormalText>
        </View>
        <TouchableOpacity>
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.historyListItem}>
        <View>
          <SubtitleText>川口　⇒　テツヤ</SubtitleText>
        </View>
        <View>
          <NormalText>300円</NormalText>
        </View>
        <TouchableOpacity>
          <FontAwesome style={{ color: '#ffffff' }} name="remove" size={20} />
        </TouchableOpacity>
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
