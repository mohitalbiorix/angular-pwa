import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-pwa-course',
  webDir: 'dist/angular-pwa-course/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
