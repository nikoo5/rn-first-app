import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
      <TouchableOpacity activeOpacity={0.75} onLongPress={props.onRemoveGoal.bind(this, props.id)}>
        <View style={styles.listItem}>
          <View style={styles.textDate}>
            <Text style={styles.textDate}>{props.date}</Text>
          </View>
          <View style={styles.textDescription}>
            <Text style={styles.textDescription}>{props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#dddddd",
    marginBottom: 10,
    flexDirection: "column",
  },
  textDate: {
    fontSize: 10,
    alignItems: "flex-end",
  },
  textDescription: {},
});

export default GoalItem;