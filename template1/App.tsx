import React,{ useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen'
import {Platform, StatusBar} from 'react-native'

import { AppContainer } from './src/AppContainer';
import store, { persistor } from './src/store';
import { theme } from './src/styled-components/theme';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const App: React.FC = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return(
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ThemeProvider theme={theme}> */}
            <AppContainer />
          {/* </ThemeProvider> */}
        </PersistGate>
      </Provider>
    </>
  )
};

export default App;

