import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SizedBox from '../components/boxs/SizedBox';
import CircleButton from '../components/buttons/CircleButton';
import SquareButton from '../components/buttons/SquareButton';
import TitleText from '../components/texts/TitleText';

export default function VenueCreateScreen(props: { navigation: any }) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.column}>
        <TitleText>会場情報</TitleText>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value="Venue code" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value="Venue name" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value="Unit of measure" />
        </View>
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
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
