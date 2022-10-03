import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import SearchResults from "../screens/SearchResults/SearchResults";
import SearchResultsTabNavigation from "./SearchResultsTabNavigation";
import SearchResultsMap from "../screens/SearchResultsMap/SearchResultsMap";

const Stack = createStackNavigator();
const ExploreNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
         component={HomeScreen}
          // component={SearchResultsMap}

          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SearchResults"
          component={SearchResultsTabNavigation}
          options={{
            title: "Select your destination",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default ExploreNavigation;

const styles = StyleSheet.create({});
