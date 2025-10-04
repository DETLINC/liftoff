import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/ui/Header";
import GradientButton from "../../components/ui/GradientButton";
import { router } from "expo-router";
import AddIcon from "../../components/icons/AddIcon";
import ProductContainerCart from "../../components/ui/ProductContainerCart";
import SubtractContainer from "../../components/ui/SubtractContainer";
import SubtractIcon from "../../components/icons/SubtractIcon";
import SlideButtonTwo from "../../components/ui/SlideButton";

const Cart = () => {
  const { items, updateQuantity, subTotal, deliveryFee, discount, total } =
    useCart();

  const renderItem = ({ item }: { item: (typeof items)[0] }) => (
    <View className="flex-row items-center mb-4 pb-5 border-b border-gray-700">
      <View className="w-[100px] h-[90px] rounded-3xl mr-4">
        <ProductContainerCart imageUrl={item.image} />
      </View>

      <View className="flex-1">
        <Text className="text-white text-lg mb-2 font-poppins-bold opacity-[0.87]">
          {item.name}
        </Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-[#34C8E8] font-poppins-regular text-sm">
            $ {item.price}
          </Text>

          <View className="bg-[#2D3748] flex-row items-center gap-2 rounded-xl px-1">
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <SubtractContainer>
                <SubtractIcon />
              </SubtractContainer>
            </TouchableOpacity>

            <Text className="text-white font-poppins-semibold text-sm w-8 text-center">
              {item.quantity}
            </Text>

            <GradientButton
              size={35}
              onPress={() => updateQuantity(item.id, item.quantity + 1)}
              animated
            >
              <AddIcon />
            </GradientButton>
          </View>
        </View>
      </View>
    </View>
  );

  const EmptyCart = () => (
    <View className="h-[300px] items-center justify-center">
      <Text className="text-gray-400 text-xl font-poppins-medium">
        Your cart is empty
      </Text>
    </View>
  );

  return (
    <View className="bg-background flex-1">
      <View className="px-2">
        <Header
          showBack
          title="My Shopping Cart"
          onBackPress={() => router.back()}
        />
      </View>

      {/* Products List - Scrollable */}
      <View className="flex-[.9]">
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyCart}
        />
      </View>

      {/* Fixed Footer - Not Scrollable */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="px-5 pb-8 bottom-10"
      >
        {/* Promo Code */}
        <View className="bg-background pt-2">
          <Text className="text-gray-400 text-center text-sm mb-6 font-poppins-regular">
            Your cart qualifies for free shipping
          </Text>
        </View>
        <View className="flex-row items-center mb-8">
          <View className="flex-1 rounded-2xl">
            <View className="shadow-2xl shadow-black px-5 py-4">
              <TextInput
                placeholder="Bike30"
                placeholderTextColor="#718096"
                className="text-white text-base"
              />
              <View
                className="absolute inset-0 rounded-2xl border-[1px] border-black/30 p-4"
                pointerEvents="none"
                style={{
                  shadowColor: "#242C3B",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                }}
              />
            </View>
          </View>

          <GradientButton
            onPress={() => {}}
            style={{
              width: 114,
              height: 44,
            }}
          >
            <Text className="text-white font-semibold text-base">Apply</Text>
          </GradientButton>
        </View>

        {/* Price Breakdown */}
        <View className="mb-4">
          <View className="flex-row justify-between mb-3">
            <Text className="text-white text-base">Subtotal:</Text>
            <Text className="text-white text-base font-medium">
              ${subTotal}
            </Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-white text-base">Delivery Fee:</Text>
            <Text className="text-white text-base font-medium">
              ${deliveryFee}
            </Text>
          </View>

          <View className="flex-row justify-between mb-4">
            <Text className="text-white text-base">Discount:</Text>
            <Text className="text-white text-base font-medium">
              {(discount * 100).toFixed(0)}%
            </Text>
          </View>

          <View className="flex-row justify-between items-center pt-4 border-t border-gray-700">
            <Text className="text-white text-xl font-semibold">Total:</Text>
            <Text className="text-[#34C8E8] text-2xl font-bold">
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>

        <View className="flex-1 items-center">
          <SlideButtonTwo
            onComplete={() => {
              Alert.alert("Purchase completed.");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Cart;
