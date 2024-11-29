import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function DownloadScreen() {
  // Mock data - in a real app, this would come from your backend
  const [materials] = useState([
    { id: '1', title: 'Pemrograman Web', size: '2.3 MB' },
    { id: '2', title: 'Manajemen Proyek', size: '1.1 MB' },
    { id: '3', title: 'Praktikum Pemrograman ', size: '3.5 MB' },
    { id: '4', title: 'Sejarah Sistem Informasi', size: '0.8 MB' },
  ]);

  const downloadMaterial = (item) => {
    // Here you would implement the actual download logic
    alert(`Mengunduh ${item.title}...`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.materialItem}>
      <View style={styles.materialInfo}>
        <Text style={styles.materialTitle}>{item.title}</Text>
        <Text style={styles.materialSize}>{item.size}</Text>
      </View>
      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => downloadMaterial(item)}
      >
        <Text style={styles.downloadButtonText}>Unduh</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Materi Tersedia</Text>
      <FlatList
        data={materials}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  materialItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  materialSize: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
