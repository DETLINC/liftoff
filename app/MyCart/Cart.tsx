import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/ui/Header";
import GradientButton from "../../components/ui/GradientButton";
import { router } from "expo-router";
import AddIcon from "../../components/icons/AddIcon";
import SubtractIcon from "../../components/icons/SubtractIcon";
import ProductContainerCart from "../../components/ui/ProductContainerCart";
import SubtractContainer from "../../components/ui/SubtractContainer";

const Cart = () => {
  const { items, updateQuantity, subtotal, deliveryFee, discount, total } =
    useCart();

  const renderItem = ({ item }: { item: (typeof items)[0] }) => (
    <View className="flex-row items-center mb-5 pb-5 border-b border-gray-700">
      {/* Product Image */}
      <View className="w-[100px] h-[90px] bg-[#4A5568] rounded-3xl mr-4 items-center justify-center">
        <View>
          <ProductContainerCart imageUrl={item.image} />
        </View>
      </View>

      {/* Product Info */}
      <View className="flex-1">
        <Text className="text-white text-lg mb-2 font-poppins-bold">
          {item.name}
        </Text>
        <Text className="text-[#34C8E8] font-poppins-regular text-lg">
          ${" "}
          {item.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </Text>
      </View>

      {/* Quantity Controls */}
      <View className="flex-row items-center gap-2 shadow-inner drop-shadow-2xl rounded-lg"
      style = {{
        
      }}
      >
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
  );

  const ListFooterComponent = () => (
    <>
      {/* Free Shipping Banner */}
      <Text className="text-gray-400 text-center text-sm mb-6 mt-4 font-poppins-regular">
        Your cart qualifies for free shipping
      </Text>

      {/* Promo Code */}
      <View className="flex-row items-center gap-3 mb-8">
        <View className="flex-1 bg-[#2D3748] rounded-2xl px-5 py-4">
          <TextInput
            placeholder="Bike30"
            placeholderTextColor="#718096"
            className="text-white text-base"
          />
        </View>

        <GradientButton
          onPress={() => {}}
          style={{ width: 120, height: 56 }}
          animated
        >
          <Text className="text-white font-semibold text-base">Apply</Text>
        </GradientButton>
      </View>

      {/* Price Breakdown */}
      <View className="mb-8">
        <View className="flex-row justify-between mb-3">
          <Text className="text-white text-base">Subtotal:</Text>
          <Text className="text-white text-base font-medium">${subtotal}</Text>
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
    </>
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

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
      />

      {/* Checkout Button */}
      <View className="px-5 pb-8"></View>
    </View>
  );
};

export default Cart;
