import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { io } from "socket.io-client";
import { COLORS } from "../constants/colors";
const ChatsScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: true, text: "Hello, how are you?" },
    { id: 2, sender: false, text: "Hi! I'm good, thanks. How about you?" },
    // Add more dummy messages as needed
  ]);

  const socket = io("http://localhost:8000"); // Replace with your server URL

  const [newMessage, setNewMessage] = useState("");
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    // Listen for incoming chat messages
    socket.on("chat message", (message) => {
      console.log("Received message:", message); // Log the message to the console
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
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: true, text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={item.sender ? styles.senderContainer : styles.receiverContainer}
    >
      <View style={item.sender ? styles.senderMessage : styles.receiverMessage}>
        <Text
          style={
            item.sender ? styles.senderMessageText : styles.receiverMessageText
          }
        >
          {item.text}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { marginTop: statusBarHeight }]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkGray} />

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageContainer}
        inverted={true} // Set inverted to true to display messages at the bottom
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputMessage}
          placeholder="message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholderTextColor={COLORS.lightGray}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGray,
  },
  messageContainer: {
    flexGrow: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  senderContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  receiverContainer: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  senderMessage: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    padding: 8,
  },
  receiverMessage: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 8,
  },

  senderMessageText: {
    color: COLORS.lightGray,
  },

  receiverMessageText: {
    color: COLORS.darkGray,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: COLORS.lightCharcol,
  },

  inputMessage: {
    flex: 1,
    height: 45,
    fontSize: 16,
    marginRight: 8,
    borderRadius: 16,
    paddingHorizontal: 16,
    color: COLORS.lightGray,
    backgroundColor: COLORS.charcol,
  },

  sendButton: {
    backgroundColor: COLORS.green,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontWeight: "bold",
  },

  sendButtonText: {
    color: COLORS.lightGray,
  },
});

export default ChatsScreen;
