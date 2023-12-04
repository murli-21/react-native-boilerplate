import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useReducer } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "./context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Splash from "../screens/Splash/Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyProfile from "../screens/Profile/MyProfile";
import {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
  TOKEN,
} from "../constants/String.constant";

const Stack = createNativeStackNavigator();
const AuthStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerView {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="bottomTab"
        component={BottomTabScreen}
      />
    </Drawer.Navigator>
  );
}

function DrawerView(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={{ padding: 5, margin: 10 }}
      >
        <Text style={{ color: "black" }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("profile");
        }}
        style={{ padding: 5, margin: 10 }}
      >
        <Text style={{ color: "black" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function BottomTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function AuthStackScreen(data) {
  if (data.userToken === "true") {
    // here you can return the auth screen eg: home and all
    return (
      <AuthStackNavigator.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <AuthStackNavigator.Screen
          name="drawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <AuthStackNavigator.Screen
          name="myProfile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
      </AuthStackNavigator.Navigator>
    );
  } else {
    // here you return to the login screen
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="login"
          component={Login}
          navigationOptions={{ headerShown: false }}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

function Router() {
  useEffect(() => {
    setTimeout(() => {
      bootstrapAsync();
      state.isLoading;
    }, 2000);
  }, []);

  const bootstrapAsync = async () => {
    let userInfo;
    try {
      userInfo = {
        token: await AsyncStorage.getItem(TOKEN),
      };
    } catch (e) {
      console.log("error in useEffect ", e);
    }

    dispatch({ type: RESTORE_TOKEN, userData: userInfo });
  };

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case RESTORE_TOKEN:
          return {
            ...prevState,
            userToken: action.userData.token,
            isLoading: false,
          };
        case SIGN_IN:
          return {
            ...prevState,
            userToken: action.userData.token,
            isSignout: false,
          };

        case SIGN_OUT:
          return {
            ...prevState,
            isSignout: true,
            userToken: "false",
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: "false",
    }
  );

  const authContext = useMemo(() => {
    return {
      signIn: async () => {
        let userInfo;
        try {
          userInfo = {
            token: await AsyncStorage.getItem(TOKEN),
          };
        } catch (e) {
          console.log("error in useMemo ", e);
        }
        dispatch({ type: SIGN_IN, userData: userInfo });
      },

      signOut: async () => {
        let userInfo;
        try {
          userInfo = {
            token: await AsyncStorage.getItem(TOKEN),
          };
        } catch (e) {
          console.log("error in useMemo ", e);
        }
        dispatch({ type: SIGN_OUT, userData: userInfo });
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoading ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              navigationOptions={{ headerShown: false }}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          AuthStackScreen(state)
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default Router;
