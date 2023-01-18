import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Auth from "../utils/AuthHandler";
import { Load } from "../api/localStorage";

const HomePage = ({ setIsAuthenticated, setListData }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleBiometricAuth = async () => {
    try {
      if (await Auth.isEnrolled()) {
        const biometricAuth = await Auth.authenticate();
        console.warn("attempting to authenticate");

        if (biometricAuth.success) {
          setIsAuthenticated(true);
          const data = await Load();
          setListData(data);
        } else setLoginError("Login canceled or failed");
      } else {
        setLoginError("No saved fingerprints");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsBiometricSupported(await Auth.isCompatible());
      } catch (error) {
        setLoginError("Failed to check compatibility");
      }
    })();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#78BCC4",
        height: 50,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <View style={{ marginTop: 75, alignItems: "center" }}>
          <Text style={{ color: "#F7F8F3", fontSize: 50, padding: 10 }}>
            Login
          </Text>
          <Text style={{ color: "#002C3E", fontSize: 70 }}>Reminder</Text>
        </View>
        {isBiometricSupported ? (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={handleBiometricAuth}
              testID={"loginBtn"}
              style={{
                borderWidth: 2,
                borderColor: "#002C3E",
                borderRadius: 50,
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                testID="Image"
                source={require("../assets/fingerprint.png")}
                resizeMode="contain"
                style={{
                  height: 85,
                  width: 85,
                  padding: 2,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                padding: 25,
                fontSize: 20,
                fontWeight: "300",
                color: "#961212",
              }}
            >
              {loginError}
            </Text>
          </View>
        ) : (
          <Text>Biometric is Unavailable</Text>
        )}
      </View>
    </View>
  );
};

export default HomePage;
