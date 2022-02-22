import { ChangeEvent } from "react";
import { InputBase } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled, alpha } from "@mui/material/styles";
import { primary } from "../../styles/color.styles";

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

const SearchBar = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // const input = e.target.value;
    // const searchedBooks = books.filter((book: Book) =>
    //   book.title.toLowerCase().includes(input.toLowerCase())
    // );
    // setShowBooks(searchedBooks);

    console.log(e.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchRoundedIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Pencarian…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
      />
    </Search>
  );
};

export default SearchBar;
