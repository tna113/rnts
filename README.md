# react-native typescript projects
this repository serves as a home for the react-native typescript projects i will be completing for my 2024 annual development goals. i strive to complete at least 4 out of the 10 projects that are on this [react native mastery course](https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=2)

## running the project on an external device
1. connect android device to local machine
2. select USB for file transfer on the device
3. open terminal and `cd` to the root of this project
4. `adb devices` to check connected devices
5. the device should be listed
  a. if the device is `unauthorized`, go to the developer settings on the device and toggle USB debugging on and off
  b. a window should pop up that asks you to authorize your local machine to work with your android device
  c. authorize and give permission!
6. run the `npm run android` or `npx react-native run-android` command
7. the project should now load up on the external device

## project 1
- basic react-native with typescript application
- getting familiar with react-native components and styling
- working with dark mode and themeing
  - `useColorsScheme` hook that checks the device's dark mode settings and if it is toggled on or off
- running the react-native application
- introduction to `adb`
- connecting an external android device and running the project on it (s/o to hot reload <3)
- file structure best practices and tips
- debugging build failures (watchman failing, authorizing external android device, local machine permissions)

## project 2
- built different UI components with varying degrees of complexity
  - scrollviews
  - flex
  - images
  - on press functionality
    - open a browser with a given link on button press

## project 3
- basic password generator
- installed and implemented different `npm` packages
  - [bouncy checkbox](https://www.npmjs.com/package/react-native-bouncy-checkbox) - a nice checkbox
  - [`yup`](https://www.npmjs.com/package/yup) - form validation
  - [`formik`](https://www.npmjs.com/package/formik) - form handling that works alongside `yup`
  - [clipboard](https://www.npmjs.com/package/@react-native-clipboard/clipboard) - to use device clipboard
- working with `useState`
- traversing through an array using javascript `.map` function
  - when using `{}` for the callback function, you need to specify `return`
    - ie. `.map((value) => { return ( <View/> ) })`
  - when using `()` for the callback function, you do not need specify this
    - ie. `.map((value) => ( <View/> ))`
- shortcut to cast a string into a number: prefix the variable you want to cast into a number with a `+`
- debugging the application & developer menu
  - pressing `d` on metro builder terminal
  - select stop debugging (this will open a tab in your browser where you can inspect and view console logs)