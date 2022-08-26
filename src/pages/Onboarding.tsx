import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Easing,
  Animated,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet from "@gorhom/bottom-sheet";
import Register from "../components/Register";
import Handle from "../components/BottomSheet/Handle";

const Onboarding = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "85%"], []);

  const animatedValue = new Animated.Value(0);

  const handleOnPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(2000),
        Animated.timing(animatedValue, {
          toValue: 2,
          duration: 750,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }),
    [animatedValue];

  return (
    <View style={styles.PageContainer}>
      <View style={styles.HeroImageContainer}>
        <Animated.Text
          style={[
            styles.HeroImage,
            {
              transform: [
                {
                  rotate: animatedValue.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: ["0deg", "30deg", "0deg"],
                  }),
                },
              ],
            },
          ]}
        >
          👋
        </Animated.Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Hey! Welcome</Text>
        <Text style={styles.Subtitle}>
          You are clicks away from setting up your own personal weather station
        </Text>
      </View>
      <View style={styles.ButtonGroup}>
        <Pressable style={styles.Button} onPress={handleOnPress}>
          <Text style={styles.ButtonText}>Get Started</Text>
        </Pressable>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        handleComponent={Handle}
        style={{
          // https://github.com/gorhom/react-native-bottom-sheet/issues/734#issuecomment-1150977998
          // https://10015.io/tools/react-native-shadow-generator
          backgroundColor: "rgba(255, 255, 255,0)",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.25,
          shadowRadius: 20.0,
          elevation: 24,
        }}
      >
        <Register />
      </BottomSheet>
    </View>
  );
};

export default Onboarding;

const gap = 20;

const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingLeft: 25,
    paddingRight: 25,
  },
  HeroImageContainer: {
    marginTop: gap,
    marginBottom: gap,
  },
  HeroImage: {
    fontSize: 100,
  },
  TextContainer: {
    alignItems: "center",
    marginTop: gap,
    marginBottom: gap,
  },
  Title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#05101a",
    marginBottom: gap / 4,
  },
  Subtitle: {
    fontWeight: "400",
    fontSize: 14,
    color: "#05101a",
    opacity: 0.5,
    textAlign: "center",
    marginTop: gap / 4,
  },
  ButtonGroup: {
    width: "100%",
    marginTop: gap,
    marginBottom: gap,
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f2d264",
    borderRadius: 7,
  },
  ButtonText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#05101a",
  },
});
