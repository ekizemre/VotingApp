import { StatusBar } from 'expo-status-bar';
import "./src/ignoreWarnings";
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Router from './src/Router';
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo';
export default function App() {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>

  );
}

