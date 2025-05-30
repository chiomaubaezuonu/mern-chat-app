import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")

            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in CheckAuth:", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        try {
            console.log("Signup Data:", data);
            set({ isSigningUp: true });
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res?.data })
            toast.success("Account created successfully")
        } catch (error) {
            console.log("Error in signup:", error)
            toast.error(error.response.data.message)
        } finally {
            set({ isSigningUp: false })
        }
    },

    login: async () => {
        try {
      const res =  await axiosInstance.post("/auth/login")
      set({ authUser: res.data})   
      toast.success("Logged in successfully")  
        } catch (error) {
          toast.error(error.response.data.message)  
        } finally{
           set ({ isLoggingIn: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout")
            set({ authUser: null })
            toast.success("Logged out successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    

}));