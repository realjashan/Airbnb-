import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../../components/Post/Post'


import Places from '../.././../assets/data/feed'
import DetailedPost from '../DetailedPost/DetailedPost';
import { useRoute } from '@react-navigation/native';





const PostScreen = () => {

    const route=useRoute();

const id=route.params.postId;

    const post=Places.find(place => place.id ===id)



  return (
    <View style={{backgroundColor:'white'}}>
  <DetailedPost post={post}/>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})