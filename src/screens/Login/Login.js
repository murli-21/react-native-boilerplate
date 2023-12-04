import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../navigations/context";
import { TOKEN } from "../../constants/String.constant";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ padding: 10 }}>Login</Text>
      <Button
        onPress={() => {
          AsyncStorage.setItem(TOKEN, "true");
          signIn();
        }}
        title={"Login"}
        color={"blue"}
      />
    </View>
  );
}
