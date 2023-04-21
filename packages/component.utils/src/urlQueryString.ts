import { parse, stringify } from 'query-string';
import { encode, decode } from 'js-base64';

const parseConfig = {
	skipNull: true,
	skipEmptyString: true,
	parseNumbers: false,
	parseBooleans: false,
};

export function encodeParams(params = {}) {
	return encode(stringify(params, parseConfig));
}
export function decodeParams(string = '') {
	return parse(decode(string), parseConfig);
}

const NAME = 'qSearch';

export function urlEncodeParams(params: any) {
	return '?' + NAME + '=' + encodeParams(params);
}
