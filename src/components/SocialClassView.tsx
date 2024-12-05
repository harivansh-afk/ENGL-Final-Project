import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Tooltip, Card, CardContent, Chip, Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
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
    } else {
      // Deselect if clicking the same character
      setSelectedCharacter(null);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCharacter(null);
    setComparisonCharacter(null);
  };

  // Color constants for the gradient
  const pyramidColors = {
    upper: {
      start: '#4A5D52', // darker sage
      end: '#6B7F75'    // lighter sage
    },
    middle: {
      start: '#5B6E65',
      end: '#7C8F86'
    },
    lower: {
      start: '#6B7F75',
      end: '#8C9F96'
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Grid container spacing={3}>
        {/* Social Pyramid */}
        <Grid item xs={12} md={6}>
          <Card className="border border-sage-200 hover:border-sage-300 transition-all">
            <CardContent className="p-6">
              <Typography variant="h5" className="font-cormorant text-sage-900 mb-4">
                Social Hierarchy
              </Typography>

              <Box sx={{ position: 'relative', height: 350, mb: 4 }}>
                {socialClasses.map((socialClass, index) => {
                  const colors = index === 0 ? pyramidColors.upper :
                               index === 1 ? pyramidColors.middle :
                               pyramidColors.lower;
                  return (
                    <Tooltip
                      key={socialClass.name}
                      title={
                        <Box className="p-4 max-w-md">
                          <Typography variant="subtitle1" className="font-cormorant text-sage-900 mb-2 font-semibold">
                            {socialClass.name}
                          </Typography>
                          <Typography variant="body2" className="text-sage-700 mb-3">
                            {socialClass.description}
                          </Typography>
                          <Divider className="bg-sage-200 my-3" />
                          <div className="space-y-2">
                            <Typography variant="caption" className="text-sage-700 block font-medium">
                              Income Range: {socialClass.incomeRange}
                            </Typography>
                            <Typography variant="caption" className="text-sage-700 block font-medium">
                              Modern Equivalent: {socialClass.modernEquivalent}
                            </Typography>
                          </div>
                          <Divider className="bg-sage-200 my-3" />
                          <div className="space-y-2">
                            <Typography variant="caption" className="text-sage-800 font-semibold block">
                              Key Characteristics:
                            </Typography>
                            <ul className="list-disc list-inside text-sage-700 text-sm space-y-1">
                              {socialClass.characteristics.map((char, idx) => (
                                <li key={idx}>{char}</li>
                              ))}
                            </ul>
                          </div>
                        </Box>
                      }
                      arrow
                      placement="right"
                      classes={{
                        tooltip: "bg-white shadow-lg",
                        arrow: "text-white"
                      }}
                      sx={{
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "white",
                          color: "inherit",
                          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                          opacity: 1,
                          maxWidth: "none"
                        },
                        "& .MuiTooltip-arrow": {
                          color: "white",
                          "&::before": {
                            backgroundColor: "white",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
                          }
                        }
                      }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          width: `${100 - index * 20}%`,
                          height: 90,
                          transform: `translateX(-50%) translateY(${index * 110}px)`,
                          background: `linear-gradient(45deg, ${colors.start}, ${colors.end})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: `translateX(-50%) translateY(${index * 110}px) scale(1.02)`,
                            boxShadow: 3
                          }
                        }}
                      >
                        <Typography variant="h6" className="text-white font-cormorant">
                          {socialClass.name}
                        </Typography>
                      </Paper>
                    </Tooltip>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Character Examples */}
        <Grid item xs={12} md={6}>
          <Card className="border border-sage-200 hover:border-sage-300 transition-all">
            <CardContent className="p-6">
              <Typography variant="h5" className="font-cormorant text-sage-900 mb-4">
                Notable Characters
              </Typography>
              {selectedCharacter && (
                <div className="mb-4 p-3 bg-sage-50 border border-sage-200 rounded-lg">
                  <Typography className="text-sage-700 text-sm">
                    <span className="font-semibold">{selectedCharacter.name}</span> selected.
                    Click another character to compare, or click again to deselect.
                  </Typography>
                </div>
              )}
              <div className="space-y-4">
                {characters.map((character) => (
                  <Card
                    key={character.id}
                    onClick={() => handleCharacterClick(character)}
                    className={`
                      border transition-all cursor-pointer
                      ${selectedCharacter?.id === character.id
                        ? 'border-sage-500 bg-sage-50 shadow-md transform scale-[1.02]'
                        : 'border-sage-200 bg-white hover:border-sage-300 hover:shadow-sm hover:bg-sage-50/30'
                      }
                    `}
                    sx={{
                      position: 'relative',
                      '&:after': selectedCharacter?.id === character.id ? {
                        content: '""',
                        position: 'absolute',
                        left: -2,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 4,
                        height: '70%',
                        backgroundColor: '#4A5D52',
                        borderRadius: '0 2px 2px 0'
                      } : {}
                    }}
                  >
                    <CardContent className="p-4">
                      <Box className="flex justify-between items-start">
                        <div>
                          <Typography variant="h6" className={`font-cormorant ${selectedCharacter?.id === character.id ? 'text-sage-900' : 'text-sage-800'}`}>
                            {character.name}
                          </Typography>
                          <Typography variant="body2" className="text-sage-600 mb-2">
                            {character.novel}
                          </Typography>
                        </div>
                        <Chip
                          label={character.socialClass.charAt(0).toUpperCase() + character.socialClass.slice(1)}
                          size="small"
                          sx={{
                            bgcolor: character.socialClass === 'upper' ? pyramidColors.upper.start :
                                    character.socialClass === 'middle' ? pyramidColors.middle.start :
                                    pyramidColors.lower.start,
                            color: 'white',
                            fontFamily: '"Lato", sans-serif',
                            transition: 'all 0.2s ease',
                            transform: selectedCharacter?.id === character.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                      </Box>
                      <Box className="mt-2 text-sage-700">
                        <div className="flex justify-between text-sm">
                          <span>Annual Income:</span>
                          <span className="font-semibold">{character.annualIncome}</span>
                        </div>
                        <div className="flex justify-between text-sm text-sage-600">
                          <span>Modern Equivalent:</span>
                          <span>{character.modernEquivalent}</span>
                        </div>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Comparison Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          className: "rounded-lg overflow-hidden"
        }}
      >
        <DialogTitle className="bg-sage-700 text-white font-cormorant py-4">
          Character Comparison
        </DialogTitle>
        <DialogContent className="p-6">
          {selectedCharacter && comparisonCharacter && (
            <Grid container spacing={4}>
              {[selectedCharacter, comparisonCharacter].map((char, index) => (
                <Grid item xs={6} key={char.id}>
                  <Typography variant="h6" className="font-cormorant text-sage-900 mb-3">
                    {char.name}
                  </Typography>
                  <Chip
                    label={char.socialClass.charAt(0).toUpperCase() + char.socialClass.slice(1)}
                    size="small"
                    sx={{
                      bgcolor: char.socialClass === 'upper' ? pyramidColors.upper.start :
                              char.socialClass === 'middle' ? pyramidColors.middle.start :
                              pyramidColors.lower.start,
                      color: 'white',
                      fontFamily: '"Lato", sans-serif'
                    }}
                  />
                  <div className="space-y-3 text-sage-700 mt-4">
                    <div>
                      <Typography variant="body2" className="text-sage-600 font-semibold">
                        Novel
                      </Typography>
                      <Typography variant="body1">
                        {char.novel}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body2" className="text-sage-600 font-semibold">
                        Annual Income
                      </Typography>
                      <Typography variant="body1">
                        {char.annualIncome}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body2" className="text-sage-600 font-semibold">
                        Modern Equivalent
                      </Typography>
                      <Typography variant="body1">
                        {char.modernEquivalent}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body2" className="text-sage-600 font-semibold">
                        Description
                      </Typography>
                      <Typography variant="body1" className="text-sage-700 leading-relaxed">
                        {char.description}
                      </Typography>
                    </div>
                  </div>
                  {index === 0 && (
                    <Divider orientation="vertical" className="absolute right-0 top-0 bottom-0 bg-sage-200" />
                  )}
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
