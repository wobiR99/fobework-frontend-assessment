import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
