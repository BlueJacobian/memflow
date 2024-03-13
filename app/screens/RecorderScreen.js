import React from 'react';
import { Audio } from 'expo-av';
import { Button, StyleSheet, Text, View } from 'react-native';

function RecorderScreen(props) {
    const [recording, setRecording] = React.useState();         // placeholder for current recording
    const [recordings, setRecordings] = React.useState([]);     // global array of all recordings

    async function startRecording() {
        try { const permission = await Audio.requestPermissionsAsync();       // await permission from device
            if (permission.status === 'granted') {
                // set modes
                await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
                // MAKE THE RECORDING!
                const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                // store the recording
                setRecording(recording); } }
        catch (err) { } }

    async function stopRecording() { setRecording(undefined);       // recording is now undefined (like null)
        await recording.stopAndUnloadAsync();                                   // stop and render recording
        const { sound, status } = await recording.createNewLoadedSoundAsync();  // store new recording
        let allRecordings = [...recordings];                        // get global recordings array
        allRecordings.push({                                        // push new recording to recordings array
            sound: sound,
            duration: getDuration(status.durationMillis),
            path: recording.getURI() });
        setRecordings(allRecordings); }                             // pass updated array to global array

    function getDuration(ms) { const minutes = ms / 1000 / 60; const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
        return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`; }

    function getRecordingLines() {                          // display lines and offer playback
        return recordings.map((recordingLine, index)=> {
            return (
                <View key={index} style={StyleSheet.row}>
                   <Text style={StyleSheet.fill}>Recording {index + 1} | {recordingLine.duration} </Text>
                    <Button onPress={()=>recordingLine.sound.replayAsync()} title={recordingLine.path} />
                </View> ); }); }

    function clearRecordings() { setRecordings([]); }       // recordings becomes empty array

    return (
        <View style={styles.container}>
            <Button title={recording ? 'Stop Rec' : 'Start Rec'} onPress={recording ? stopRecording : startRecording } />
            {getRecordingLines()}
            <Button title={recordings.length > 0 ? 'Clear Rec' : ''} onPress={clearRecordings} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:'#ddd', alignItems: 'center', justifyContent: 'center'},
    row: {flexDirection:'row', marginLeft: 10, marginRight: 40, alignItems: 'center', justifyContent: 'center'},
    fill: {flex: 1, margin: 15} });

export default RecorderScreen;