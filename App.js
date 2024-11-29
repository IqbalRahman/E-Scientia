import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import DownloadScreen from './screens/DownloadScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Aplikasi Materi Belajar' }}
        />
        <Stack.Screen 
          name="Upload" 
          component={UploadScreen} 
          options={{ title: 'Unggah Materi' }}
        />
        <Stack.Screen 
          name="Download" 
          component={DownloadScreen} 
          options={{ title: 'Unduh Materi' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
