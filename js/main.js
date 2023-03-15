import {dataArray} from './data.js';
import { creatContainer } from './task3.js';
import { timein, timeout } from './const.js';
import { changeTime, getPrice } from './task4.js';

creatContainer(dataArray)
getPrice()
changeTime(timein, timeout);
changeTime(timeout, timein);


