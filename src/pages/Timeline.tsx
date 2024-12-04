import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Chip, IconButton, Tooltip, Tabs, Tab } from '@mui/material';
import { Help } from '@mui/icons-material';
import { TimelineEvent } from '../types/timeline';
import InteractiveTimeline from '../components/timeline/InteractiveTimeline';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`timeline-tabpanel-${index}`}
      aria-labelledby={`timeline-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Timeline() {
  const [selectedType, setSelectedType] = useState<'all' | 'works' | 'context' | 'legacy' | 'adaptations'>('all');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Timeline data focused on course texts and their context
  const timelineEvents: TimelineEvent[] = [
    // Austen's Works
    {
      year: 1787,
      type: 'works',
      title: 'Love and Freindship',
      description: "Early epistolary work from Austen's juvenilia, showing her early satirical style",
      significance: 'Demonstrates Austen\'s early critique of sensibility and romantic conventions'
    },
    {
      year: 1795,
      type: 'works',
      title: 'Elinor and Marianne (First Draft)',
      description: 'Early epistolary version of what would become Sense and Sensibility',
      significance: 'Shows development of Austen\'s craft from letters to narrative form'
    },
    {
      year: 1797,
      type: 'works',
      title: 'First Impressions (Original P&P)',
      description: 'Original version of Pride and Prejudice, rejected by publisher Thomas Cadell',
      significance: 'Reveals the evolution of her most famous work'
    },
    {
      year: 1811,
      type: 'works',
      title: 'Sense and Sensibility Published',
      description: 'Austen\'s first published novel explores the tension between emotional expression and rational restraint through the Dashwood sisters.',
      novel: 'sense-and-sensibility',
      significance: 'Establishes Austen\'s recurring theme of balancing heart and mind in relationships.'
    },
    {
      year: 1813,
      type: 'works',
      title: 'Pride and Prejudice Published',
      description: 'A masterful examination of hasty judgments and social prejudices through Elizabeth Bennet\'s journey.',
      novel: 'pride-and-prejudice',
      significance: 'Critiques the marriage market while exploring personal growth and social mobility.'
    },
    {
      year: 1814,
      type: 'works',
      title: 'Mansfield Park Published',
      description: 'Through Fanny Price\'s story, Austen examines moral integrity in a materialistic society.',
      novel: 'mansfield-park',
      significance: 'Presents Austen\'s most direct critique of social corruption and moral decay.'
    },
    {
      year: 1818,
      type: 'works',
      title: 'Northanger Abbey Published (Posthumously)',
      description: 'A playful parody of Gothic novels that examines the relationship between fiction and reality.',
      novel: 'northanger-abbey',
      significance: 'Demonstrates Austen\'s literary awareness and critique of reading practices.'
    },

    // Historical and Cultural Context
    {
      year: 1792,
      type: 'context',
      title: 'Vindication of the Rights of Woman',
      description: 'Mary Wollstonecraft publishes feminist treatise',
      significance: 'Contemporary debates about women\'s education and rights that appear in Austen\'s works'
    },
    {
      year: 1795,
      type: 'context',
      title: 'Marriage Act Amendment',
      description: 'Required separate residence for 6 weeks before marriage, affecting courtship practices.',
      significance: 'Provides legal context for marriage plots and elopement concerns in Pride and Prejudice and Mansfield Park.'
    },
    {
      year: 1799,
      type: 'context',
      title: 'Income Tax Introduction',
      description: 'First British income tax introduced to fund Napoleonic Wars',
      significance: 'Economic context for character incomes mentioned in novels'
    },
    {
      year: 1801,
      type: 'context',
      title: 'Move to Bath',
      description: 'Austen family relocates to Bath, a period of reduced writing',
      significance: 'Influenced her portrayal of Bath in Northanger Abbey and other works'
    },
    {
      year: 1805,
      type: 'context',
      title: 'Battle of Trafalgar & Death of Rev. Austen',
      description: 'Major naval victory and death of Jane\'s father leading to financial uncertainty',
      significance: 'Influences on naval themes and women\'s financial dependence in her novels'
    },

    // Legacy and Critical Reception
    {
      year: 1870,
      type: 'legacy',
      title: 'Memoir of Jane Austen',
      description: 'James Edward Austen-Leigh publishes first major biography',
      significance: 'Shaped Victorian and later reception of Austen'
    },
    {
      year: 2009,
      type: 'legacy',
      title: 'A Truth Universally Acknowledged',
      description: 'Collection of critical essays on why we read Jane Austen',
      significance: 'Modern critical perspectives on Austen\'s enduring appeal'
    },

    // Modern Adaptations and Retellings
    {
      year: 1995,
      type: 'adaptations',
      title: 'BBC Pride and Prejudice',
      description: 'Colin Firth/Jennifer Ehle adaptation',
      significance: 'Influential adaptation that sparked renewed interest in Austen'
    },
    {
      year: 2008,
      type: 'adaptations',
      title: 'Lost in Austen',
      description: 'Time-travel adaptation mixing modern perspective with P&P',
      significance: 'Example of creative modern reinterpretation mentioned in course'
    },
    {
      year: 2013,
      type: 'adaptations',
      title: 'Longbourn by Jo Baker',
      description: 'A retelling of Pride and Prejudice from the servants\' perspective',
      significance: 'Offers a "downstairs" perspective on Austen\'s world'
    },
    {
      year: 2015,
      type: 'adaptations',
      title: 'Pride by Ibi Zoboi',
      description: 'A contemporary YA retelling of Pride and Prejudice set in Brooklyn',
      significance: 'Demonstrates the continued relevance of Austen\'s themes in modern, diverse contexts'
    }
  ];

  const filteredEvents = timelineEvents
    .filter(event => selectedType === 'all' || event.type === selectedType)
    .sort((a, b) => a.year - b.year);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="timeline views"
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab label="Interactive Timeline" />
          <Tab label="Basic Timeline" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <InteractiveTimeline events={timelineEvents} />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" component="h1">
              Literary Timeline & Historical Context
            </Typography>
            <Tooltip title="Explore the chronological development of Austen's works and their historical/literary context" arrow>
              <IconButton size="small" sx={{ ml: 2 }}>
                <Help />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Discover how Austen's novels interact with their historical moment and continue to inspire contemporary retellings.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip
                label="All Events"
                onClick={() => setSelectedType('all')}
                color={selectedType === 'all' ? 'primary' : 'default'}
              />
              <Chip
                label="Austen's Works"
                onClick={() => setSelectedType('works')}
                color={selectedType === 'works' ? 'primary' : 'default'}
              />
              <Chip
                label="Historical Context"
                onClick={() => setSelectedType('context')}
                color={selectedType === 'context' ? 'secondary' : 'default'}
              />
              <Chip
                label="Legacy & Reception"
                onClick={() => setSelectedType('legacy')}
                color={selectedType === 'legacy' ? 'warning' : 'default'}
              />
              <Chip
                label="Modern Adaptations"
                onClick={() => setSelectedType('adaptations')}
                color={selectedType === 'adaptations' ? 'success' : 'default'}
              />
            </Box>
          </Box>

          <Grid container spacing={3}>
            {filteredEvents.map((event, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 4,
                      backgroundColor: event.type === 'works'
                        ? 'primary.main'
                        : event.type === 'context'
                        ? 'secondary.main'
                        : event.type === 'legacy'
                        ? 'warning.main'
                        : 'success.main'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="h6" component="h2">
                        {event.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                        {event.year}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {event.description}
                      </Typography>
                      {event.significance && (
                        <Typography variant="body2" color="text.secondary">
                          <strong>Significance:</strong> {event.significance}
                        </Typography>
                      )}
                    </Box>
                    <Chip
                      label={event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      size="small"
                      color={
                        event.type === 'works'
                          ? 'primary'
                          : event.type === 'context'
                          ? 'secondary'
                          : event.type === 'legacy'
                          ? 'warning'
                          : 'success'
                      }
                      sx={{ ml: 2 }}
                    />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
