/**
 * Primary file for Redux store
 * created on Jul 14 2023
 * @author isaac Katongole <katongolelsaac11@gmail.com>
 * 
 */

import { configureStore }  from "@reduxjs/toolkit";
import reducer from './reducer';

export default function () {
    return configureStore({
        reducer
    })
}