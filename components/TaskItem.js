import { StyleSheet, View, Text, Pressable } from "react-native";

const TaskItem = ({ text, onRemoveTask, id }) => {
    return (
        <Pressable
            onPress={onRemoveTask.bind(this, id)}
            android_ripple={{ color: 'red' }}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.taskItem}>
                <Text style={styles.taskText}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    taskItem: {
        margin: 8,
        padding: 8,
        backgroundColor: 'blue',
        borderRadius: 8,
    },
    pressedItem: {
        opacity: 0.5
    },
    taskText: {
        color: 'white'
    }
})