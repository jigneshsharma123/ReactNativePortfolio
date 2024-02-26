import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Animated, Linking } from 'react-native';

const ProjectsScreen = () => {
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(50)).current;

    const projects = [
        { id: '1', title: 'NativeTHandler', description: 'NativeTHandler is a android application which allow a user to add the new task and perform the CURD operation on it.', githubLink: 'https://github.com/jigneshsharma123/ReactTodo' },
        { id: '2', title: 'BharatNews', description: 'NewsPaperApp is a Android Application which mimic like a traditional NewsPaper having feature Search Articles, Articles Details and Filter the content', githubLink: 'https://github.com/jigneshsharma123/NewAppReactNative' },
        { id: '3', title: 'FireStock', description: 'FireStock is a Web Application that is designed in a way that the user can upload the image on it.', githubLink: 'https://github.com/jigneshsharma123/fireStockReactApp' }
    ];

    const renderProject = ({ item }) => (
        <Animated.View style={[styles.projectCard, { opacity: opacityAnim, transform: [{ translateY: translateYAnim }] }]}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button title="GitHub" onPress={() => handleGitHubPress(item.githubLink)} />
        </Animated.View>
    );

    const handleGitHubPress = (githubLink) => {
        Linking.openURL(githubLink);
    };

    useEffect(() => {
        Animated.stagger(100, [
            Animated.timing( // Animate opacity
                opacityAnim,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ),
            Animated.spring( // Animate translateY
                translateYAnim,
                {
                    toValue: 0,
                    speed: 1,
                    bounciness: 10,
                    useNativeDriver: true
                }
            )
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Projects</Text>
            <FlatList
                data={projects}
                renderItem={renderProject}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.projectList}
                showsVerticalScrollIndicator={false}
            />
            <SkillSection />
        </View>
    );
};

const SkillSection = () => {
    const skills = ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Git', 'mongoose', 'JavaScript', 'DSA', 'SQL', 'CRON'];

    return (
        <View style={styles.skillSectionContainer}>
            <Text style={styles.skillSectionTitle}>Skills</Text>
            <View style={styles.skillTagsContainer}>
                {skills.map((skill, index) => (
                    <Text key={index} style={styles.skillTag}>{skill}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C0051',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 38
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        marginTop: 15
    },
    projectList: {
        alignItems: 'center',
        flexGrow: 1,
    },
    projectCard: {
        backgroundColor: 'violet',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    skillSectionContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    skillSectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    skillTagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5
    },
    skillTag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        margin: 5,
        color: 'white',
    },
});

export default ProjectsScreen;
