import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotificationManager from './components/NotificationManager';

export default class NotificationView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NotificationManager />
                <StatusBar style="light" />
            </View>
        );
    }
}

{/* CSS */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
