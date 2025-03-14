import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'
import useGameQueryStore from '../store'

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(g => g.gameQuery.genreId)
  const genre = useGenre(selectedGenreId)
  
  const selectedPlatformId = useGameQueryStore(g => g.gameQuery.platformId)
  const platform = usePlatform(selectedPlatformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading