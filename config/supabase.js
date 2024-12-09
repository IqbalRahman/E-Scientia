import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

// Replace these with your Supabase project credentials
const supabaseUrl = 'https://casxplpwwryciizkjfwd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhc3hwbHB3d3J5Y2lpemtqZndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTYyMzksImV4cCI6MjA0ODg5MjIzOX0.FIvkj_7OY4ft7IIF79s-6bEh-mpvJzX6loy09V4KsoY';

const options = {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  db: {
    schema: 'public',
  }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);

// Helper functions for file operations
export const uploadFile = async (file, fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from('study-materials')
      .upload(`public/${fileName}`, file, {
        contentType: 'application/octet-stream',
        cacheControl: '3600',
        upsert: true
      });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error uploading file:', error.message);
    throw error;
  }
};

export const downloadFile = async (filePath) => {
  try {
    const { data, error } = await supabase.storage
      .from('study-materials')
      .download(filePath);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error downloading file:', error.message);
    throw error;
  }
};

export const listFiles = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('study-materials')
      .list('public');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error listing files:', error.message);
    throw error;
  }
};
