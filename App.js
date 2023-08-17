import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList(currentTaskList => [
      ...currentTaskList,
      { text: task, id: Math.random().toString() }
    ])
    handleNewTask()
  }

  const handleRemoveTask = (id) => {
    setTaskList(currentTaskList => {
      return currentTaskList.filter(task => task.id !== id)
    })
  }

  const handleNewTask = () => {
    setShowModal(!showModal)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button
          title='Add new task'
          onPress={handleNewTask}
        // color='blue'
        />
      </View>
      <TaskInput
        placeholder='A new task'
        title='Add a task'
        onPress={handleAddTask}
        visible={showModal}
        onCancel={handleNewTask}
      />
      <View style={styles.taskContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={taskList}
          renderItem={itemData => <TaskItem
            text={itemData.item.text}
            onRemoveTask={handleRemoveTask}
            id={itemData.item.id}
          />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  taskContainer: {
    flex: 9
  },
  button: {

  }
});
