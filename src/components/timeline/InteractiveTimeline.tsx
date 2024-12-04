import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, ButtonGroup, Button, IconButton, Divider, Chip } from '@mui/material';
import { TimelineEvent } from '../../types/timeline';
import { DragIndicator, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

interface Props {
  events: TimelineEvent[];
}

// Define major time periods with matching category colors
const timePeriods = [
  { start: 1775, end: 1785, name: 'Early Life', color: 'rgba(74, 93, 82, 0.1)' },
  { start: 1786, end: 1800, name: 'Juvenilia & Early Drafts', color: 'rgba(74, 93, 82, 0.15)' },
  { start: 1801, end: 1817, name: 'Publication Years', color: 'rgba(74, 93, 82, 0.2)' },
  { start: 1818, end: 1900, name: 'Victorian Reception', color: 'rgba(74, 93, 82, 0.25)' },
  { start: 1901, end: 2000, name: '20th Century', color: 'rgba(74, 93, 82, 0.3)' },
  { start: 2001, end: new Date().getFullYear(), name: 'Contemporary', color: 'rgba(74, 93, 82, 0.35)' }
];

// Timeline data focused on course texts and their context
const timelineEvents: TimelineEvent[] = [
  // Works - Published and Unpublished
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

export default function InteractiveTimeline({ events = timelineEvents }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>(['works', 'context', 'legacy', 'adaptations']);
  const [dragPosition, setDragPosition] = useState<number>(50);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Extended year range
  const displayMinYear = Math.min(...events.map(e => e.year)) - 10;
  const displayMaxYear = Math.max(...events.map(e => e.year)) + 10;
  const actualMinYear = displayMinYear;
  const actualMaxYear = displayMaxYear;
  const timeSpan = actualMaxYear - actualMinYear;

  // Generate year markers
  const yearMarkers = [];
  const yearStep = Math.ceil(timeSpan / 15);
  for (let year = actualMinYear; year <= actualMaxYear; year += yearStep) {
    yearMarkers.push(year);
  }
  if (yearMarkers[yearMarkers.length - 1] !== actualMaxYear) {
    yearMarkers.push(actualMaxYear);
  }

  // Add scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollLeft } = timelineRef.current;
        const totalWidth = timelineRef.current.scrollWidth;
        const position = (scrollLeft / totalWidth) * 100;
        setDragPosition(position);
      }
    };

    timelineRef.current?.addEventListener('scroll', handleScroll);
    return () => timelineRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateEvents = (direction: 'prev' | 'next') => {
    // Sort filtered events chronologically
    const filteredEvents = events
      .filter(event => activeFilters.includes(event.type))
      .sort((a, b) => a.year - b.year);

    if (filteredEvents.length === 0) return;

    if (!selectedEvent) {
      setSelectedEvent(direction === 'next' ? filteredEvents[0] : filteredEvents[filteredEvents.length - 1]);
      return;
    }

    // Find the current event's index in the filtered array
    const currentIndex = filteredEvents.findIndex(e => e.year === selectedEvent.year && e.title === selectedEvent.title);
    let newIndex;

    if (direction === 'next') {
      newIndex = currentIndex < filteredEvents.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredEvents.length - 1;
    }

    const newEvent = filteredEvents[newIndex];
    setSelectedEvent(newEvent);

    // Calculate new drag position and scroll into view
    if (timelineRef.current) {
      const timelineWidth = timelineRef.current.clientWidth;
      const totalWidth = timelineRef.current.scrollWidth;
      const newPosition = ((newEvent.year - actualMinYear) / timeSpan) * 100;
      setDragPosition(newPosition);

      const scrollPosition = (newPosition / 100) * totalWidth - (timelineWidth / 2);
      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current && timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const scrollLeft = timelineRef.current.scrollLeft;
      const position = ((e.clientX - rect.left + scrollLeft) / (rect.width * 3)) * 100;
      setDragPosition(Math.max(0, Math.min(100, position)));

      const currentYear = (position / 100) * timeSpan + actualMinYear;
      // Only consider events that are currently filtered
      const filteredEvents = events.filter(event => activeFilters.includes(event.type));
      // Find nearest event among filtered events
      const nearestEvent = filteredEvents.reduce((prev, curr) => {
        return Math.abs(curr.year - currentYear) < Math.abs(prev.year - currentYear) ? curr : prev;
      }, filteredEvents[0]);

      // Only set selected event if we have filtered events and are within 1 year of the nearest event
      if (filteredEvents.length > 0 && Math.abs(nearestEvent.year - currentYear) <= 1) {
        setSelectedEvent(nearestEvent);
      } else {
        setSelectedEvent(null);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (timelineRef.current) {
      isDragging.current = true;
      const rect = timelineRef.current.getBoundingClientRect();
      const scrollLeft = timelineRef.current.scrollLeft;
      const position = ((e.clientX - rect.left + scrollLeft) / (rect.width * 3)) * 100;
      setDragPosition(Math.max(0, Math.min(100, position)));

      const currentYear = (position / 100) * timeSpan + actualMinYear;
      // Only consider events that are currently filtered
      const filteredEvents = events.filter(event => activeFilters.includes(event.type));
      // Find nearest event among filtered events
      const nearestEvent = filteredEvents.reduce((prev, curr) => {
        return Math.abs(curr.year - currentYear) < Math.abs(prev.year - currentYear) ? curr : prev;
      }, filteredEvents[0]);

      // Only set selected event if we have filtered events and are within 1 year of the nearest event
      if (filteredEvents.length > 0 && Math.abs(nearestEvent.year - currentYear) <= 1) {
        setSelectedEvent(nearestEvent);
      } else {
        setSelectedEvent(null);
      }
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'works':
        return {
          main: '#4A5D52',
          light: '#E5E9E7'
        };
      case 'context':
        return {
          main: '#5B6E65',
          light: '#D5DCD8'
        };
      case 'legacy':
        return {
          main: '#6B7F75',
          light: '#C5CEC9'
        };
      default: // adaptations
        return {
          main: '#7C8F86',
          light: '#B5C0BA'
        };
    }
  };

  const filteredEvents = events.filter(event => activeFilters.includes(event.type));

  // Add click handler for events
  const handleEventClick = (event: TimelineEvent) => {
    if (activeFilters.includes(event.type)) {
      setSelectedEvent(event);
      // Update drag position to match clicked event
      const newPosition = ((event.year - actualMinYear) / timeSpan) * 100;
      setDragPosition(newPosition);

      // Scroll to the clicked event
      if (timelineRef.current) {
        const timelineWidth = timelineRef.current.clientWidth;
        const totalWidth = timelineRef.current.scrollWidth;
        const scrollPosition = (newPosition / 100) * totalWidth - (timelineWidth / 2);
        timelineRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <ButtonGroup variant="outlined" size="small">
          <Button
            onClick={() => toggleFilter('works')}
            variant={activeFilters.includes('works') ? 'contained' : 'outlined'}
            sx={{
              color: activeFilters.includes('works') ? 'white' : 'sage.700',
              borderColor: 'sage.300',
              bgcolor: activeFilters.includes('works') ? '#4A5D52' : 'transparent',
              '&:hover': {
                borderColor: 'sage.400',
                bgcolor: activeFilters.includes('works') ? '#3A4D42' : 'sage.50'
              }
            }}
          >
            Austen's Works
          </Button>
          <Button
            onClick={() => toggleFilter('context')}
            variant={activeFilters.includes('context') ? 'contained' : 'outlined'}
            sx={{
              color: activeFilters.includes('context') ? 'white' : 'sage.700',
              borderColor: 'sage.300',
              bgcolor: activeFilters.includes('context') ? '#5B6E65' : 'transparent',
              '&:hover': {
                borderColor: 'sage.400',
                bgcolor: activeFilters.includes('context') ? '#4B5E55' : 'sage.50'
              }
            }}
          >
            Historical Context
          </Button>
          <Button
            onClick={() => toggleFilter('legacy')}
            variant={activeFilters.includes('legacy') ? 'contained' : 'outlined'}
            sx={{
              color: activeFilters.includes('legacy') ? 'white' : 'sage.700',
              borderColor: 'sage.300',
              bgcolor: activeFilters.includes('legacy') ? '#6B7F75' : 'transparent',
              '&:hover': {
                borderColor: 'sage.400',
                bgcolor: activeFilters.includes('legacy') ? '#5B6F65' : 'sage.50'
              }
            }}
          >
            Legacy & Reception
          </Button>
          <Button
            onClick={() => toggleFilter('adaptations')}
            variant={activeFilters.includes('adaptations') ? 'contained' : 'outlined'}
            sx={{
              color: activeFilters.includes('adaptations') ? 'white' : 'sage.700',
              borderColor: 'sage.300',
              bgcolor: activeFilters.includes('adaptations') ? '#7C8F86' : 'transparent',
              '&:hover': {
                borderColor: 'sage.400',
                bgcolor: activeFilters.includes('adaptations') ? '#6C7F76' : 'sage.50'
              }
            }}
          >
            Modern Adaptations
          </Button>
        </ButtonGroup>
      </Box>

      {/* Timeline Container */}
      <Box sx={{ position: 'relative', mt: 6 }}>
        {/* Navigation Buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: 200,
            left: 0,
            right: 0,
            height: 0,
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <IconButton
            onClick={() => navigateEvents('prev')}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'sage.200',
              boxShadow: theme => `0 2px 8px ${alpha(theme.palette.common.black, 0.15)}`,
              width: 40,
              height: 40,
              pointerEvents: 'auto',
              color: 'sage.700',
              '&:hover': {
                bgcolor: 'sage.50',
                borderColor: 'sage.300',
                boxShadow: theme => `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`
              },
              '&:active': {
                bgcolor: 'sage.100'
              }
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => navigateEvents('next')}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(50%, -50%)',
              zIndex: 3,
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'sage.200',
              boxShadow: theme => `0 2px 8px ${alpha(theme.palette.common.black, 0.15)}`,
              width: 40,
              height: 40,
              pointerEvents: 'auto',
              color: 'sage.700',
              '&:hover': {
                bgcolor: 'sage.50',
                borderColor: 'sage.300',
                boxShadow: theme => `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`
              },
              '&:active': {
                bgcolor: 'sage.100'
              }
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Time Period Labels */}
        <Box sx={{
          position: 'absolute',
          top: -60,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          mb: 2,
          overflow: 'hidden'
        }}>
          {timePeriods.map((period) => {
            const startPos = ((period.start - actualMinYear) / timeSpan) * 100;
            const width = ((period.end - period.start) / timeSpan) * 100;
            return (
              <Box
                key={period.name}
                sx={{
                  position: 'absolute',
                  left: `${startPos}%`,
                  width: `${width}%`,
                  textAlign: 'center'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: 'inline-block',
                    bgcolor: period.color,
                    border: '1px solid',
                    borderColor: 'sage.200',
                    px: 2,
                    py: 0.5,
                    borderRadius: '16px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Typography
                    variant="caption"
                    className="font-cormorant text-sage-800"
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {period.name}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Box>

        {/* Main Timeline */}
        <Box
          ref={timelineRef}
          sx={{
            position: 'relative',
            height: 400,
            bgcolor: 'white',
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'sage.200',
            boxShadow: theme => `0 2px 12px ${alpha(theme.palette.common.black, 0.08)}`,
            overflow: 'hidden',
            cursor: 'pointer',
            userSelect: 'none',
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              height: 10,
              borderRadius: 4
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'rgba(0, 0, 0, 0.05)',
              borderRadius: 4,
              mx: 2
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'sage.400',
              borderRadius: 4,
              border: '2px solid',
              borderColor: 'white',
              '&:hover': {
                bgcolor: 'sage.500'
              }
            }
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <Box sx={{ width: '300%', height: '100%', position: 'relative' }}>
            {/* Single Continuous Background */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: `linear-gradient(to right,
                  rgba(74, 93, 82, 0.1) 0%,
                  rgba(74, 93, 82, 0.15) 20%,
                  rgba(74, 93, 82, 0.2) 40%,
                  rgba(74, 93, 82, 0.25) 60%,
                  rgba(74, 93, 82, 0.3) 80%,
                  rgba(74, 93, 82, 0.35) 100%
                )`,
                zIndex: 0
              }}
            />

            {/* Year Markers */}
            <Box sx={{
              position: 'absolute',
              top: 16,
              left: 0,
              right: 0,
              height: 40,
              display: 'flex',
              zIndex: 1
            }}>
              {yearMarkers.map((year) => {
                const isDecade = year % 10 === 0;
                return (
                  <Box
                    key={year}
                    sx={{
                      position: 'absolute',
                      left: `${((year - actualMinYear) / timeSpan) * 100}%`,
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      zIndex: 1
                    }}
                  >
                    <Box sx={{
                      width: isDecade ? 2 : 1,
                      height: isDecade ? 10 : 6,
                      bgcolor: isDecade ? 'sage.700' : 'sage.500',
                      opacity: isDecade ? 0.8 : 0.5
                    }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: isDecade ? 'sage.800' : 'sage.600',
                        mt: 0.5,
                        fontWeight: isDecade ? 600 : 400,
                        fontSize: isDecade ? '0.75rem' : '0.7rem',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {year}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Timeline Base Lines */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'translateY(-50%)',
                zIndex: 1
              }}
            >
              {/* White line */}
              <Box
                sx={{
                  width: '100%',
                  height: 2,
                  bgcolor: 'white',
                  position: 'absolute'
                }}
              />
              {/* Sage line */}
              <Box
                sx={{
                  width: '100%',
                  height: 1,
                  bgcolor: 'sage.300',
                  opacity: 0.5,
                  position: 'absolute'
                }}
              />
            </Box>

            {/* Events */}
            {filteredEvents.map((event, index) => {
              const position = ((event.year - actualMinYear) / timeSpan) * 100;
              const isTop = index % 2 === 0;
              const colors = getEventColor(event.type);
              const isSelected = selectedEvent?.year === event.year;
              const verticalPosition = isTop ? 30 : 70;

              return (
                <Box
                  key={`${event.year}-${event.title}`}
                  onClick={() => handleEventClick(event)}
                  sx={{
                    position: 'absolute',
                    left: `${position}%`,
                    top: `${verticalPosition}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isSelected ? 10 : 5,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translate(-50%, -50%) scale(1.1)',
                      zIndex: 15
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      height: 140
                    }}
                  >
                    {/* Top Connection Line */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 2,
                        height: '30px',
                        bgcolor: colors.main,
                        opacity: 0.5
                      }}
                    />

                    {/* Bottom Connection Line */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 2,
                        height: '30px',
                        bgcolor: colors.main,
                        opacity: 0.5
                      }}
                    />

                    {/* Event Dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: isSelected ? 16 : 12,
                        height: isSelected ? 16 : 12,
                        borderRadius: '50%',
                        bgcolor: colors.main,
                        transition: 'all 0.2s',
                        zIndex: 2,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '200%',
                          height: '200%',
                          borderRadius: '50%',
                          bgcolor: colors.light,
                          opacity: isSelected ? 1 : 0,
                          transition: 'all 0.2s'
                        }
                      }}
                    />

                    {/* Event Label */}
                    <Paper
                      elevation={isSelected ? 3 : 1}
                      sx={{
                        position: 'absolute',
                        top: isTop ? 'auto' : '70%',
                        bottom: isTop ? '70%' : 'auto',
                        p: 1.5,
                        maxWidth: 180,
                        minWidth: 120,
                        bgcolor: isSelected ? colors.light : 'background.paper',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.2s',
                        zIndex: isSelected ? 2 : 1,
                        mx: 2,
                        borderRadius: 2,
                        boxShadow: theme => isSelected
                          ? theme.shadows[3]
                          : `0 2px 4px ${alpha(theme.palette.common.black, 0.05)}`,
                        '&:hover': {
                          boxShadow: theme => `0 4px 8px ${alpha(theme.palette.common.black, 0.1)}`
                        }
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          textAlign: 'center',
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? 'text.primary' : 'text.secondary',
                          fontSize: '0.75rem',
                          lineHeight: 1.4,
                          whiteSpace: 'normal',
                          wordWrap: 'break-word'
                        }}
                      >
                        {event.title}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              );
            })}

            {/* Draggable Indicator */}
            <Box
              sx={{
                position: 'absolute',
                left: `${dragPosition}%`,
                top: 0,
                bottom: 0,
                width: 3,
                bgcolor: 'text.primary',
                transform: 'translateX(-50%)',
                zIndex: 3,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  bgcolor: 'background.paper',
                  border: '3px solid',
                  borderColor: 'text.primary'
                }
              }}
            >
              <DragIndicator
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'text.primary',
                  fontSize: 16
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Event Details Section */}
        {selectedEvent && (
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mt: 4,
              bgcolor: 'white',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'sage.200',
              transition: 'all 0.3s ease'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h5" gutterBottom className="font-cormorant text-sage-900">
                  {selectedEvent.title}
                </Typography>
                <Typography variant="subtitle1" className="text-sage-600">
                  {selectedEvent.year}
                </Typography>
              </Box>
              <Chip
                label={selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                size="small"
                sx={{
                  bgcolor: getEventColor(selectedEvent.type).main,
                  color: 'white'
                }}
              />
            </Box>

            <Divider sx={{ my: 2, borderColor: 'sage.200' }} />

            <Typography variant="body1" paragraph className="text-sage-700">
              {selectedEvent.description}
            </Typography>

            {selectedEvent.significance && (
              <Box sx={{ mt: 2, p: 2, bgcolor: 'sage.50', borderRadius: 1, border: '1px solid', borderColor: 'sage.200' }}>
                <Typography variant="subtitle2" className="text-sage-800 font-cormorant" gutterBottom>
                  Historical Significance
                </Typography>
                <Typography variant="body2" className="text-sage-600">
                  {selectedEvent.significance}
                </Typography>
              </Box>
            )}
          </Paper>
        )}
      </Box>
    </Box>
  );
}
