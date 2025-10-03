// src/components/ui/CategoryFilters.tsx
import React from "react";
import { View } from "react-native";
import FilterButtonContainer from "./filter-button-container";
import BikeIcon from "../icons/BikeIcon";
import SteeringWheel from "../icons/SteeringWheel";
import Mountains from "../icons/Mountain";
import HelmetIcon from "../icons/HelmetIcon";

interface CategoryFiltersProps {
  activeFilter: number;
  onFilterChange: (id: number) => void;
}

const FILTERS = [
  { id: 1, label: "All", offset: 0 },
  { id: 2, iconType: "bike" as const, offset: -10 },
  { id: 3, iconType: "wheel" as const, offset: -20 },
  { id: 4, iconType: "mountain" as const, offset: -30 },
  { id: 5, iconType: "helmet" as const, offset: -40 },
];

export const CategoryFilters = ({ activeFilter, onFilterChange }: CategoryFiltersProps) => {
  const getIcon = (iconType: string | undefined, isActive: boolean) => {
    switch (iconType) {
      case "bike": return <BikeIcon isActive={isActive} />;
      case "wheel": return <SteeringWheel isActive={isActive} />;
      case "mountain": return <Mountains isActive={isActive} />;
      case "helmet": return <HelmetIcon isActive={isActive} />;
      default: return null;
    }
  };

  return (
    <View className="flex-row -top-5">
      {FILTERS.map((item) => (
        <View
          key={item.id}
          style={{ transform: [{ translateY: item.offset }] }}
        >
          <FilterButtonContainer
            isActive={activeFilter === item.id}
            label={item.label}
            icon={getIcon(item.iconType, activeFilter === item.id)}
            onPress={() => onFilterChange(item.id)}
          />
        </View>
      ))}
    </View>
  );
};