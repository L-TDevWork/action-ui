import "./App.css";
import "./SlideShow.css";

// prime faces
import type { JSX } from "react";

import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your desired theme

import { PrimeReactProvider } from "primereact/api";
import { AppContextProvider } from "./core/context/AppContext";
import { AppNavigation } from "./infrastructure/navigation/AppNavigation";

const App: React.FC<{}> = (): JSX.Element => {
    return <PrimeReactProvider>
        <AppContextProvider>
            <AppNavigation />
        </AppContextProvider>
    </PrimeReactProvider>
}

export default App;