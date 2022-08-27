import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

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
        <TextInput
          mode="flat"
          placeholder="Name"
          style={{
            backgroundColor: "#FFFFFF",
          }}
          underlineColor="#FFFFFF"
          activeUnderlineColor="#F2D264"
          spellCheck={false}
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
          style={[styles.CreateAccountButton, styles.ButtonGroupItems]}
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
  CreateAccountButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f2d264",
    borderRadius: 7,
    width: "100%",
  },
  ButtonText: {
    fontWeight: "700",
  },
  LoginHrefText: {
    color: "#7B7F87",
  },
  ButtonGroupItems: {
    marginVertical: 10,
  },
});
