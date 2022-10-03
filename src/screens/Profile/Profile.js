import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify';

const Profile = () => {

function signOut(){
    Auth.signOut();
}

  return (
    <View style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Pressable style={{width:'100%',height:40,backgroundColor:'#c3c3c3',justifyContent:"center",alignItems:'center'}} onPress={signOut}>
            <Text>Sign Out</Text>

        </Pressable>
       
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})