import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import feed from "../../../assets/data/feed";
import { useNavigation } from "@react-navigation/native";
const PostCarousel = (props) => {

const width=useWindowDimensions().width;


const post=props.post;

const navigation=useNavigation();

  const {
    description,
    bed,
    bedroom,
    type,
    title,
    oldPrice,
    newPrice,
    totalPrice,
    image,
  } = props.post;

  return (

<Pressable onPress={()=>{
navigation.navigate('postScreen',{
  postId:post.id
})
}}>

    <View style={[styles.container,{width:width-60}]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={{marginHorizontal:10,flex:1}}>
          <Text style={styles.bedrooms}>
            {bed} bed {bedroom} bedroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {type}.{title} {description}
          </Text>

          <Text style={styles.prices}>
           
            <Text style={styles.price}> ${newPrice}</Text>/ night
          </Text>
        </View>
      </View>
    </View>

    </Pressable>
  );
};

export default PostCarousel;

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation:10,
  },

  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "cover",
  },

  bedrooms: {
    color: "#5b5b5b",
    marginTop:5,
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
 
    color: "black",
    marginBottom: 10,
  },
  prices: {
    fontSize:15,
    color: "black",
  },

  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },

  totalprice: {
    textDecorationLine: "underline",
    color: "#5b5b5b",
  },
});
