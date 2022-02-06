import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; 

const jsCode = `
    var cookie={};
    document.cookie.split('; ').forEach(function(i){cookie[i.split('=')[0]]=i.split('=')[1]});
    document.querySelector('#username').value=cookie['username'] || '';
    document.querySelector('#password').value=cookie['password'] || '';
    document.querySelector('button').onclick = function(){
        document.cookie = 'username='+document.querySelector('#username').value;
        document.cookie = 'password='+document.querySelector('#password').value;
    };
  `;

export default class SiteLoader extends React.Component {
    render() {
        return (
            <WebView
                style={styles.siteBrowser}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://github.com/vincenzoargese' }}
                originWhiteLis={['*']}
                injectedJavaScript={jsCode}
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