import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap/SearchResultsMap';


const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigation = () => {
  return (
    <>

<Tab.Navigator screenOptions={{
    tabBarActiveTintColor:'#f15454',
    tabBarIndicatorStyle:{
        backgroundColor:'#f15454',
    }
}}>
    <Tab.Screen name='List' component={SearchResults} />
<Tab.Screen name="Map" component={SearchResultsMap}/>

</Tab.Navigator>
    </>
  )
}

export default SearchResultsTabNavigation

const styles = StyleSheet.create({})