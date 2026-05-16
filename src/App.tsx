import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layouts/AppLayout.tsx";
import { CollectionPage } from "./pages/CollectionPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collection" element={<CollectionPage />} />
      </Route>
    </Routes>
  );
};

export default App;
