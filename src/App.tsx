import React from 'react';
import Main from "./features/Main/Main";
import Header from "./features/Header/Header";
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Work Sans',
            'sans-serif',
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <Header/>
                <Main/>
            </div>
        </ThemeProvider>
    );
}

export default App;
