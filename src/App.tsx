import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./routes/root";
import {ErrorPage} from "./error-page";
import {Hello} from "./routes/hello";
import {HelloJp} from "./routes/hello.jp";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {XmlToJson} from "./routes/xmlToJson";

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "hello",
                    element: <Hello/>,
                },
                {
                    path: "hello-jp",
                    element: <HelloJp/>,
                },
                {
                    path: "xml-to-json",
                    element: <XmlToJson/>,
                },
            ]
        },
    ])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
