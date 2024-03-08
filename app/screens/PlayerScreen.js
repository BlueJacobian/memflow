// https://medium.com/@bharat.tiwari/creating-an-audio-player-in-react-native-2628c4262db4
// https://rntp.dev/docs/intro

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
// import TrackPlayer, { RepeatMode } from 'react-native-track-player';

/* const setup = async () => {
    await TrackPlayer.setupPlayer({});  // The player is ready to be used

    await TrackPlayer.add({
      url: require('../assets/friar_laurence_monologue.m4a'),
      title: 'Friar Laurence Monologue',
      artist: 'William Shakespeare',
      artwork: require('../assets/OxfordLogic.jpg')
    });
  
    TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }; */

/* var track1 = {
    url: '../assets/friar_laurence_monologue.m4a', // Load media from the network
    title: 'Monologue',
    artist: 'Shakespeare',
    album: 'Romeo and Juliet',
    genre: 'Elizabethan Drama',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: '../assets/icon.png', // Load artwork from the network
    duration: 402 // Duration in seconds
};
await TrackPlayer.add([track1]); */

// TrackPlayer.play();

function PlayerScreen(props) {
    /* var Sound = require('react-native-sound');
    Sound.setCategory('Playback');
    var clip = new Sound('../assets/friar_laurence_monologue.m4a', Sound.MAIN_BUNDLE);
    clip.play(); */
    const sound = new Sound('../assets/friar_laurence_monologue.m4a', Sound.MAIN_BUNDLE, (error)=>{
        if (error) {console.log('Error loading sound: ', error);} });
    
    sound.play((success)=>{
        if (success) {console.log('Sound played successfully.');} else {console.log('Error playing sound.');} });
    
    return (
        <ImageBackground source={require('../assets/OxfordLogic.jpg')} style={styles.container} >

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export default PlayerScreen;