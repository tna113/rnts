# Context
[react native mastery course](https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=2)

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