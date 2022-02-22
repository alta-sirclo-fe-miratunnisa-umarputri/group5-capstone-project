import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";

import Detail from "./components/DirektoriAset/Detail";
import Employee from "./components/DirektoriAset/Employee";
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
            <Route path=":id" element={<Detail />} />
            <Route path="pengguna" element={<Employee />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
