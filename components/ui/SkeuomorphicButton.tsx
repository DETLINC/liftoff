import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

interface SkeuomorphicButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  size?: number;
}

const SkeuomorphicButton: React.FC<SkeuomorphicButtonProps> = ({
  title,
  isActive,
  onPress,
  size = 8,
}) => {
  const [isDown, setDown] = useState(false);

  const gradColors = isActive
    ? ["#3CA4EB", "#4286EE"]
    : ["rgba(255, 255, 255, 0.6)"];

  const buttonFaceStyle = {
    borderRadius: size * 1.5,
    paddingVertical: size * 1.75,
    paddingHorizontal: size * 2,
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.buttonOuter,
          {
            shadowOffset: { width: isActive ? 2 : 4, height: isActive ? 2 : 4 },
            shadowOpacity: isActive ? 0.3 : 0.2,
            shadowRadius: isActive ? 4 : 9,
          },
        ]}
      >
        <View
          style={[
            styles.buttonInner,
            {
              shadowOffset: {
                width: isActive ? -1 : -3,
                height: isActive ? -1 : -3,
              },
              shadowOpacity: isActive ? 0.5 : 1,
              shadowRadius: isActive ? 20 : 12,
            },
          ]}
        >
          <MaskedView
            maskElement={
              <Text className="text-lg font-poppins-bold text-center text-white ">
                {title}
              </Text>
            }
          >
            <LinearGradient
              colors={gradColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text
                className={`text-sm font-poppins-bold text-center text-white`}
                style={{ opacity: 0 }}
              >
                {title}
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonOuter: {
    flex: 1,
    borderRadius: 12,
    shadowColor: "#000",
    elevation: 8,
    shadowOpacity: 0.8,
  },
  buttonInner: {
    borderRadius: 12,
    shadowColor: "#38445A",
    backgroundColor: "#38445A",
    padding: 20,
  },
  buttonFace: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Poppins-Bold", // Add if you have Poppins
  },
});
export default SkeuomorphicButton;
