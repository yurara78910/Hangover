import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              GameResultsScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              GameHistoryScreen: 'two',
            },
          },
        },
      },
      VenueSetting: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
