import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import DetailActivity from "./components/Beranda/Employee/DetailActivity";

import Detail from "./components/DirektoriAset/Detail";
import User from "./components/DirektoriAset/User";
import Beranda from "./pages/Beranda";
import DirektoriAset from "./pages/DirektoriAset";
import SignIn from "./pages/SignIn";
import { responsiveFontSize } from "./styles/theme.styles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={responsiveFontSize}>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="direktori-aset" element={<DirektoriAset />}>
            <Route
              path=":id"
              element={<Detail isOpen={false} handleClose={() => {}} />}
            />
            <Route
              path="pengguna"
              element={<User isOpen={false} handleClose={() => {}} />}
            />
          </Route>

          <Route path="beranda" element={<Beranda />}>
            <Route path="detail-aktivitas/:id" element={<DetailActivity />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
