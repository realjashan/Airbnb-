import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import SearchResults from "../screens/SearchResults/SearchResults";
import Guest from "../screens/Guests/Guest";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../screens/Search/Search";
import DetailedPost from "../screens/DetailedPost/DetailedPost";
import PostScreen from "../screens/PostScreen/PostScreen";

const Stack = createStackNavigator();

const Routerr = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="result"
          component={Search}
          options={{
            title: "Search Your Destination",
          }}
        />

        <Stack.Screen
          name="post"
          component={SearchResults}
          options={{
            title: "Select Your Destination",
          }}
        />

        <Stack.Screen
          name="Guests"
          component={Guest}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name="postScreen"
          component={PostScreen}
          options={{
            title: "Accomodation",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routerr;

const styles = StyleSheet.create({});
