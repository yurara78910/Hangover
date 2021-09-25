import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MemberListItem from '../components/listItems/MemberListItem';
import memberListItem from '../components/listItems/MemberListItem';
import NormalText from '../components/texts/NormalText';
import SubtitleText from '../components/texts/SubtitleText';
import TitleText from '../components/texts/TitleText';

import { RootTabScreenProps } from '../types';

export default function GameResultsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <TitleText>aaaaaa</TitleText>
      <SubtitleText>aaaaaa</SubtitleText>
      <NormalText>aaaaaa</NormalText>
      <MemberListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56,56,56,0.8)',
    flex: 1,
  },
});
