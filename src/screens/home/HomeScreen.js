import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import  Fontisto from 'react-native-vector-icons/Fontisto'

import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation=useNavigation();
  return (
    <View>
<Pressable style={styles.searchButton} onPress={()=>{
navigation.navigate('result')
}}>
    <Fontisto name='search' size={25} color={'#f15454'}  />
    <Text style={styles.searchbuttonText}>Where are you going?</Text>

</Pressable>


      <ImageBackground source={require('.././../../assets/images/wallpaper.jpg')} style={styles.image}>
        <Text style={styles.title}> Go Near</Text>
      
      <Pressable style={styles.button} onPress={()=>{

      }}>
        <Text style={styles.buttonText}>Explore nearby stays</Text>

      </Pressable>
      
      
      </ImageBackground>



    </View>
  )
}

export default HomeScreen