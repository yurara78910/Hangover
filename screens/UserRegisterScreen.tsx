import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SizedBox from '../components/boxs/SizedBox';
import SquareButton from '../components/buttons/SquareButton';
import TitleText from '../components/texts/TitleText';

export default function UserRegisterScreen(props: { navigation: any }) {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.column}>
        <TitleText>プレイヤー情報</TitleText>
        <SizedBox style={undefined} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            autoCapitalize="none"
            placeholder="User name"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            textContentType="emailAddress"
          />
        </View>
        <SquareButton
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Root' }],
            });
          }}>
          登録する
        </SquareButton>
      </View>
    </KeyboardAvoidingView>
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
