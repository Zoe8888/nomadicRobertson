import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'za.co.indigo.tulbaghh',
  appName: 'Tulbagh',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
