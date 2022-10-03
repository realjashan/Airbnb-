import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Guest = () => {
  const navigation = useNavigation();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => {
                setAdults(Math.max(0, adults - 1));
              }}
              style={styles.button}
            >
              <Text
                style={{ fontSize: 20, color: "#474747", fontWeight: "bold" }}
              >
                -
              </Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

            <Pressable
              onPress={() => {
                setAdults(adults + 1);
              }}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2 to 12</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => {
                setChildren(Math.max(0, children - 1));
              }}
              style={styles.button}
            >
              <Text
                style={{ fontSize: 20, color: "#474747", fontWeight: "bold" }}
              >
                -
              </Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>

            <Pressable
              onPress={() => {
                setChildren(children + 1);
              }}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => {
                setInfants(Math.max(0, infants - 1));
              }}
              style={styles.button}
            >
              <Text
                style={{ fontSize: 20, color: "#474747", fontWeight: "bold" }}
              >
                -
              </Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>

            <Pressable
              onPress={() => {
                setInfants(infants + 1);
              }}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("SearchResults");
        }}
        style={{
          alignItems: "center",
          marginBottom: 20,
          alignItems: "center",
          justifyContent: "center",

          borderRadius: 10,

          backgroundColor: "#f15454",
          width: "100%",
          height: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default Guest;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,

    borderRadius: 15,
    borderColor: "#676767",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    marginHorizontal: 20,
  },
});
