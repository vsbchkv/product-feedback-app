import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarSlice {
  opened: boolean;
}

const initialState: SidebarSlice = {
  opened: false,
};

const sidebarSlice = createSlice({
  name: 'toggleSidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.opened = !state.opened;
    },
    closeSidebar(state) {
      state.opened = false;
    }
  }
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
