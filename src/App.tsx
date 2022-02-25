import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Application from "./components/Beranda/Employee/Application";
import DetailActivity from "./components/Beranda/Employee/DetailActivity";
import Procurement from "./components/Beranda/Employee/Procurement";

import DetailItemAdmin from "./components/DirektoriAset/DetailItemAdmin";
import DetailAssetEmployee from "./components/DirektoriAset/DetailAssetEmployee";
import UserList from "./components/DirektoriAset/UserList";
import Beranda from "./pages/Beranda";
import DirektoriAset from "./pages/DirektoriAset";
import SignIn from "./pages/SignIn";
import { responsiveFontSize } from "./styles/theme.styles";
import AddNewAsset from "./components/Beranda/Admin/AddNewAsset";
import AssignAsset from "./components/Beranda/Admin/AssignAsset";

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
              element={
                <DetailItemAdmin isOpen={false} handleClose={() => {}} />
              }
            />
            <Route
              path="pengguna"
              element={<UserList isOpen={false} handleClose={() => {}} />}
            />
            <Route
              path="employee/:id"
              element={
                <DetailAssetEmployee isOpen={false} handleClose={() => {}} />
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
            <Route path="tambah-aset-baru" element={<AddNewAsset />} />
            <Route path="assign-aset" element={<AssignAsset />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
