import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:5001";

interface AuthState {
  authUser: { _id: string; phone: string } | null;
  isRequestingOtp: boolean;
  isVerifyingOtp: boolean;
  requestOtp: (phone: string) => Promise<void>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  isRequestingOtp: false,
  isVerifyingOtp: false,

  requestOtp: async (phone: string) => {
    set({ isRequestingOtp: true });
    try {
      await axios.post(`${BASE_URL}/auth/request-otp`, { phone });
      toast.success("OTP sent successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error sending OTP");
    } finally {
      set({ isRequestingOtp: false });
    }
  },

  verifyOtp: async (phone: string, otp: string) => {
    set({ isVerifyingOtp: true });
    try {
      const res = await axios.post(`${BASE_URL}/auth/verify-otp`, { phone, otp });
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      set({ isVerifyingOtp: false });
    }
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/auth/logout`);
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  },
}));
