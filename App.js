import * as React from 'react';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class App extends React.Component {
    
    adFunction = async () =>{
    AdMobInterstitial.setAdUnitID('ca-app-pub-5747609340870218/7916083730'); // Test ID, Replace with your-admob-unit-id
    await  AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await  AdMobInterstitial.showAdAsync();
        
    }
    componentDidMount(){
    
        this.adFunction();
        
    }
    
  render() {
    return <WebView source={{ uri: 'https://dongwuface.netlify.app/' }} style={{ marginTop: 20 }} />;
  }
}