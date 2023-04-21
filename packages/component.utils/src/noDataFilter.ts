import { forOwn, isNull, isNaN, isUndefined, clone } from 'lodash';

export default function noDataFilter(data: any) {
	const p = clone(data);

	return forOwn(p, function (value, key) {
		if (
			isNaN(value) ||
			isNull(value) ||
			isUndefined(value) ||
			value === 'null' ||
			value === 'undefined'
		) {
			Reflect.deleteProperty(p, key);
		}
	});
}
