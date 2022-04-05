import * as me from 'melonjs/dist/melonjs.module.js';
import 'index.css';
import { device } from 'melonjs/dist/melonjs.module.js';
import onload from './js/app.js';


device.onReady(() => {
    onload();
});

