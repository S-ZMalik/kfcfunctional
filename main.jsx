import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  About,
  Careers,
  Contact,
  ExploreMenu,
  FeedBack,
  Home,
  MitaoBhook,
  Privacy,
  Scholarship,
  StoreLocator,
  TermsConditions,
  TrackOrder,
  Error,
  Buket,
  Login,
} from "./pages/index.js";

import "./App.css";
import "./Media.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SidebarProvider from "./context/SidebarContext.jsx";
import ExplorMenuProvider, { ExploreContext } from "./context/ExplorMenuContext.jsx";
import ModelContext, { ModelProvider } from "./context/ModelContext.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="explore-menu" element={<ExploreMenu />} />
      <Route path="feedback" element={<FeedBack />} />
      <Route path="mitao-bhook" element={<MitaoBhook />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="scholarship" element={<Scholarship />} />
      <Route path="storeLocator" element={<StoreLocator />} />
      <Route path="termsconditions" element={<TermsConditions />} />
      <Route path="trackorder" element={<TrackOrder />} />
      <Route path="bucket" element={<Buket />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModelProvider>
    <SidebarProvider>
      <ExplorMenuProvider>
        <RouterProvider router={router} />
      </ExplorMenuProvider>
    </SidebarProvider>
    </ModelProvider>
  </React.StrictMode>
);
