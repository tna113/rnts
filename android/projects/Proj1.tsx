import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, useColorScheme } from "react-native";

export default function Proj1(): React.JSX.Element  {
    const [mode, setMode] = useState('dark');

  //determines if device is on dark mode or not
  const isDarkMode = useColorScheme() === mode; 
  
  const handlePress = (newMode: string) => {
    setMode(newMode)
  }

  return (
    <SafeAreaView style={[isDarkMode ? styles.blueBg : styles.greenBg, styles.container]}>
      <Button title='change bg color' color={mode === 'dark' ? 'darkgreen' : 'darkblue'} onPress={() => handlePress(mode === 'dark' ? 'light' : 'dark')} />
      <Text style={styles.caption}>hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100%',
    },
    greenBg: {
      backgroundColor: 'lightgreen',
    },
    blueBg: {
      backgroundColor: 'skyblue',
    },
    caption: {
      marginVertical: 12,
    }
  });