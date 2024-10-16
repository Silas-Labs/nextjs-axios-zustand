import { create } from "zustand";

const useUsersStore = create((set) => ({
  users: [],
  setUsers: (fetchedUsers) => set({ users: fetchedUsers }),
}));

export default useUsersStore;
