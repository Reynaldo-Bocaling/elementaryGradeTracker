import { create } from "zustand";
export const gradeTableToggle = create((set) => ({
  isGradeTableToggle: false,
  setIsGradeToggle: () => set({ isGradeTableToggle: true }),
}));
