import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SizedBox from '../components/boxs/SizedBox';
import SquareButton from '../components/buttons/SquareButton';
import TitleText from '../components/texts/TitleText';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TitleText>プレイヤー情報</TitleText>
        <SizedBox style={undefined} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value="User name" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value="Email Address" />
        </View>
        <SquareButton>登録する</SquareButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(56,56,56,0.8)',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  inputContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    width: '100%',
  },
  input: {
    textAlignVertical: 'center',
    fontSize: 24,
  },
});
