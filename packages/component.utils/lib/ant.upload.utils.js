import { isEmpty, pick } from 'lodash';
import { message } from 'antd';
export function getUploadList(data = []) {
    if (isEmpty(data)) {
        return [];
    }
    return data.map((item) => {
        return Object.assign(Object.assign({}, pick(item, ['uid', 'name', 'thumbUrl', 'url'])), { status: 1 });
    });
}
export function getUploadValueFromEvent(e) {
    if (Array.isArray(e)) {
        return e;
    }
    return ((e &&
        e.fileList.map((item) => {
            var _a, _b, _c;
            if (item.status === 'done' &&
                ((_a = item.response) === null || _a === void 0 ? void 0 : _a.code) === 0 &&
                ((_b = item.response) === null || _b === void 0 ? void 0 : _b.success)) {
                return Object.assign(Object.assign({}, item.response.data), { status: '1' });
            }
            if (item.response && ((_c = item.response) === null || _c === void 0 ? void 0 : _c.code) !== 0) {
                message.error(item.response.message);
                return null;
            }
            return item;
        })).filter((item) => item !== null) || []);
}
