import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'

import { ThemeContext } from '../themeContext'

// dummy data
const USERS = [
    {
        user: 'cleverquazi',
        image: 'data:image/jpeg;base64,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'
    },
    {
        user: 'theqazman',
        image: 'data:image/jpeg;base64,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'
    },
    {
        user: 'sugashaw',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PR2ZAzwhWY7orX3aNxJE67X5TaAjAN7H_g&usqp=CAU'
    },
    {
        user: 'oggy',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPEMT1O67rK1vm-LfTOAU28Xkwdb2Vx4Ekw&usqp=CAU'
    },
    {
        user: 'chuck',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvehrvt2qOstfLPe5HYCRoTUsvIv6QHVHxg&usqp=CAU'
    },
    {
        user: 'jack',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQqK6WAQw8doLm7W9VdVT62laX92kamhsGA&usqp=CAU'
    },
    {
        user: 'cosmos',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz233wCa6YyXkhXlvVdymPHSnArEouMgvbwQ&usqp=CAU'
    }
]

const Stories = () => {
    const {theme} = React.useContext(ThemeContext)
    const themeStyle = {
        color: theme === "dark" ? '#fff' : '#000',
    }

    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            {
                USERS.map((user, index) => {
                    return (
                        <View key={index} style={styles.storyContainer}>
                            <View style={styles.story}>
                                <Image style={styles.storyImg} resizeMode="cover" source={{uri: user.image}}/>
                            </View>
                            <Text style={[styles.userName, themeStyle]}>{user.user.length > 9 ? user.user.slice(0, 8) + '...': user.user}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        padding: 10,
        flexDirection: "row",
    },
    storyContainer: {
        width: 90,
        alignItems: "center"
    },
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: "hidden",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "red",
    },
    storyImg: {
        width: "100%",
        height: 80,
    },
    userName: {
        textAlign: "center",
    }
})