import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Tooltip, Card, CardContent, Chip, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { SocialClass, Character } from '../types/timeline';

const socialClasses: SocialClass[] = [
  {
    name: 'Upper Class',
    description: 'The landed gentry and aristocracy of Regency England',
    incomeRange: '£4,000-10,000 per annum',
    modernEquivalent: '$200,000-500,000 per year',
    characteristics: [
      'Inherited estates and land',
      'No need to work for income',
      'Expected to maintain country estates',
      'Social obligations to tenants and community'
    ],
    examples: [
      {
        character: 'Mr. Darcy',
        novel: 'Pride and Prejudice',
        context: 'Owner of Pemberley estate with £10,000 per year'
      },
      {
        character: 'Sir Thomas Bertram',
        novel: 'Mansfield Park',
        context: 'Owner of Mansfield Park and plantations in Antigua'
      }
    ]
  },
  {
    name: 'Middle Class',
    description: 'Professional class including clergy, military officers, and successful merchants',
    incomeRange: '£200-1,000 per annum',
    modernEquivalent: '$30,000-150,000 per year',
    characteristics: [
      'Professional occupations',
      'Education but no inherited wealth',
      'Aspiring to climb social ladder',
      'Emphasis on manners and propriety'
    ],
    examples: [
      {
        character: 'Mr. Bennet',
        novel: 'Pride and Prejudice',
        context: 'Country gentleman with £2,000 per year'
      },
      {
        character: 'Henry Tilney',
        novel: 'Northanger Abbey',
        context: 'Clergyman with independent means'
      }
    ]
  },
  {
    name: 'Working Class',
    description: 'Servants, laborers, and small traders',
    incomeRange: '£20-100 per annum',
    modernEquivalent: '$5,000-20,000 per year',
    characteristics: [
      'Manual labor or service positions',
      'Limited education and opportunities',
      'Dependent on employers',
      'Focus on survival and basic needs'
    ],
    examples: [
      {
        character: 'The Hill Family',
        novel: 'Longbourn',
        context: 'Servants at the Bennet household'
      },
      {
        character: 'Hannah',
        novel: 'Northanger Abbey',
        context: 'Servant at the Tilney household'
      }
    ]
  }
];

const characters: Character[] = [
  {
    id: 'darcy',
    name: 'Mr. Darcy',
    novel: 'Pride and Prejudice',
    socialClass: 'upper',
    occupation: 'Landowner',
    annualIncome: '£10,000',
    modernEquivalent: '$500,000',
    description: 'Wealthy landowner of Pemberley estate',
    relationships: ['elizabeth-bennet', 'georgiana-darcy']
  },
  {
    id: 'elizabeth',
    name: 'Elizabeth Bennet',
    novel: 'Pride and Prejudice',
    socialClass: 'middle',
    occupation: 'Gentleman\'s daughter',
    annualIncome: 'Share of £2,000',
    modernEquivalent: '$10,000',
    description: 'Intelligent and witty second daughter of the Bennet family',
    relationships: ['darcy', 'jane-bennet']
  },
  {
    id: 'sarah',
    name: 'Sarah',
    novel: 'Longbourn',
    socialClass: 'working',
    occupation: 'Housemaid',
    annualIncome: '£8',
    modernEquivalent: '$2,000',
    description: 'Hardworking housemaid at Longbourn',
    relationships: ['mrs-hill', 'james-smith']
  }
];

export default function SocialClassView() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [comparisonCharacter, setComparisonCharacter] = useState<Character | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCharacterClick = (character: Character) => {
    if (!selectedCharacter) {
      setSelectedCharacter(character);
    } else if (selectedCharacter.id !== character.id) {
      setComparisonCharacter(character);
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCharacter(null);
    setComparisonCharacter(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Social Class in Austen's Novels
      </Typography>

      {/* Social Pyramid */}
      <Box sx={{ mb: 6, position: 'relative', height: 300 }}>
        {socialClasses.map((socialClass, index) => (
          <Tooltip
            key={socialClass.name}
            title={
              <Box>
                <Typography variant="subtitle2">{socialClass.name}</Typography>
                <Typography variant="body2">{socialClass.description}</Typography>
                <Typography variant="caption">Income: {socialClass.incomeRange}</Typography>
              </Box>
            }
            arrow
          >
            <Paper
              elevation={3}
              sx={{
                position: 'absolute',
                left: '50%',
                width: `${100 - index * 20}%`,
                height: 80,
                transform: `translateX(-50%) translateY(${index * 100}px)`,
                bgcolor: `primary.${100 + index * 100}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: `translateX(-50%) translateY(${index * 100}px) scale(1.02)`,
                }
              }}
            >
              <Typography variant="h6" color="text.primary">
                {socialClass.name}
              </Typography>
            </Paper>
          </Tooltip>
        ))}
      </Box>

      {/* Character Grid */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Character Examples {selectedCharacter && '(Select another character to compare)'}
      </Typography>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <Card
              onClick={() => handleCharacterClick(character)}
              sx={{
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                bgcolor: selectedCharacter?.id === character.id ? 'primary.50' : 'background.paper'
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {character.novel}
                </Typography>
                <Chip
                  label={character.socialClass.charAt(0).toUpperCase() + character.socialClass.slice(1)}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography variant="body2">
                  Annual Income: {character.annualIncome}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  Modern Equivalent: {character.modernEquivalent}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Comparison Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>Character Comparison</DialogTitle>
        <DialogContent>
          {selectedCharacter && comparisonCharacter && (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>{selectedCharacter.name}</Typography>
                <Typography variant="body2" gutterBottom>Novel: {selectedCharacter.novel}</Typography>
                <Typography variant="body2" gutterBottom>Class: {selectedCharacter.socialClass}</Typography>
                <Typography variant="body2" gutterBottom>Income: {selectedCharacter.annualIncome}</Typography>
                <Typography variant="body2" gutterBottom>Modern: {selectedCharacter.modernEquivalent}</Typography>
                <Typography variant="body2">{selectedCharacter.description}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>{comparisonCharacter.name}</Typography>
                <Typography variant="body2" gutterBottom>Novel: {comparisonCharacter.novel}</Typography>
                <Typography variant="body2" gutterBottom>Class: {comparisonCharacter.socialClass}</Typography>
                <Typography variant="body2" gutterBottom>Income: {comparisonCharacter.annualIncome}</Typography>
                <Typography variant="body2" gutterBottom>Modern: {comparisonCharacter.modernEquivalent}</Typography>
                <Typography variant="body2">{comparisonCharacter.description}</Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
