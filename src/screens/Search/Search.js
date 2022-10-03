import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import search from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const Search = () => {
  const [textInput, setTextInput] = useState("");
  const navigation = useNavigation();

  return (

 
    <View style={styles.container}>
    
    
     
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: "AIzaSyAC4g01EyPHJjue9Bb7yQ-i0fOo0UC1220",
            language: "en",
            type:'(cities)',
          }}
          fetchDetails
          enablePoweredByContainer={false}
       
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>
   

 
   
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: '100%',
    backgroundColor:'white',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
});
