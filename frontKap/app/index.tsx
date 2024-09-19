import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av'; // Importa ResizeMode
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define los tipos para las rutas de navegación
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

// Usa la navegación con tipos
export default function WelcomeScreen(): JSX.Element {
  const videoRef = useRef<Video | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Especifica el tipo de navegación

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Esto ahora debería funcionar
    }, 5000); // Duración del video o tiempo de espera

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={require('../assets/video/KAP.mp4')} // Asegúrate de que esta ruta sea correcta
        resizeMode={ResizeMode.COVER} // Usa la constante ResizeMode en lugar de un string
        shouldPlay
        isLooping={false}
        onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
          // Puedes manejar el estado de reproducción si es necesario
        }}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
