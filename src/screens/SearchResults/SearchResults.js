import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post/Post'
import {API,graphqlOperation} from 'aws-amplify'

const SearchResults = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item})=>
<Post post={item} />
      }/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})