import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled, alpha } from "@mui/material/styles";
import { primary } from "../../styles/color.styles";
import { useQuery } from "react-query";
import { capstoneAxios } from "../../axios-instance";
import Error from "../Alert/Error";
import { AxiosError } from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  ...primary,
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
};

const SearchBar = ({ setItems, setTotalPage, page }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, isError, error } = useQuery(
    ["fetchSearch", searchValue],
    async () => {
      const { data } = await capstoneAxios({
        method: "GET",
        url: "/items",
        params: { keyword: searchValue, page },
      });

      setItems(data.data.items);
      setTotalPage(data.data.totalPage);
      return data;
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchRoundedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={isLoading ? "Loading..." : "Pencarian…"}
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
      {isError && (
        <Error message={(error as AxiosError).response!.data!.message!} />
      )}
    </>
  );
};

export default SearchBar;
