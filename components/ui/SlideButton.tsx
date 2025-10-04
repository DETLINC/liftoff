import React, { useState } from "react";
import {
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";

import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Gesture } from "react-native-gesture-handler";
import ArrowRight from "../icons/ArrowRight";
import GradientButton from "./GradientButton";

const BUTTON_WIDTH = 174;
const BUTTON_HEIGHT = 44;
const SWIPEABLE_SIZE = 36;
const SWIPE_THRESHOLD = BUTTON_WIDTH / 2;

const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2.3 * BUTTON_PADDING;
BUTTON_WIDTH - 1.7 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

interface SlideButtonProps {
  onComplete: () => void;
}

const SlideButtonTwo = ({ onComplete }: SlideButtonProps) => {
  const [showDone, setShowDone] = useState(false);

  const buttonVal = useSharedValue(0);

  const handleComplete = () => {
    console.log("Handled completed purchase!");
    setShowDone(true);
    onComplete?.();
  };

  const handleGesture = Gesture.Pan()
    .onUpdate((e) => {
      const clampedTranslation = Math.max(
        0,
        Math.min(e.translationX, BUTTON_WIDTH - SWIPEABLE_SIZE - 10)
      );
      buttonVal.value = clampedTranslation;

      // Change text at halfway point
      if (clampedTranslation >= SWIPE_THRESHOLD && !showDone) {
        runOnJS(setShowDone)(true);
      } else if (clampedTranslation < SWIPE_THRESHOLD && showDone) {
        runOnJS(setShowDone)(false);
      }
    })
    .onEnd((e) => {
      if (e.translationX >= BUTTON_WIDTH - SWIPEABLE_SIZE - 20) {
        buttonVal.value = withTiming(
          BUTTON_WIDTH - SWIPEABLE_SIZE - 10,
          { duration: 200 },
          () => runOnJS(handleComplete)()
        );
      } else {
        buttonVal.value = withTiming(0, { duration: 200 });
        runOnJS(setShowDone)(false);
      }
    });

  const swipeableStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: buttonVal.value }],
  }));

  const checkoutTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      buttonVal.value,
      [0, SWIPE_THRESHOLD],
      [1, 0],
      Extrapolate.CLAMP
    ),
  }));

  const doneTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      buttonVal.value,
      [SWIPE_THRESHOLD - 20, SWIPE_THRESHOLD],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <GestureHandlerRootView>
      <View className="h-11 w-[174px] bg-[#2D3748] rounded-xl items-center justify-center">
        <GestureDetector gesture={handleGesture}>
          <Animated.View
            className="absolute left-1 z-10 items-center justify-center"
            style={swipeableStyle}
          >
            {/* <ArrowRight /> */}
            <GradientButton>
              <ArrowRight />
            </GradientButton>
          </Animated.View>
        </GestureDetector>

        <Animated.Text
          className="text-white font-poppins-medium opacity-60 text-base absolute z-[1]"
          style={checkoutTextStyle}
        >
          Checkout
        </Animated.Text>

        <Animated.Text
          className="text-white font-poppins-medium text-base absolute z-[1] opacity-60"
          style={[doneTextStyle]}
        >
          Done!
        </Animated.Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default SlideButtonTwo;
