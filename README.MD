# Marvel Comics / React Native App

This is an app to access marvel characters database and their respective comics.

- First step to run this app is to setup the react-native development environment, available [here](https://reactnative.dev/docs/environment-setup).

- Clone the repository.

- Access the [marvel api website](https://developer.marvel.com) and get a private and public developer key

- Create a file called .env and inform your keys in the following format:

```
PUBLIC_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
PRIVATE_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

- Execute:

```
npm i
```

If you are using iOS execute:

```
npx pod-install
```

- Then execute command, depending on the OS:

```
npx react-native run-ios
```

or

```
npx react-native run-android
```

## Stack

- React-Native 0.64.2
- React Hooks: state management, navigation and redux
- Axios
- React Navigation to manage the Routes
- React Redux to manage global states

  _This app is not suitable for Expo, it is a bare react-native app._

```

```
