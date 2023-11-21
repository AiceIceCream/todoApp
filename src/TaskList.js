import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';

const CustomButton = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[{ padding: 5, height: 30, width: 100, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }, style]}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (task) {
      if (editIndex > -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');

      Alert.alert('Task Added', 'Your task has been added successfully!', [{ text: 'OK' }]);
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setTask(tasks[index]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Input your task..."
        style={{ borderWidth: 2, margin: 5, padding: 5, width: 300, borderRadius: 20 }}
      />
      <CustomButton
        title={editIndex > -1 ? 'Update Task' : 'Add Task'}
        onPress={addTask}
        style={{ margin: 5 }}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {editIndex === index ? (
              <TextInput
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder="Task..."
              />
            ) : (
              <Text style={{ textAlign: 'center', backgroundColor: '#5599F0', borderRadius: 5, padding: 5, margin: 10 }}>{item}</Text>
            )}
            <View style={{ flexDirection: 'row' }}>
              <CustomButton
                title={editIndex === index ? 'Save' : 'Edit'}
                onPress={() => (editIndex === index ? addTask() : editTask(index))}
                style={{ margin: 3, padding: 2, width:50 }}
              />
              <CustomButton
                title="Remove"
                onPress={() => removeTask(index)}
                style={{ margin: 3, padding:2, width: 70}}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TaskList;
