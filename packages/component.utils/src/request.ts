import axios from 'axios';
import { stringify } from 'query-string';
import { isArray, map, omit } from 'lodash';
import noDataFilter from './noDataFilter';
import { getStorage, getToken } from './store';

const error = { code: 999, message: '服务器异常!', success: false };

const instance: any = axios.create();

// instance.defaults.headers.common['token'] = getToken();

instance.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded';

// Add a request interceptor
instance.interceptors.request.use(
	function (config: any) {
		if (getToken()) {
			config.headers.token = getToken();
		}
		return config;
	},
	function (error: any) {
		// Do something with request error
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(function (response: any) {
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
export function requestPost(baseURL: string, url: string, params: any) {
	const options = {
		baseURL,
		url,
		data: Object.assign({}, noDataFilter(params)),
		method: 'post',
		withCredentials: false,
		transformRequest: [
			function (data: any) {
				return stringify(data, {
					strict: false,
				});
			},
		],
	};
	return instance(options).then((result: any) => {
		if (result.code === 0 && result.success) {
			return {
				...result,
				type: 'success',
			};
		} else {
			return {
				...result,
				type: 'error',
			};
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
export function requestTableList(baseURL: string, url: string, params: string) {
	const _params: any = Object.assign({}, params);

	if (_params?.current) {
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
		.then((result: any) => {
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
					total: result?.data?.total || 0,
					data: result.data.rows,
				};
			} else {
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

export function requestGet(baseURL: string, url: string, params: any) {
	const options = {
		baseURL,
		url,
		params: Object.assign({}, noDataFilter(params)),
		method: 'get',
		withCredentials: false,
	};

	return instance(options).then((result: any) => {
		if (result.code === 0 && result.success) {
			return result.data;
		} else {
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

export function requestExport(baseURL: string, url: string, params: any) {
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

export function requestOptions(
	baseURL: string,
	url: string,
	params: any,
	keys: Array<string>,
) {
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
		.then((result: any) => {
			if (result.code === 0 && result.success) {
				if (isArray(result.data)) {
					return map(result.data, (item) => {
						return {
							...omit(item, keys),
							value: item[value],
							label: item[label],
						};
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
export function requestTreeOptions(
	baseURL: string,
	url: string,
	params: any,
	keys: Array<string>,
) {
	const options = {
		baseURL,
		url,
		params: Object.assign({}, noDataFilter(params)),
		method: 'get',
		withCredentials: false,
	};

	return instance(options)
		.then((result: any) => {
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
function convertTree(menu: Array<any>, keys: Array<string>) {
	try {
		const pid = keys[0];
		const value = keys[1];
		const title = keys[2];
		const children = keys[3] || 'children';
		const convertMenu = (list: any, parent: any) => {
			if (list.length < 2) {
				return list.map((item: any) => ({
					...item,
					title: item[title],
					value: item[value],
					pid: item[pid],
				}));
			}
			return list
				.filter((item: any) => {
					if (item[pid] === parent) {
						item[children] = convertMenu(list, item[value]);
						return true;
					}
					return false;
				})
				.map((item: any) => ({
					...item,
					title: item[title],
					value: item[value],
					pid: item[pid],
				}));
		};
		return convertMenu(menu, String(getStorage('parentId')));
	} catch (error) {
		console.log(error);
	}
}
