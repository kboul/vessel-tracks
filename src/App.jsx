import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Leaflet from "./components/Leaflet";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Leaflet />
    </QueryClientProvider>
  );
}
