import * as LocalAuthentication from "expo-local-authentication";
export default {
  isCompatible: async () => await LocalAuthentication.hasHardwareAsync(),
  isEnrolled: async () => await LocalAuthentication.isEnrolledAsync(),
  authenticate: async () =>
    await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics 1",
      cancelLabel: "Cancel it",
      disableDeviceFallback: true,
    }),
};
