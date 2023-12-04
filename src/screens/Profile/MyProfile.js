import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MyProfile(props) {
  const { navigation } = props;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{ backgroundColor: "grey", padding: 5, marginBottom: 20 }}
      >
        <Text style={{ color: "white" }}>Open Drawer</Text>
      </TouchableOpacity> */}
      <Text>My Profile</Text>
    </View>
  );
}
