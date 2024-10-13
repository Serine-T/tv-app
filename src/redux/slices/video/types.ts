export interface IState {
  isLoading: boolean;
  trending: Video[];
  featured: Video | null;
  lastViewed: string | null;
  errorMessage?: string | null;
}

export interface Video {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
}

export interface TVAppData {
  Featured: Video;
  TendingNow: Video[];
}