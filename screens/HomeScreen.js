import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const buttonAnimation = new Animated.Value(0);
    const textAnimation = new Animated.Value(0); // New animated value for text animation

    useEffect(() => {
        startAnimation(); // Start animations when the component mounts
    }, []);

    const startAnimation = () => {
        // Use parallel to start animations simultaneously
        Animated.parallel([
            Animated.timing(buttonAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(textAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start();
    };

    const buttonStyle = {
        ...styles.button,
        borderColor: buttonAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#FFF', '#FF5733']
        })
    };

    const textStyle = {
        ...styles.intro,
        opacity: textAnimation // Apply opacity animation to the text
    };

    return (
        <View style={styles.container}>
            <View style={styles.introContainer}>
                <Text style={styles.heading}>Welcome to My Portfolio</Text>
                {/* Apply animation to the text */}
                <Animated.Text style={textStyle}>
                    I am a Full Stack Web Developer
                </Animated.Text>
                <Text style={styles.intro}>
                    Skilled in front-end and back-end technologies, proficient in building responsive web interfaces and robust server-side applications using a variety of programming languages, frameworks, and cloud platforms.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={buttonStyle}
                    onPress={() => {
                        startAnimation();
                        navigation.navigate('Projects');
                    }}>
                    <Text style={styles.buttonText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttonStyle}
                    onPress={() => {
                        startAnimation();
                        navigation.navigate('Contact');
                    }}>
                    <Text style={styles.buttonText}>Contact Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C0051',
    },
    introContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    intro: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        color: '#ddd',
        fontSize: 20
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        width: 200,
        paddingVertical: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'tomato',
    },
});

export default HomeScreen;
