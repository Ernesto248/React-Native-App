import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const LoginForm = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Jose Tarruo</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Passsword" />
        <Button title="Submit" onPress={() => console.log("sending")} />
      </View>
    </NavigationContainer>
  );
};

export default LoginForm;
