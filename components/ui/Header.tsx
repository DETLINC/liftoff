import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import SearchIcon from "../icons/searchIcon";
import ArrowBack from "../icons/ArrowBack";
import GradientButton from "./GradientButton";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showSearch?: boolean;
  onBackPress?: () => void;
  onSearchPress?: () => void;
}

const Header = ({
  title,
  showBack = false,
  showSearch = false,
  onBackPress,
  onSearchPress,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top + 1, paddingBottom: 32 }}>
      <View className="flex-row items-center justify-between w-full">
        {/* Left side - Back button or spacer */}
        {showBack && (
          <GradientButton onPress={onBackPress}>
            <ArrowBack />
          </GradientButton>
        )}
        {/* Center - Title */}
        <Text
          className={`text-white text-xl flex-1 font-poppins-bold  ${showBack && "text-center"}`}
        >
          {title}
        </Text>

        {/* Right side - Search button or spacer */}
        {showSearch && (
          <GradientButton onPress={onSearchPress}>
            <SearchIcon />
          </GradientButton>
        )}
      </View>
    </View>
  );
};

export default Header;
