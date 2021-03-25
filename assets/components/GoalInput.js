import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = (props) => {
    const [inputGoal, setInputGoal] = useState("");

    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal Description"
          style={styles.input}
          onChangeText={setInputGoal}
          value={inputGoal}
        />
        <Button
          title="ADD GOAL"
          onPress={() => {
            props.onAddGoal(inputGoal);
            setInputGoal("");
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderColor: "#555555",
    borderBottomWidth: 2,
    padding: 10,
  }
});

export default GoalInput;