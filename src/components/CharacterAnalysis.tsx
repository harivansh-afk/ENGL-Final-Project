import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import type { CharacterAnalysis as CharacterAnalysisType } from '../types/character-analysis';

interface Props {
  analysis: CharacterAnalysisType;
}

const CharacterAnalysis: FC<Props> = ({ analysis }) => {
  return (
    <Box>
      <Typography variant="h5">{analysis.name}</Typography>
      <Typography>{analysis.description}</Typography>
      {/* Add more UI elements as needed */}
    </Box>
  );
};

export default CharacterAnalysis;
