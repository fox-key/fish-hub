import { jsx as _jsx } from "react/jsx-runtime";
import { fill, truncate, isArray, isEmpty, isObject, zipObject, compact, ceil, some } from 'lodash';
import moment from 'moment';
import React from 'react';
import { clearStorage } from '../lib';
export function resizeListener() {
    // 定义设计图的尺寸 3840
    const designSize = 1364;
    // 获取 html 元素
    const html = document.documentElement;
    // 定义窗口的宽度
    const clientW = html.clientWidth;
    const clienH = html.clientHight;
    // html 的fontsize 大小
    const htmlRem = (clientW * 12) / designSize;
    html.style.fontSize = htmlRem + 'px';
    console.log('htmlRem', htmlRem);
}
// 退出登录
export function logoutOut(navigate) {
    clearStorage();
    navigate('/');
}
//手机号加密
export function phoneEncryption(phone) {
    const tel = phone.split('');
    return fill(tel, '*', 3, tel.length - 4);
}
export function idEncryption(id) {
    if (id) {
        return id.replace(/^(.{3})(?:\d+)(.{4})$/, '$1****$2');
    }
    else {
        return id;
    }
}
//字符串转对象
export function jsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return [];
    }
    const data = JSON.parse(str);
    return JSON.parse(str);
}
export function replaceString(str) {
    return str ? str.replace(/(\r\n)|(\n)/g, '<br>') : '';
}
export function dateFormatter(str) {
    if (!str) {
        return '';
    }
    return moment(str).format('YYYY-MM-DD HH:mm');
}
export function truncateText(text) {
    if (!text) {
        return '-';
    }
    return (_jsx("div", Object.assign({ title: text }, { children: truncate(text, {
            length: 24,
            separator: '...',
        }) })));
}
export function transformDate(value, dataLabel) {
    const data = compact(value);
    const times = isEmpty(data)
        ? []
        : data.map((item) => moment(item).format('YYYY-MM-DD'));
    return zipObject(dataLabel, isEmpty(times)
        ? [null, null]
        : [`${times[0]} 00:00:00`, `${times[1]} 23:59:59`]);
}
export function toFixed(num) {
    if (!num || num == null) {
        return '0.00';
    }
    return ceil(Number(num), 3).toFixed(2);
}
