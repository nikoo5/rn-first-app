import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';
import GoalInput from './assets/components/GoalInput';
import GoalItem from './assets/components/GoalItem';

export default function App() {  
  const [goalsList, setGoalsList] = useState([
    { id: Math.random().toString(), description: "Goal Nº 1", date: "01/01/1900" },
    { id: Math.random().toString(), description: "Goal Nº 2", date: "01/01/1900" },
    { id: Math.random().toString(), description: "Goal Nº 3", date: "01/01/1900" },
    { id: Math.random().toString(), description: "Goal Nº 4", date: "01/01/1900" },
    { id: Math.random().toString(), description: "Goal Nº 5", date: "01/01/1900" },
  ]);

  const addGoalHandler = (inputGoal) => {
    if(inputGoal != "") {
      setGoalsList((goalsList) => [
        ...goalsList,
        {
          id: Math.random().toString(),
          description: inputGoal,
          date: getCurrentDate(),
        },
      ]);
    }
  };

  const removeGoalHandler = (id) => {
    setGoalsList(goalsList => {
      return goalsList.filter(goal => goal.id != id);
    })
  }
  
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return (date < 10 ? "0" + date : date) + "/" + (month < 10 ? "0" + month : month) + "/" + year;
  }; 

  return (
    <View style={styles.screen}>
      <StatusBar />
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        style={styles.listContainer}
        keyExtractor={(item, index) => item.id}
        data={goalsList}
        renderItem={(goal) => (
          <GoalItem
            id={goal.item.id}
            description={goal.item.description}
            date={goal.item.date}
            onRemoveGoal={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  
  listContainer: {
    marginTop: 10,
  }
  
});
