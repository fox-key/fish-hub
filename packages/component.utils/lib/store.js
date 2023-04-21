import Cookies from 'js-cookie';
import store from 'store2';
import { isEmpty, isObject } from 'lodash';
import { encode, decode } from 'js-base64';
import noDataFilter from './noDataFilter';
/**
 * 获取token
 * @return {[type]} [description]
 */
let NAME = process.env.REACT_APP_NAME;
const KEY = NAME + '-token';
export function setToken(value, key = KEY) {
    Cookies.set(key, value, { expires: 1, path: '/' });
}
export function getToken() {
    const token = Cookies.get(KEY);
    return token || '';
}
export function getStorage(key) {
    const storage = store.get(NAME);
    const data = storage ? JSON.parse(decode(storage)) : {};
    return data[key] || '';
}
export function getAllStorage() {
    const storage = store.get(NAME);
    return JSON.parse(decode(storage)) || {};
}
export function setStorage(storage) {
    if (!isEmpty(storage) && isObject(storage)) {
        store.set(NAME, encode(JSON.stringify(noDataFilter(storage))));
    }
}
export function clearStorage(path = '/') {
    Cookies.remove(KEY, { path: path });
    store.clearAll();
}
