import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadScreen() {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setFileName(result.name);
        // Here you would typically implement the actual upload logic
        // For now, we'll just simulate an upload
        setUploading(true);
        setTimeout(() => {
          setUploading(false);
          alert('Berhasil mengunggah!');
        }, 2000);
      }
    } catch (err) {
      console.log('Document picking error:', err);
      alert('Error picking document');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unggah Materi Belajar</Text>
      {fileName ? (
        <Text style={styles.fileName}>Dipilih: {fileName}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={pickDocument}
        disabled={uploading}
      >
        <Text style={styles.buttonText}>Pilih Dokumen</Text>
      </TouchableOpacity>
      {uploading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={48} color="#007AFF" />
          <Text style={styles.loadingText}>Mengunggah...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileName: {
    marginVertical: 10,
    fontSize: 16,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});
