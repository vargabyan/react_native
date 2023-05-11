import React from "react";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
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

const ToDOList = ({ navigation }) => {
  const { container, doDoContainer, doDoText, verticalLine } = styles;

  const handlePress = (id) => {
    navigation.navigate(`tasks-list`);
  };

  return (
    <ScrollView style={container}>
      {data.map((toDu) => (
        <TouchableHighlight key={toDu.id} onPress={() => handlePress(toDu.id)}>
          <View style={doDoContainer[toDu.color]}>
            <View style={{ flex: 1, maxWidth: 30 }}>
              <Text
                style={{ fontSize: 24, fontWeight: 600, alignSelf: "center" }}
              >
                12
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: 600, alignSelf: "center" }}
              >
                30
              </Text>
              <View style={verticalLine} />
              <Text
                style={{ fontSize: 24, fontWeight: 600, alignSelf: "center" }}
              >
                13
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: 600, alignSelf: "center" }}
              >
                30
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", flex: 2, paddingHorizontal: 16 }}
            >
              <Text style={doDoText}>{toDu.title.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

export default ToDOList;
