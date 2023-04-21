import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUrlState from '@ahooksjs/use-url-state';
import { encodeParams, decodeParams } from './urlQueryString';
import { isEmpty, has } from 'lodash';
const NAME = 'qSearch';
export default function useRoutes() {
    const [paramsParse, setUrlState] = useUrlState(null, {
        navigateMode: 'replace',
    });
    const navigate = useNavigate();
    function historyPush(pathname, data) {
        if (data) {
            const params = isEmpty(data) ? '' : `?${NAME}=${encodeParams(data)}`;
            navigate(pathname + params);
        }
        else {
            navigate(pathname);
        }
    }
    function historyReplace(pathname, data) {
        const params = isEmpty(data) ? '' : `?${NAME}=${encodeParams(data)}`;
        navigate(pathname + params, { replace: true });
    }
    function historyBack() {
        navigate(-1);
    }
    function getParams(paramsParse) {
        if (isEmpty(paramsParse)) {
            return {};
        }
        else {
            if (has(paramsParse, NAME)) {
                return paramsParse[NAME] ? decodeParams(paramsParse[NAME]) : {};
            }
            return paramsParse;
        }
    }
    return {
        historyPush,
        historyReplace,
        paramsParse: getParams(paramsParse),
        setUrlState,
        historyBack,
    };
}
