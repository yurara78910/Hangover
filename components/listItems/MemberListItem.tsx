import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NormalText from '../texts/NormalText';
import SubtitleText from '../texts/SubtitleText';
import { useNavigation } from '@react-navigation/native';

export default function memberListItem() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.memberListItem}
      onPress={() => {
        navigation.navigate('UserRegister');
      }}
    >
      <View>
        <SubtitleText>テツヤ</SubtitleText>
      </View>
      <View style={styles.column}>
        <NormalText>川口から300円もらう</NormalText>
        <NormalText>はるふぉから3000円もらう</NormalText>
        <NormalText>たいせいから100円もらう</NormalText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  memberListItem: {
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
