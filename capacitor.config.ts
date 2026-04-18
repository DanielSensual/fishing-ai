import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ghostaisystems.fishingai',
  appName: 'Fishing AI',
  webDir: 'out',
  server: {
    url: 'https://fishing-ai-nine.vercel.app',
    cleartext: false,
  },
  ios: {
    scheme: 'Fishing AI',
    contentInset: 'automatic',
    backgroundColor: '#060d18',
    preferredContentMode: 'mobile',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchFadeOutDuration: 500,
      backgroundColor: '#060d18',
      showSpinner: false,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#060d18',
    },
  },
};

export default config;
