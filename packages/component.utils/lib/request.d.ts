/**
 * 发起post请求
 * @param baseURL
 * @param url
 * @param params
 * @return {Promise<AxiosResponse<any>>}
 */
export declare function requestPost(baseURL: string, url: string, params: any): any;
/**
 *获取table列表数据
 * @param baseURL
 * @param url
 * @param params
 * @return {success:true,total:'100',data:'[]'}
 */
export declare function requestTableList(baseURL: string, url: string, params: string): any;
/**
 *
 * @param baseURL
 * @param url
 * @param params
 */
export declare function requestGet(baseURL: string, url: string, params: any): any;
/**
 *
 * @param baseURL
 * @param url
 * @param params
 */
export declare function requestExport(baseURL: string, url: string, params: any): any;
/**
 *
 * @param api
 * @param path
 * @param params
 * @param keys
 * @return {Promise<[{label:'',value:''}]>}
 */
export declare function requestOptions(baseURL: string, url: string, params: any, keys: Array<string>): any;
/**
 *
 * @param baseURL
 * @param url
 * @param params
 * @param keys
 */
export declare function requestTreeOptions(baseURL: string, url: string, params: any, keys: Array<string>): any;
