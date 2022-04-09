import * as me from '.melonjs.module';
import 'index.css';
import { device } from '.melonjs.module';
import onload from './js/app.js';


device.onReady(() => {
    onload();
});

