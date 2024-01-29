import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { Group } from "@/interfaces";

export interface GroupsState {
  groups: Group[];
  search: string;
  status: "idle" | "loading" | "failed";
}

const initialState: GroupsState = {
  groups: [
    {
      title: "",
      description: "",
      responsiblePerson: [
        {
          name: "",
          link: "",
        },
      ],
    },
  ],
  search: "",
  status: "idle",
};

// TODO: Add extraReducers builder
export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroups: (state, { payload }) => {
      state.groups = payload;

      console.log(`DEBUG: ${JSON.stringify(state.groups)}`);
    },

    setSearchParams: (state, { payload }) => {
      state.search = payload;
    }
  },
});

export const { addGroups, setSearchParams } = groupsSlice.actions;

export const selectGroups = (state: RootState) => state.groups;

export default groupsSlice.reducer;
