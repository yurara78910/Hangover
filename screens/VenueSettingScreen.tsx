import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
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
          <TextInput value="venue code" style={styles.input} />
        </View>
      </View>
      <CircleButton
        name="plus"
        onPress={() => {
          Alert.alert('aaaaa');
        }}
      />
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
