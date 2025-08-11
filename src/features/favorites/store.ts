import { create } from 'zustand'

interface FavoritesState {
  ids: string[]
  toggle: (id: string) => void
}

export const useFavorites = create<FavoritesState>((set, get) => ({
  ids: [],
  toggle: (id) => {
    const exists = get().ids.includes(id)
    set({ ids: exists ? get().ids.filter((i) => i !== id) : [...get().ids, id] })
  },
}))
