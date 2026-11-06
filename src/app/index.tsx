import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

interface Registro { num: number; hora: string; }

export default function App() {
  const [likes, setLikes] = useState(0);
  const [historial, setHistorial] = useState<Registro[]>([]);

  const sumar = () => {
    const nuevoLike = likes + 1;
    setLikes(nuevoLike);
    const horaExacta = new Date().toLocaleTimeString('es-ES', { hour12: false });
    setHistorial([{ num: nuevoLike, hora: horaExacta }, ...historial]);
  };

  return (
    <SafeAreaView style={styles.fondo}>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <View style={styles.tarjeta}>
          
          <Text style={styles.titulo}>Interactividad con el DOM</Text>
          <Text style={styles.subtitulo}>
            Haz clic para incrementar el contador y registrar la hora exacta.
          </Text>

          <Text style={styles.contador}>{likes}</Text>

          <TouchableOpacity style={styles.boton} onPress={sumar}>
            <Text style={styles.textoBoton}>¡Haz Clic Aquí!</Text>
          </TouchableOpacity>

          <View style={styles.tabla}>
            <View style={styles.filaCabecera}>
              <Text style={styles.cabecera}>Nº Clic</Text>
              <Text style={styles.cabecera}>Hora</Text>
            </View>
            {historial.map((item, index) => (
              <View key={index} style={styles.fila}>
                <Text style={styles.celda}>{item.num}</Text>
                <Text style={styles.celda}>{item.hora}</Text>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f4f6f8'
  },
  contenedor: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  tarjeta: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  },
  subtitulo: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
    marginVertical: 15
  },
  contador: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007bff',
    marginBottom: 15
  },
  boton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 25
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tabla: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4
  },
  filaCabecera: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  cabecera: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555',
    fontSize: 13
  },
  fila: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  celda: {
    flex: 1,
    textAlign: 'center',
    color: '#444',
    fontSize: 14
  }
});