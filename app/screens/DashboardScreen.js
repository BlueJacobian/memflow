import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

function DashboardScreen() {
    return (
        <ImageBackground 
            source={require('../assets/adaptive-icon.png')}
            style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Dashboard</Text>
            </View>
            <View style={styles.dashboxContainer}>
                <View style={styles.dashbox}>
                    <Text style={styles.dashboxTitle}>Dashbox Title</Text>
                    <Text style={styles.dashboxText}>Dashbox Text</Text>
                </View>
            </View>
            <View style={styles.dashboxContainer}>
                <View style={styles.dashbox}>
                    <Text style={styles.dashboxText}>Collections</Text>
                </View>
            </View>
            <Button title='Enter' style={styles.button} onPress={() => { alert('Yep!'); }}/>            
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
    dashboxContainer: {
        margin: 5,
        justifyContent: 'left'
    },
    dashbox: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    dashboxTitle: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    dashboxText: {
        padding: 5,
        backgroundColor: 'white',
        fontFamily: 'sans-serif-medium',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },

});

export default DashboardScreen;