import { useEffect, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

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
import PengadaanModalManager from "./components/PermohonanPengadaan/manager/PengadaanModalManager";
import PengadaanModalAdmin from "./components/PengadaanAset/admin/PengadaanModalAdmin";

import { responsiveFontSize } from "./styles/theme.styles";

const Beranda = lazy(() => import("./pages/Beranda"));
const DirektoriAset = lazy(() => import("./pages/DirektoriAset"));
const SignIn = lazy(() => import("./pages/SignIn"));
const PenggunaAset = lazy(() => import("./pages/PenggunaAset"));
const PermohonanPersetujuan = lazy(
  () => import("./pages/PermohonanPersetujuan")
);
const NotFound = lazy(() => import("./pages/NotFound"));
const UnderMaintenance = lazy(() => import("./pages/UnderMaintenance"));
const PengadaanAset = lazy(() => import("./pages/PengadaanAset"));
const PermohonanPengadaan = lazy(() => import("./pages/PermohonanPengadaan"));

const queryClient = new QueryClient();

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || !role) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={responsiveFontSize}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>...</>}>
                <SignIn />
              </Suspense>
            }
          />

          <Route
            path="direktori-aset"
            element={
              <Suspense fallback={<>...</>}>
                <DirektoriAset />
              </Suspense>
            }
          >
            <Route
              path="admin/:id"
              element={
                <DetailItemAdmin isOpen={false} handleClose={() => {}} />
              }
            />
            <Route
              path="pengguna/:id"
              element={<UserList isOpen={false} handleClose={() => {}} />}
            />
            <Route
              path="employee/:id"
              element={
                <DetailAssetEmployee isOpen={false} handleClose={() => {}} />
              }
            />
          </Route>

          <Route
            path="beranda"
            element={
              <Suspense fallback={<>...</>}>
                <Beranda />
              </Suspense>
            }
          >
            <Route
              path="detail-aktivitas/:id"
              element={<DetailActivity isOpen={false} handleClose={() => {}} />}
            />
            <Route path="peminjaman-aset" element={<Application />} />
            <Route path="pengajuan-aset-baru" element={<Procurement />} />
            <Route path="tambah-aset-baru" element={<AddNewAsset />} />
            <Route path="assign-aset" element={<AssignAsset />} />
          </Route>

          <Route
            path="pengguna-aset"
            element={
              <Suspense fallback={<>...</>}>
                <PenggunaAset />
              </Suspense>
            }
          >
            <Route path=":id" element={<DetailModal />} />
          </Route>

          <Route
            path="permohonan-persetujuan"
            element={
              <Suspense fallback={<>...</>}>
                <PermohonanPersetujuan />
              </Suspense>
            }
          >
            <Route path=":id" element={<DetailModalManager />} />
          </Route>

          <Route
            path="pengadaan-aset"
            element={
              <Suspense fallback={<>...</>}>
                <PengadaanAset />
              </Suspense>
            }
          >
            <Route path=":id" element={<PengadaanModalAdmin />} />
          </Route>

          <Route
            path="permohonan-pengadaan"
            element={
              <Suspense fallback={<>...</>}>
                <PermohonanPengadaan />
              </Suspense>
            }
          >
            <Route path=":id" element={<PengadaanModalManager />} />
          </Route>

          <Route
            path="/pemeliharaan"
            element={
              <Suspense fallback={<>...</>}>
                <UnderMaintenance />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<>...</>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
