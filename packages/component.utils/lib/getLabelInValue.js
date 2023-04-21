import { getDictValList } from 'actions/base.action';
import { includes, isEmpty, map } from 'lodash';
export function concatLabelValue(value, label) {
    if (isEmpty(value) && isEmpty(label)) {
        return undefined;
    }
    return value.map((item, index) => {
        return {
            label: label[index],
            value: item,
        };
    });
}
