import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 16,
        }}
      >
        <View>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              flexDirection: "row",
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 38,
                fontWeight: 700,
              }}
            >
              A
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 600,
            }}
          >
            +
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "white", fontSize: 16, paddingVertical: 8 }}>
          MONDAY 16
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", fontSize: 38 }}>TODAY</Text>
        <View
          style={{
            height: 8,
            width: 8,
            borderRadius: 50,
            backgroundColor: "#B32580",
            alignSelf: "center",
            marginHorizontal: 8,
          }}
        />
        <Text style={{ color: "#949494", fontSize: 38 }}>17 18 19 20</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
