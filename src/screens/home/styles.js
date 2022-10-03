import { Dimensions, StyleSheet } from "react-native";

const styles=StyleSheet.create({
image:{
    width:'100%',
    height:500,
    resizeMode:"cover",
    justifyContent:'center',
},
title:{
  fontSize:80,
  width:'70%',
  fontWeight:'bold',
  color:'white',
  marginLeft:25,
  


},

button:{
    backgroundColor:'white',
    padding:20,
    color:'black',
    width:200,
    borderRadius:50,
    marginLeft:25,
    
},

buttonText:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'bold',
    color:'gray'

},



searchButton:{
    backgroundColor:'white',
    padding:20,
    color:'black',
 
    flexDirection:'row',
    borderRadius:50,
    marginHorizontal:10,
    
   width:Dimensions.get('screen').width -20,
    position:'absolute',
    top:50,
    zIndex:100,
    justifyContent:"center",


    
},

searchbuttonText:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'bold',

},

});


export default styles;