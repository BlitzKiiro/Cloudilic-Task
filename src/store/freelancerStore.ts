import { create } from "zustand";
import {
  Freelancer,
  SearchState,
  SortOption,
  FilterOptions,
} from "@/types/freelancer";
import { mockFreelancers } from "@/data/mockData";

interface FreelancerStore extends SearchState {
  freelancers: Freelancer[];
  filteredFreelancers: Freelancer[];
  displayedCount: number;
  itemsPerPage: number;

  setSearchTerm: (term: string) => void;
  setFilters: (filters: Partial<FilterOptions>) => void;
  setSortBy: (sortBy: SortOption) => void;
  showMore: () => void;
  resetPagination: () => void;
  initializeFromUrl: (searchParams: URLSearchParams) => void;
  updateUrl: () => void;

  filterAndSortFreelancers: () => void;
}

export const useFreelancerStore = create<FreelancerStore>((set, get) => ({
  // Initial state
  freelancers: mockFreelancers,
  filteredFreelancers: mockFreelancers,
  displayedCount: 12,
  itemsPerPage: 12,
  searchTerm: "",
  filters: {
    serviceCategory: "",
    sellerDetails: "",
    budget: "",
    deliveryTime: "",
    location: "",
  },
  sortBy: "all",

  // Actions
  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
    get().resetPagination();
    get().filterAndSortFreelancers();
    get().updateUrl();
  },

  setFilters: (newFilters: Partial<FilterOptions>) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
    get().resetPagination();
    get().filterAndSortFreelancers();
    get().updateUrl();
  },

  setSortBy: (sortBy: SortOption) => {
    set({ sortBy });
    get().resetPagination();
    get().filterAndSortFreelancers();
    get().updateUrl();
  },

  showMore: () => {
    const { displayedCount, itemsPerPage } = get();
    set({ displayedCount: displayedCount + itemsPerPage });
  },

  resetPagination: () => {
    set({ displayedCount: 12 });
  },

  initializeFromUrl: (searchParams: URLSearchParams) => {
    const searchTerm = searchParams.get("search") || "";
    const serviceCategory = searchParams.get("category") || "";
    const sellerDetails = searchParams.get("level") || "";
    const budget = searchParams.get("budget") || "";
    const deliveryTime = searchParams.get("delivery") || "";
    const location = searchParams.get("location") || "";
    const sortBy = (searchParams.get("sort") as SortOption) || "all";

    set({
      searchTerm,
      filters: {
        serviceCategory,
        sellerDetails,
        budget,
        deliveryTime,
        location,
      },
      sortBy,
    });

    get().filterAndSortFreelancers();
  },

  updateUrl: () => {
    if (typeof window === "undefined") return;

    const { searchTerm, filters, sortBy } = get();
    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (filters.serviceCategory)
      params.set("category", filters.serviceCategory);
    if (filters.sellerDetails) params.set("level", filters.sellerDetails);
    if (filters.budget) params.set("budget", filters.budget);
    if (filters.deliveryTime) params.set("delivery", filters.deliveryTime);
    if (filters.location) params.set("location", filters.location);
    if (sortBy !== "all") params.set("sort", sortBy);

    const url = params.toString() ? `?${params.toString()}` : "/";
    window.history.replaceState({}, "", url);
  },

  filterAndSortFreelancers: () => {
    const { freelancers, searchTerm, filters, sortBy } = get();

    // Filter freelancers
    let filtered = freelancers.filter((freelancer) => {
      // Search term filter
      if (
        searchTerm &&
        !freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !freelancer.role.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Service category filter (role)
      if (
        filters.serviceCategory &&
        filters.serviceCategory !== "all" &&
        freelancer.role.toLowerCase() !== filters.serviceCategory.toLowerCase()
      ) {
        return false;
      }

      // Seller level filter
      if (filters.sellerDetails) {
        const levelMap: { [key: string]: string } = {
          level1: "Level 1",
          level2: "Level 2",
          level3: "Level 3",
        };
        const targetLevel = levelMap[filters.sellerDetails];
        if (targetLevel && freelancer.level !== targetLevel) {
          return false;
        }
      }

      // Budget filter
      if (filters.budget) {
        const [min, max] = filters.budget.split("-").map(Number);
        if (filters.budget === "100+") {
          if (freelancer.price < 100) {
            return false;
          }
        } else if (max) {
          if (freelancer.price < min || freelancer.price > max) {
            return false;
          }
        } else {
          if (freelancer.price !== min) {
            return false;
          }
        }
      }

      // Delivery time filter
      if (filters.deliveryTime && freelancer.deliveryTime) {
        const deliveryTimeMap: { [key: string]: string } = {
          "24h": "24 hours",
          "3d": "3 days",
          "1w": "1 week",
          "1m": "1 month",
        };
        const targetDeliveryTime = deliveryTimeMap[filters.deliveryTime];
        if (
          targetDeliveryTime &&
          freelancer.deliveryTime !== targetDeliveryTime
        ) {
          return false;
        }
      }

      // Location filter
      if (
        filters.location &&
        freelancer.location &&
        !freelancer.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    // Sort freelancers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "all":
          return 0; // No sorting, keep original order
        case "most-rated":
          return b.reviewCount - a.reviewCount;
        case "lowest-rated":
          return a.reviewCount - b.reviewCount;
        case "highest-price":
          return b.price - a.price;
        case "lowest-price":
          return a.price - b.price;
        default:
          return 0;
      }
    });

    set({ filteredFreelancers: filtered });
  },
}));
