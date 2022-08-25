import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const Register = () => {
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
        <TextInput placeholder="Name" style={styles.Input} />
        <TextInput placeholder="Password" style={styles.Input} />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 25,
        }}
      >
        <Pressable style={[styles.CreateAccountButton, styles.ButtonGroupItems]}>
          <Text>Create an Account</Text>
        </Pressable>
        <Pressable style={styles.ButtonGroupItems}>
          <Text>Already have an account?</Text>
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
  CreateAccountButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f2d264",
    borderRadius: 7,
    width: "100%",
  },
  ButtonGroupItems: {
    marginVertical: 10,
  },
});
