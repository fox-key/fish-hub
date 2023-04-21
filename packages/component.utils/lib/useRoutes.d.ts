export default function useRoutes(): {
    historyPush: (pathname: any, data: any) => void;
    historyReplace: (pathname: any, data: any) => void;
    paramsParse: any;
    setUrlState: any;
    historyBack: () => void;
};
