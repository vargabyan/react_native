import React from "react";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

const data = [
  {
    id: "1",
    title: "desing meeting",
    color: "a",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
  {
    id: "2",
    title: "desing meeting",
    color: "b",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
  {
    id: "3",
    title: "desing meeting",
    color: "c",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
  {
    id: "4",
    title: "desing meeting",
    color: "d",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
  {
    id: "5",
    title: "desing meeting",
    color: "a",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
  {
    id: "6",
    title: "desing meeting",
    color: "b",
    time: {
      befor: "12:30",
      to: "13:30",
    },
  },
];

const TasksList = ({ navigation }) => {
  const { container, taskContainer, taskText } = styles;

  const handlePress = (id) => {};

  return (
    <ScrollView style={container}>
      <View style={{ flexDirection: "row", flex: 2, paddingHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 120,
            fontWeight: 500,
          }}
        >
          TASKS
        </Text>
      </View>
      {data.map((toDu) => (
        <TouchableHighlight key={toDu.id} onPress={() => handlePress(toDu.id)}>
          <View style={taskContainer[toDu.color]}>
            <View style={{ flex: 1, maxWidth: 30 }}>
              <BouncyCheckbox />
            </View>
            <View
              style={{ flexDirection: "row", flex: 2, paddingHorizontal: 16 }}
            >
              <Text style={taskText}>{toDu.title.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

export default TasksList;
