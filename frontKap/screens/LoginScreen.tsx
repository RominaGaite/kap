import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Botón Ingresar con Google */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar con Google</Text>
      </TouchableOpacity>

      {/* Botón Registrarse con Google */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#db4437', // Rojo para el botón
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff', // Letras blancas
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
