import type { JSX } from "react";
import type React from "react";

export const RedBoarder: React.FC<{}> = (): JSX.Element => {


return <>
<div className="red-border" style={{
                border: "2px solid red",
                width: 100,
                display: "flex",
                justifyContent: "center"
            }}></div>
            <br /> 
</>



        }