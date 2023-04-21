import { isEmpty, pick } from 'lodash';
import { message } from 'antd';

export function getUploadList(data = []) {
	if (isEmpty(data)) {
		return [];
	}
	return data.map((item) => {
		return {
			...pick(item, ['uid', 'name', 'thumbUrl', 'url']),
			status: 1,
		};
	});
}

export function getUploadValueFromEvent(e) {
	if (Array.isArray(e)) {
		return e;
	}
	return (
		(
			e &&
			e.fileList.map((item) => {
				if (
					item.status === 'done' &&
					item.response?.code === 0 &&
					item.response?.success
				) {
					return {
						...item.response.data,
						status: '1',
					};
				}
				if (item.response && item.response?.code !== 0) {
					message.error(item.response.message);
					return null;
				}
				return item;
			})
		).filter((item) => item !== null) || []
	);
}
