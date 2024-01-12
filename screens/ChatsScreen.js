import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { io } from 'socket.io-client';
const ChatsScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: true, text: "Hello, how are you?" },
    { id: 2, sender: false, text: "Hi! I'm good, thanks. How about you?" },
    // Add more dummy messages as needed
  ]);

  const socket = io('http://localhost:8000'); // Replace with your server URL

  const [newMessage, setNewMessage] = useState("");
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', (message) => {
      console.log('Received message:', message); // Log the message to the console
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
 
   
  useEffect(() => {
    // Get the status bar height
    const getStatusBarHeight = async () => {
      const height = StatusBar.currentHeight || 0;
      setStatusBarHeight(height);
    };

    getStatusBarHeight();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, sender: true, text: newMessage }]);
      setNewMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.sender ? styles.senderContainer : styles.receiverContainer}>
      <View style={item.sender ? styles.senderMessage : styles.receiverMessage}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333333",
    },
    messageContainer: {
      flexGrow: 1,
      flexDirection: 'column',
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    senderContainer: {
      alignSelf: 'flex-end',
      marginBottom: 8,
    },
    receiverContainer: {
      alignSelf: 'flex-start',
      marginBottom: 8,
    },
    senderMessage: {
      backgroundColor: "#3498db",
      borderRadius: 8,
      padding: 8,
    },
    receiverMessage: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      padding: 8,
    },
    messageText: {
      color: "#000000",
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderTopWidth: 1,
      borderTopColor: "#cccccc",
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: "#f2f2f2",
      borderRadius: 20,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    sendButton: {
      backgroundColor: "#3498db",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    sendButtonText: {
      color: "#ffffff",
    },
  });

  return (
    <SafeAreaView style={[styles.container, { marginTop: statusBarHeight }]}>
      <StatusBar barStyle="light-content" backgroundColor="#333333" />

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageContainer}
        inverted={true} // Set inverted to true to display messages at the bottom
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
