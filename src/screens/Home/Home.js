import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../../navigations/context";
import { TOKEN } from "../../constants/String.constant";

export default function Home(props) {
  const { navigation } = props;
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{ backgroundColor: "grey", padding: 5, marginBottom: 20 }}
      >
        <Text style={{ color: "white" }}>Open Drawer</Text>
      </TouchableOpacity>
      <Text style={{ marginBottom: 20 }}>Home</Text>
      <Button
        onPress={() => {
          AsyncStorage.setItem(TOKEN, "false");
          signOut();
        }}
        title={"Logout"}
        color={"red"}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          onPress={() => {
            navigation.navigate("myProfile");
          }}
          title={"My Profile"}
          color={"purple"}
        />
      </View>
    </View>
  );
}
