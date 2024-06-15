import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Go to Home" />
    </SafeAreaView>
  );
}
