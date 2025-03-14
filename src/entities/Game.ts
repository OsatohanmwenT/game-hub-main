import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./publisher";


interface Game {
  id: number;
  name: string;
  description_raw: string;
  genres: Genre[]
  publishers: Publisher[]
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}

export default Game