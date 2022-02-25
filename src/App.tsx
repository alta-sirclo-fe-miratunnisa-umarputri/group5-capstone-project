import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Application from "./components/Beranda/Employee/Application";
import DetailActivity from "./components/Beranda/Employee/DetailActivity";
import Procurement from "./components/Beranda/Employee/Procurement";

import Detail from "./components/DirektoriAset/Detail";
import DetailItemEmployee from "./components/DirektoriAset/DetailItemEmployee";
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
              path="admin/:id"
              element={<Detail isOpen={false} handleClose={() => {}} />}
            />
            <Route
              path="pengguna"
              element={<User isOpen={false} handleClose={() => {}} />}
            />
            <Route
              path="employee/:id"
              element={
                <DetailItemEmployee isOpen={false} handleClose={() => {}} />
              }
            />
          </Route>

          <Route path="beranda" element={<Beranda />}>
            <Route
              path="detail-aktivitas/:id"
              element={<DetailActivity isOpen={false} handleClose={() => {}} />}
            />
            <Route path="peminjaman-aset" element={<Application />} />
            <Route path="pengajuan-aset-baru" element={<Procurement />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
