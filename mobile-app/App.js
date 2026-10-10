import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('Hello! I am Jarvis. Ask me something.');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setReply(data.reply || 'No response');
    } catch (error) {
      setReply('Could not reach the backend. Start the FastAPI server first.');
    } finally {
      setMessage('');
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Jarvis</Text>
        <Text style={styles.status}>Online</Text>
      </View>

      <ScrollView style={styles.chatBox}>
        <Text style={styles.reply}>{reply}</Text>
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Ask Jarvis..."
          placeholderTextColor="#8aa3d8"
        />
        <Pressable style={styles.button} onPress={sendMessage} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? '...' : 'Send'}</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 32,
    color: '#eef4ff',
    fontWeight: '700',
  },
  status: {
    color: '#7ef0a4',
    fontSize: 16,
    fontWeight: '700',
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },
  reply: {
    color: '#edf6ff',
    fontSize: 16,
    lineHeight: 24,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#23314d',
    color: '#edf6ff',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#3e82ff',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
