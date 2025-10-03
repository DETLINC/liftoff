export interface IconProps {
  focused?: boolean;
}

export interface IconProps {
  isActive?: boolean;
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: any;
  isFavorite?: boolean;
  onPress?: () => void;
  onFavoriteToggle?: () => void;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: any;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}
