import * as LocalAuthentication from "expo-local-authentication";
export default {
  isCompatible: async () => {
    console.log("hit mock");
    return Promise.resolve(true);
  },
  isEnrolled: () => Promise.resolve(true),
  authenticate: async () =>
    await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics 1",
      cancelLabel: "Cancel it",
      disableDeviceFallback: true,
    }),
};
