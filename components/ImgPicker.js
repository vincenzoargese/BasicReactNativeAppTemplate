import React, { useState } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImgPicker() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(/*{
      //mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      //aspect: [4, 3],
      //quality: 1,
    }*/);

    console.log(result);

    if (!result.cancelled) {
      setImage({ localUri: result.uri });
    }
  };

 if (image !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: image.localUri }} style={styles.thumbnail} />
      </View>
    );
  }  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Seleziona Immagine
      </Text>
    {/* 
      {image && <Image
        source={{ uri: image }}
        style={{
          width: '80%',
          height: '80%',
          resizeMode: "contain"
        }}
      />}
    */}  
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});