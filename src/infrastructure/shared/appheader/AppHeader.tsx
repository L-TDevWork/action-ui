import { useEffect, type JSX } from "react";
import { useLocation } from "react-router-dom";


export const AppHeader: React.FC<{}> = (): JSX.Element => {
    const location = useLocation();

    useEffect(() => {

    }, [location?.pathname]);

    return <header>
        <div className="app-header">
            <div className="app-header-content">

            </div>
        </div>
    </header>
}