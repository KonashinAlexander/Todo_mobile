import { TextInput, Button, StyleSheet, View, Modal, Image } from 'react-native';
import { useState } from 'react';


const TaskInput = ({ placeholder, onPress, title, visible, onCancel }) => {
    const [task, setTask] = useState('')

    const handleInputChange = (inputText) => {
        setTask(inputText)
    }

    const handleAddTask = () => {
        onPress(task);
        setTask('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    onChangeText={handleInputChange}
                    value={task}
                    placeholderTextColor='white'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={title}
                            onPress={handleAddTask}
                        // color={'blue'}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color={'red'}
                            onPress={onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default TaskInput

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        padding: 8,
        color: 'white',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        backgroundColor: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        padding: 16,
        borderRadius: 5
    },

})