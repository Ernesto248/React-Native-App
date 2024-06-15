import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button onPress={goToSettings} title="Go to Settings" />
    </SafeAreaView>
  );
}
