import { create } from "zustand";

const usePhotosStore = create((set) => ({
  photos: [],
  setPhotos: (fetchedPhotos) => set({ photos: fetchedPhotos }),
}));

export default usePhotosStore;
