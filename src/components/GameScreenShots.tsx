import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useScreenshots from '../hooks/useSreenshots'

interface Props {
    gameId: number
}

const GameScreenShots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);

    if(isLoading) return null;

    if(error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{base: 1, md: 2}}>
        {data?.results.map(file => <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenShots