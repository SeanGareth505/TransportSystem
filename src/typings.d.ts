declare global {
    interface Window {
      google: typeof google;
    }
  }
  
  declare const google: any;
  