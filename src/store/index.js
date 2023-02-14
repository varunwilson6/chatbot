import { create } from 'zustand';

const useUserStore = create((set) => ({
  userName: "",
  updateUser: (selectedUser) => set((state) => ({ userName: selectedUser })),
}))

export {
  useUserStore
}