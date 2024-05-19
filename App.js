import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import Parent from "./Components/Parent";
import Child from "./Components/Child";

const App = () => {
  const [status, setStatus] = React.useState(false);
  const [lang, setLang] = React.useState('English');
  const onButtonToggle = value => {
    setStatus(status === false ? true : false);
    onlanguage();
  };
  const onlanguage = value => {
    setLang(lang === 'English' ? 'Bangla' : "English");
  };
  var userName = "Al Amin Akash";
  function SomeThing() {
    alert("Hi I am Alert");
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.blue}>App Page</Text> */}
      {/* <Parent name={userName} />
      <Child click={SomeThing} /> */}
      <ToggleSwitch
        isOn={status}
        onColor="green"
        offColor="red"
        label={lang}
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="medium"
        onToggle={onButtonToggle}
        
      />
      <Text>
        {lang === "English"
          ? "This is English content"
          : "এটি বাংলা কন্টেন্ট"}
      </Text>
      {/* <Text>Bangla</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blue: {
    color: "blue",
  },
});
