import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import './assets/css/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/configStore';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import 'antd/dist/antd.min.css';
import { DOMAIN } from './utils/setting';

//cau hinh web socket server 01
import * as signalR from '@microsoft/signalr';

//cau hinh web socket server 02
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

//cau hinh web socket server 03
connection.start().then(() => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <Provider store={store}>
         <ChakraProvider>
            <App />
         </ChakraProvider>
      </Provider>
   );
}).catch(error => {
   console.log(error);
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
