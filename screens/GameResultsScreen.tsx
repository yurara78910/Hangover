import React from 'react';
import { StyleSheet, View } from 'react-native';
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
