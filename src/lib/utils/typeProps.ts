export interface GenreProps {
    id: number;
    name: string;
  }
export interface platformPropData {
    id: number;
    name: string;
  }
  
export interface PlatformProps {
    platform: platformPropData;
  }
  
export interface GameProps {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    platforms: PlatformProps[];
    metacritic: number;
  }

