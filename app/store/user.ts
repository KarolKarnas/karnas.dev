import { create } from "zustand"

export const userStore = create((set) => ({
  user: {
    full_name: "Karol_Karnas",
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),

    fetchUser: async () => {
      
    }
}))
