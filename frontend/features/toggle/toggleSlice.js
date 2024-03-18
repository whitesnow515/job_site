import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: false,
    chatSidebar: false,
};

export const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        menuToggle: (state) => {
            state.menu = !state.menu;
        },
        chatSidebarToggle: (state) => {
            state.chatSidebar = !state.chatSidebar;
        },
    },
});

export const { menuToggle, chatSidebarToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
