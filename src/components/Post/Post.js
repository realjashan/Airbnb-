 import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import feed from '../../../assets/data/feed';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {
const navigation=useNavigation();
    const {id,description,bed,bedroom,type,title,oldPrice,newPrice,totalPrice,image}=props.post;
    
  return (
    <Pressable onPress={()=>{
      navigation.navigate('postScreen',{
        postId:id,
      })
    }}>    
    
    <View style={styles.container}>
      <Image
        source={{
          uri:image,
        }}
        style={styles.image}
      />

      <Text style={styles.bedrooms}>{bed} bed {bedroom} bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
 {type}.{title}  {description}
  
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.price}> ${newPrice}</Text>
        / night
      </Text>

      <Text style={styles.totalprice}>${totalPrice} Total</Text>
    </View>
    </Pressable>

  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  bedrooms:{

marginVertical:10,
color:'#5b5b5b',

  },
description:{

    fontSize:18,
    lineHeight:25,
    color:'black',
},
prices:{
    fontSize:18,
    color:'black',
    marginVertical:10,
},

oldPrice:{
    color:'#5b5b5b',
    textDecorationLine:'line-through',
},
price:{
    fontWeight:'bold',
},

totalprice:{
    textDecorationLine:'underline',
    color:"#5b5b5b",
}


});
