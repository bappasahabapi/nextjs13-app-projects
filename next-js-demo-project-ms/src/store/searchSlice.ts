import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface SearchState {
  search: string;
  startupUsers: User[];
}

const initialState: SearchState = {
  search: "",
  startupUsers: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupUser: (state, action: PayloadAction<User[]>) => {
      state.startupUsers = action.payload;
    },
  },
});

export const { setSearch, setStartupUser } = searchSlice.actions;
export default searchSlice.reducer;