# Bike Shop App - Liftoff Design-to-Code Exercise

## How to Run the Project

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/DETLINC/liftoff.git
   cd liftoff

2. **Install dependencies**

```bash   npm install

3. **Start the development server**

```bash   npx expo start

Run on your IOS device

Press i for iOS Simulator


**Testing on Different Screen Sizes**

The app is responsive for:

iPhone 13 mini (5.4")
iPhone 17 Pro Max (6.9")


**Tech Stack**

Framework: Expo React Native (SDK 52)
Language: TypeScript
Styling: NativeWind (Tailwind CSS)
Animations: React Native Reanimated 4
Gestures: React Native Gesture Handler
Routing: Expo Router


**Assumptions Made**
1. **Navigation Flow**

- Cart tab button navigates to "My Shopping Cart" screen (modal presentation)
Used slide-from-bottom animation

2. **Image Carousel**

- Product images duplicated 3 times to demonstrate carousel:

  ```const images = [imageUrl, imageUrl, imageUrl];

3. **Styling Approach**

- Primary: NativeWind (Tailwind CSS)
- Fallback: Inline style prop for:

Complex shadows (inner shadows)
Animated styles (Reanimated)

4. **Icons & Assets**

- All Figma icons converted to SVG
- Stored as reusable components in /components/icons

5. **API Integration**

- API: FakeStore API

 ``` https://fakestoreapi.com/products?limit=10

- Fetched in "Specification" tab
- Custom hook useFetchProducts

6. **State Management**

- Cart uses React Context API
- Includes: add, remove, update quantity, calculate totals
- Context includes: add, remove, update quantity, calculate totals


