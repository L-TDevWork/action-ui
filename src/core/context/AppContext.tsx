
import { createContext, useContext, useState } from "react";

const AppContext = createContext({} as TAppContext);

export const AppContextProvider = (props: any) => {
    const [ActiveBlog, setActiveBlog] = useState<TBlog>({} as TBlog);

    const AppContextData = {
        ActiveBlog,
        setActiveBlog
    };

    return <AppContext.Provider value={AppContextData}>{props.children}</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}
