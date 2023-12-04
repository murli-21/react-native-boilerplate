import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

export default function Profile(props) {
  const { navigation } = props;
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
      <Text>Profile</Text>
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
