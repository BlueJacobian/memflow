import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

function LandingScreen(props) {
    return (
        <ImageBackground 
            source={require('../assets/OxfordLogic.jpg')}
            style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>MemFlow</Text>
            </View>
            <Button title='Enter' style={styles.button} onPress={() => { alert('Yep!'); }}/>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Memorize Anything</Text>
                <Text style={styles.description}>Scripts</Text>
            </View>            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    button: {
      backgroundColor: '#000',
      justifyContent: 'center',
    },
    titleContainer: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 60,
    },
    subtitleContainer: {
        margin: 5,
        justifyContent: 'left'
    },
    subtitle: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    description: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },

});

export default LandingScreen;