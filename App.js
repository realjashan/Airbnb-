import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routerr from './src/navigations/Routerr'
 
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

 


 

const App = () => {
  return (
    <Routerr/>
  )
}

export default withAuthenticator(App);



 

const styles = StyleSheet.create({
 
});
