import axios from 'axios';
import { stringify } from 'query-string';
import { isArray, map, omit } from 'lodash';
import noDataFilter from './noDataFilter';
import { getStorage, getToken } from './store';
const error = { code: 999, message: '服务器异常!', success: false };
const instance = axios.create();
// instance.defaults.headers.common['token'] = getToken();
instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    if (getToken()) {
        config.headers.token = getToken();
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    const { data, status } = response;
    if (Number(status) === 200) {
        return data;
    }
    return error;
});
/**
 * 发起post请求
 * @param baseURL
 * @param url
 * @param params
 * @return {Promise<AxiosResponse<any>>}
 */
export function requestPost(baseURL, url, params) {
    const options = {
        baseURL,
        url,
        data: Object.assign({}, noDataFilter(params)),
        method: 'post',
        withCredentials: false,
        transformRequest: [
            function (data) {
                return stringify(data, {
                    strict: false,
                });
            },
        ],
    };
    return instance(options).then((result) => {
        if (result.code === 0 && result.success) {
            return Object.assign(Object.assign({}, result), { type: 'success' });
        }
        else {
            return Object.assign(Object.assign({}, result), { type: 'error' });
        }
    });
}
/**
 *获取table列表数据
 * @param baseURL
 * @param url
 * @param params
 * @return {success:true,total:'100',data:'[]'}
 */
export function requestTableList(baseURL, url, params) {
    const _params = Object.assign({}, params);
    if (_params === null || _params === void 0 ? void 0 : _params.current) {
        _params.pageNum = _params.current;
        Reflect.deleteProperty(_params, 'current');
    }
    const options = {
        baseURL,
        url,
        params: _params,
        method: 'get',
        withCredentials: false,
    };
    return instance(options)
        .then((result) => {
        var _a;
        if (!result) {
            return null;
        }
        if (result.code === 0) {
            if (isArray(result.data)) {
                return {
                    data: result.data,
                    total: result.data.length,
                    success: true,
                };
            }
            return {
                success: true,
                total: ((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.total) || 0,
                data: result.data.rows,
            };
        }
        else {
            return null;
        }
    })
        .catch(() => {
        return null;
    });
}
/**
 *
 * @param baseURL
 * @param url
 * @param params
 */
export function requestGet(baseURL, url, params) {
    const options = {
        baseURL,
        url,
        params: Object.assign({}, noDataFilter(params)),
        method: 'get',
        withCredentials: false,
    };
    return instance(options).then((result) => {
        if (result.code === 0 && result.success) {
            return result.data;
        }
        else {
            return null;
        }
    });
}
/**
 *
 * @param baseURL
 * @param url
 * @param params
 */
export function requestExport(baseURL, url, params) {
    const options = {
        baseURL,
        url,
        params: Object.assign({}, noDataFilter(params)),
        method: 'get',
        responseType: 'blob',
    };
    return instance(options);
}
/**
 *
 * @param api
 * @param path
 * @param params
 * @param keys
 * @return {Promise<[{label:'',value:''}]>}
 */
export function requestOptions(baseURL, url, params, keys) {
    const options = {
        baseURL,
        url,
        params: Object.assign({}, noDataFilter(params)),
        method: 'get',
        withCredentials: false,
    };
    const value = keys[0];
    const label = keys[1];
    return instance(options)
        .then((result) => {
        if (result.code === 0 && result.success) {
            if (isArray(result.data)) {
                return map(result.data, (item) => {
                    return Object.assign(Object.assign({}, omit(item, keys)), { value: item[value], label: item[label] });
                });
            }
        }
        return null;
    })
        .catch(() => {
        return null;
    });
}
/**
 *
 * @param baseURL
 * @param url
 * @param params
 * @param keys
 */
export function requestTreeOptions(baseURL, url, params, keys) {
    const options = {
        baseURL,
        url,
        params: Object.assign({}, noDataFilter(params)),
        method: 'get',
        withCredentials: false,
    };
    return instance(options)
        .then((result) => {
        if (result.code === 0 && result.success) {
            if (isArray(result.data)) {
                return convertTree(result.data, keys);
            }
        }
        return null;
    })
        .catch(() => {
        return null;
    });
}
/**
 *
 * @param menu
 * @param keys
 */
function convertTree(menu, keys) {
    try {
        const pid = keys[0];
        const value = keys[1];
        const title = keys[2];
        const children = keys[3] || 'children';
        const convertMenu = (list, parent) => {
            if (list.length < 2) {
                return list.map((item) => (Object.assign(Object.assign({}, item), { title: item[title], value: item[value], pid: item[pid] })));
            }
            return list
                .filter((item) => {
                if (item[pid] === parent) {
                    item[children] = convertMenu(list, item[value]);
                    return true;
                }
                return false;
            })
                .map((item) => (Object.assign(Object.assign({}, item), { title: item[title], value: item[value], pid: item[pid] })));
        };
        return convertMenu(menu, String(getStorage('parentId')));
    }
    catch (error) {
        console.log(error);
    }
}
