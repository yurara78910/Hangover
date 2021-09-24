import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CircleButton from '../components/buttons/CircleButton';
import TitleText from '../components/texts/TitleText';

export default function VenueSettingScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.column}>
        <View>
          <TitleText>会場コード</TitleText>
        </View>
        <View style={styles.inputContainer}>
          <TextInput value="aaaaaaaaaaaaaaaa" style={styles.input} />
        </View>
      </View>
      <CircleButton>
        <FontAwesome style={{ color: '#ffffff' }} name="plus" size={32} />
      </CircleButton>
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
