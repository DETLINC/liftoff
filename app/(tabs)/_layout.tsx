import "../../global.css";
import { Tabs } from "expo-router";

import { TabButton } from "../../components/ui/TabButton";
import BikeIcon from "../../components/icons/tabBar/bicycle";
import BottomTabContainer from "../../components/icons/tabBar/BottomTabContainer";
import MapIcon from "../../components/icons/tabBar/map.fill";
import CartIcon from "../../components/icons/tabBar/cart.fill";
import ProfileIcon from "../../components/icons/tabBar/person.fill";
import ReceiptIcon from "../../components/icons/tabBar/doc.text.fill";
import { router } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 103.5,
          position: "absolute",
          justifyContent: "space-evenly",
          paddingHorizontal: 17,
        },
        tabBarBackground: () => <BottomTabContainer />,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused}>
              <BikeIcon focused={focused} />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused}>
              <MapIcon focused={focused} />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/MyCart/Cart");
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused}>
              <CartIcon focused={focused} />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused}>
              <ProfileIcon focused={focused} />
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused}>
              <ReceiptIcon focused={focused} />
            </TabButton>
          ),
        }}
      />

      <BottomTabContainer />
    </Tabs>
  );
}
