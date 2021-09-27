import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyC_ZVbxq39QmowUvqdt7rYoP5_rQTnturA',
  authDomain: 'hangover-b8947.firebaseapp.com',
  projectId: 'hangover-b8947',
  storageBucket: 'hangover-b8947.appspot.com',
  messagingSenderId: '332638107021',
  appId: '1:332638107021:web:9fccaa0e68dead373379c4',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const versionCollection = collection(firestore, 'version');
const dbSnapshot = getDocs(versionCollection);
const db = React.createContext(dbSnapshot);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export { db };
