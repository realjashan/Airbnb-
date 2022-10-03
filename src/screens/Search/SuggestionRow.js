import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const SuggestionRow = ({ item }) => (
  <View>
    <View style={styles.row}>
      <View style={styles.icon}>
        <Entypo name={"location-pin"} size={35} color="black" />
      </View>

      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  </View>
);

export default SuggestionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 15,
  },
  icon: {
    backgroundColor: "#d4d4d4",
    padding: 7,
    borderRadius: 10,
    marginRight: 10,
  },
});
