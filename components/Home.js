import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SiteLoader from './SiteLoader';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SiteLoader />
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
