import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Page2 extends React.Component {
    render() {
        return (
            <WebView
                style={styles.siteBrowser}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://github.com/vincenzoargese/BasicReactNativeAppTemplate' }}
                originWhiteLis={['*']}
            />
        );
    }
}

const styles = StyleSheet.create({
    siteBrowser: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});