import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllTrips from "./pages/AllTrips";
import SearchTrips from "./pages/SearchTrips";
import WhereWeGo from "./pages/WhereWeGo";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<WhereWeGo />} />
        <Route path="/all-trips" element={<AllTrips />} />
        <Route
          path="/search-trips"
          element={<SearchTrips placeholder="Find and Go..." x />}
        />
      </Routes>
    </Layout>
  );
}
