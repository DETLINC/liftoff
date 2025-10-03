import { useState } from "react";
import { View, ScrollView, Text, FlatList } from "react-native";
import BackGroundSvg from "../../components/icons/tabBar/BG";
import Header from "../../components/ui/Header";
import PromoBanner from "../../components/ui/promo-banner";
import { CategoryFilters } from "../../components/ui/CategoryFilters";
import ProductCardContainer from "../../components/ui/ProductCardContainer";
import ProductContainerLight from "../../components/ui/ProductContainerLight";
import { products } from "../../constants/data";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(1);

  const handleProductPress = (
    id: string,
    name: string,
    imageUrl: string,
    price: string
  ) => {
    router.push({
      pathname: "/product/[id]",
      params: { id, name, imageUrl, price },
    });
  };
  return (
    <View className="flex-1 bg-background px-5">
      <View className="absolute right-0 bottom-0" pointerEvents="none">
        <BackGroundSvg />
      </View>
      <Header title={"Choose Your Bike"} showSearch />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginVertical: 10,
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <PromoBanner
              ImageUrl={require("../../assets/product_images/mainBike.png")}
              discount="30% Off"
            />
            <CategoryFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item, index }) =>
          index % 2 === 0 ? (
            <ProductCardContainer
              imageUrl={item.imageUrl}
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              onPress={() =>
                handleProductPress(
                  item.id,
                  item.name,
                  item.imageUrl,
                  item.price
                )
              }
            />
          ) : (
            <ProductContainerLight
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              imageUrl={item.imageUrl}
              onPress={() =>
                handleProductPress(
                  item.id,
                  item.name,
                  item.imageUrl,
                  item.price
                )
              }
            />
          )
        }
      />
    </View>
  );
}
