import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";

import qraphqlClient from "#src/api/graphql";
import Search from "#src/antd/Search";

import "./global.less"

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

const App = () => {
    return <Search />;
};

render(
    <ApolloProvider client={qraphqlClient}>
        <App />
    </ApolloProvider>,
    document.getElementById("app")
);