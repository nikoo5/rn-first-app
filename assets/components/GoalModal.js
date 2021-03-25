import React from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';

const GoalModal = (props) => {
    return (
      <Modal visible={props.visible} animationType="fade" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View>
              <Text>Are you sure you want to remove this Goal?</Text>
            </View>
            <View style={styles.modalBox}>
              <View style={styles.modalBoxContainer}>
                <Button
                  title="Cancel"
                  onPress={props.onCancel.bind(this, false)}
                />
                <Button
                  title="Remove"
                  onPress={props.onRemove.bind(this, props.id)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000CC",
  },
  modalContainer: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  modalBox: {
    marginTop: 15,
    flexDirection: "row",
  },
  modalBoxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalModal;