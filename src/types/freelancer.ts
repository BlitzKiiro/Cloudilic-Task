export interface Freelancer {
  id: string;
  name: string;
  profileImage: string;
  coverImage: string;
  level: "Level 1" | "Level 2" | "Level 3";
  role: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  tags?: string[];
  location?: string;
  responseTime?: string;
  deliveryTime?: string;
  completedProjects?: number;
}

export interface FilterOptions {
  serviceCategory: string;
  sellerDetails: string;
  budget: string;
  deliveryTime: string;
  location: string;
}

export type SortOption =
  | "all"
  | "most-rated"
  | "lowest-rated"
  | "highest-price"
  | "lowest-price";

export interface SearchState {
  searchTerm: string;
  filters: FilterOptions;
  sortBy: SortOption;
}
