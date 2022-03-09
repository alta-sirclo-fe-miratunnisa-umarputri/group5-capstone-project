import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled, alpha } from "@mui/material/styles";
import { primary, theBlack, theGreen } from "../../styles/color.styles";
import { useQuery } from "react-query";
import { capstoneAxios } from "../../axios-instance";
import Error from "../Alert/Error";
import { AxiosError } from "axios";
import { ROLE } from "../../constants";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
  border: "3px solid black",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: theBlack.color,
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  fontFamily: "Poppins",
  fontSize: "14px",
}));

type SearchBarProps = {
  setItems: Dispatch<SetStateAction<any[]>>;
  setTotalPage: Dispatch<SetStateAction<number>>;
  page: number;
  filterId: number;
  setFilterId: Dispatch<SetStateAction<number>>;
  availStatus: string;
  setAvailStatus: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setAssets: Dispatch<SetStateAction<any[]>>;
};

const SearchBar = ({
  setItems,
  setTotalPage,
  page,
  setFilterId,
  setAvailStatus,
  searchValue,
  setSearchValue,
  setAssets,
}: SearchBarProps) => {
  const role = localStorage.getItem("role")!;

  const {
    isLoading: isLoadingItems,
    isError: isErrorItems,
    error: errorItems,
  } = useQuery(
    ["fetchSearchItems", searchValue],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/items",
        params: { keyword: searchValue, page },
      });

      setItems(data.data.items);
      setTotalPage(data.data.totalPage);
      return data;
    },
    { enabled: searchValue !== "" && role === ROLE.ADMIN ? true : false }
  );

  const {
    isLoading: isLoadingAssets,
    isError: isErrorAssets,
    error: errorAssets,
  } = useQuery(
    ["fetchSearchAssets", searchValue],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/assets",
        params: { keyword: searchValue, page },
      });

      console.log(data);

      setAssets(data.data.assets);
      setTotalPage(data.data.totalPage);
      return data;
    },
    { enabled: searchValue !== "" && role === ROLE.EMPLOYEE ? true : false }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterId(0);
    setAvailStatus("");

    setSearchValue(e.target.value);
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchRoundedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={
            isLoadingItems || isLoadingAssets ? "Loading..." : "Pencarian…"
          }
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
          value={searchValue}
        />
      </Search>
      {isErrorItems && (
        <Error message={(errorItems as AxiosError).response!.data!.message!} />
      )}
      {isErrorAssets && (
        <Error message={(errorAssets as AxiosError).response!.data!.message!} />
      )}
    </>
  );
};

export default SearchBar;
