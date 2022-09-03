import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Register = () => {
  const [name, setName] = useState<string>("");

  interface Nav {
    navigate: (value: string) => void;
  }

  const { navigate } = useNavigation<Nav>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAFAFA",
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <View style={{ marginVertical: 25 }}>
        <Text style={styles.Title}>Create an account</Text>
      </View>
      <View style={{ width: "100%", marginVertical: 25 }}>
        <TextInput
          mode="flat"
          placeholder="Name"
          style={{
            backgroundColor: "#FFFFFF",
          }}
          underlineColor="#FFFFFF"
          activeUnderlineColor="#F2D264"
          spellCheck={false}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 25,
        }}
      >
        <Pressable
          style={
            name.length >= 3
              ? [styles.Button, styles.ButtonEnabled, styles.ButtonGroupItems]
              : [styles.Button, styles.ButtonDisabled, styles.ButtonGroupItems]
          }
          disabled={name.length < 3}
          onPress={() => navigate("Homescreen")}
        >
          <Text style={styles.ButtonText}>Create an Account</Text>
        </Pressable>
        <Pressable style={styles.ButtonGroupItems}>
          <Text style={styles.LoginHrefText}>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  Title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#05101a",
  },
  Input: {
    fontSize: 14,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 7,
    width: "100%",
  },
  ButtonEnabled: {
    backgroundColor: "#f2d264",
  },
  ButtonDisabled: {
    backgroundColor: "#d1d6d9",
  },
  ButtonText: {
    fontWeight: "700",
  },
  LoginHrefText: {
    color: "#7b7F87",
  },
  ButtonGroupItems: {
    marginVertical: 10,
  },
});
