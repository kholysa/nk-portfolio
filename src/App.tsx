import { Navigate, Route, Routes } from "react-router-dom";
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
        {/* GitHub Pages serves 404.html for unknown paths, so unmatched URLs reach
            the router and would otherwise render an empty layout. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
