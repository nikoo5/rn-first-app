import React from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';

const GoalModal = (props) => {
    return (
      <Modal visible={props.visible} animationType="fade" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalText}>
            <View>
              <Text>Are you sure you want to remove this Goal?</Text>
            </View>
            <View style={styles.modalButtons}>
              <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    onPress={props.onCancel.bind(this, false)}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Remove"
                    onPress={props.onRemove.bind(this, props.id)}
                    color="red"
                  />
                </View>
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
  modalText: {
    maxWidth: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  modalButtons: {
    marginTop: 15,
    flexDirection: "row",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
      width: "30%"
  }
});

export default GoalModal;