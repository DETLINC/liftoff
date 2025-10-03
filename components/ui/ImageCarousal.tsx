// components/ui/ImageCarousel.tsx
import React, { memo } from "react";
import { View, Dimensions, FlatList } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "./Dot";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <AnimatedFlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={(_, index) => `image-${index}`}
        renderItem={({ item }) => (
          <View
            style={{ width: SCREEN_WIDTH }}
            className="justify-center items-center mb-2"
          >
            <Animated.Image
              source={item}
              style={{ width: 287.73, height: 208.41 }}
              resizeMode="contain"
            />
          </View>
        )}
      />
      <View className="absolute bottom-0 flex-row gap-2 self-center">
        {images.map((_, index) => (
          <PaginationDot key={`dot-${index}`} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
});

export default ImageCarousel;
