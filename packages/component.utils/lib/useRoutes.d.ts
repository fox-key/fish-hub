export default function useRoutes(): {
    historyPush: (pathname: any, data: any) => void;
    historyReplace: (pathname: any, data: any) => void;
    paramsParse: any;
    setUrlState: (s: React.SetStateAction<Partial<{ [key in keyof S]: any; }>>) => void;
    historyBack: () => void;
};
