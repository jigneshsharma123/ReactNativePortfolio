import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ContactScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        setName('');
        setEmail('');
        setMessage('');

        Alert.alert('Success', 'Your message has been sent successfully!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact Us!</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                placeholderTextColor="white" // Set placeholder text color to white
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                placeholderTextColor="white" // Set placeholder text color to white
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Your Message"
                placeholderTextColor="white" // Set placeholder text color to white
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={text => setMessage(text)}
            />
            <Button title="Send Message" onPress={handleSendMessage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#2C0051',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white',
    },
    messageInput: {
        height: 100,
        color: 'white',
    },
});
