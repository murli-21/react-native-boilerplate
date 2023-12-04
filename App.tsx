import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash/Splash.js";
import Login from "./src/screens/Login/Login.js";
import Router from './src/navigations/Router.js'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Router/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
});
