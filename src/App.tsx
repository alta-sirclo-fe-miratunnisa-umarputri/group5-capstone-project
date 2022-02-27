import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import Beranda from "./pages/Beranda";
import DirektoriAset from "./pages/DirektoriAset";
import SignIn from "./pages/SignIn";
import PenggunaAset from "./pages/PenggunaAset";
import PermohonanPersetujuan from "./pages/PermohonanPersetujuan";
import NotFound from "./pages/NotFound";
import UnderMaintenance from "./pages/UnderMaintenance";
import PengadaanAset from "./pages/PengadaanAset";
import PermohonanPengadaan from "./pages/PermohonanPengadaan";

import Application from "./components/Beranda/Employee/Application";
import DetailActivity from "./components/Beranda/Employee/DetailActivity";
import Procurement from "./components/Beranda/Employee/Procurement";
import DetailItemAdmin from "./components/DirektoriAset/DetailItemAdmin";
import DetailAssetEmployee from "./components/DirektoriAset/DetailAssetEmployee";
import UserList from "./components/DirektoriAset/UserList";
import AddNewAsset from "./components/Beranda/Admin/AddNewAsset";
import AssignAsset from "./components/Beranda/Admin/AssignAsset";
import DetailModal from "./components/PenggunaAset/admin/DetailModal";
import DetailModalManager from "./components/PermohonanPeminjaman/manager/DetailModalManager";
import PengadaanModalManager from "./components/PengadaanAset/admin/PengadaanModalAdmin";
import PengadaanModalAdmin from "./components/PengadaanAset/admin/PengadaanModalAdmin";

import { responsiveFontSize } from "./styles/theme.styles";

const queryClient = new QueryClient();

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
  }, []);

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

          <Route path="pengguna-aset" element={<PenggunaAset />}>
            <Route path="admin-pengguna/:id" element={<DetailModal />} />
          </Route>

          <Route
            path="permohonan-persetujuan"
            element={<PermohonanPersetujuan />}
          >
            <Route path=":id" element={<DetailModalManager />} />
          </Route>

          <Route path="pengadaan-aset" element={<PengadaanAset />}>
            <Route path=":id" element={<PengadaanModalAdmin />} />
          </Route>
          <Route path="permohonan-pengadaan" element={<PermohonanPengadaan />}>
            <Route path=":id" element={<PengadaanModalManager />} />
          </Route>

          <Route path="/pemeliharaan" element={<UnderMaintenance />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
