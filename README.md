# Personal Finance Management App

A modern and intuitive mobile application built with React Native and Expo for managing personal finances, tracking expenses, and maintaining budgets.

## Features

- 📊 **Dashboard**: Get a quick overview of your financial status
- 📈 **Insights**: Analyze your spending patterns and financial trends
- ➕ **Quick Add**: Easily add new transactions and expenses
- 💰 **Budget Management**: Set and track your budgets
- ⚙️ **Settings**: Customize your app preferences

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **UI Components**: 
  - [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
  - [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
  - [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)
- **Development Platform**: [Expo](https://expo.dev/)

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator for local development
- Expo Go app on your physical device for testing

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd personal_financ_management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android emulator
- `npm run ios` - Start the app on iOS simulator
- `npm run web` - Start the app in web browser
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset the project (custom script)

## Project Structure

```
personal_financ_management/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab-based navigation
│   └── ...                # Other app screens
├── components/            # Reusable React components
├── constants/             # App constants and configuration
├── hooks/                # Custom React hooks
├── assets/               # Static assets (images, fonts, etc.)
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [Ionicons](https://ionic.io/ionicons)
