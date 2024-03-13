import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Button, Animated } from 'react-native';

<View style={styles.container}>
<StatusBar style="auto" />
<View>
  <Text style={styles.title}>Title Screen</Text>
</View>
<View style={styles.button}>
  <Button title="Enter" />
</View>
<View style={styles.navcontainer}>
  <Text style={styles.navbox}>Nav 1</Text>
  <Text style={styles.navbox}>Nav 2</Text>
</View>
</View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 25,
      padding: 5,
      backgroundColor: 'white',
      fontFamily: 'sans-serif-medium',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    navcontainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#eee',
      border: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbox: {
      flex: 1,
      backgroundColor: '#e99',
      border: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      backgroundColor: '#97c',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });