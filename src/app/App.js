import './App.css';
import {RouterProvider} from "react-router";
import {router} from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider  client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider >
  );
}

export default App;
