import React from 'react';
import { Box, Typography, Paper, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SocialClassView from '../components/SocialClassView';

export default function SocialClass() {
  return (
    <Box sx={{ width: '100%', p: 3, maxWidth: 1200, mx: 'auto' }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom fontFamily="cormorant" color="primary.main">
          Social Class in Jane Austen's Works
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
          An analysis of how social class shapes character relationships, marriage prospects, and social mobility across Austen's novels
          and their modern retellings.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip label="Class Mobility" color="primary" />
          <Chip label="Marriage Market" color="secondary" />
          <Chip label="Social Status" color="success" />
          <Chip label="Wealth & Property" color="warning" />
        </Box>
      </Box>

      {/* Character Analysis Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom color="primary" fontFamily="cormorant">
          Character Studies Across Class Lines
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="secondary">Pride and Prejudice: The Economics of Marriage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>Upper Class</Typography>
                <Typography paragraph>
                  <strong>Mr. Darcy (£10,000 per year)</strong>: Represents the pinnacle of landed gentry, whose wealth
                  allows him to transcend local social barriers. His initial pride stems from his position, but his
                  character development shows wealth doesn't guarantee happiness or love.
                </Typography>
                <Typography paragraph>
                  <strong>Lady Catherine de Bourgh</strong>: Embodies the aristocracy's resistance to social mobility,
                  particularly in her opposition to Darcy and Elizabeth's marriage. Her character critiques the
                  assumption that high birth equals moral superiority.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>Middle & Lower Classes</Typography>
                <Typography paragraph>
                  <strong>The Bennet Family</strong>: Despite their genteel status, their precarious financial position
                  (with the entailed estate) demonstrates the vulnerability of women in the period. Mrs. Bennet's
                  anxiety about her daughters' marriages stems from real economic concerns.
                </Typography>
                <Typography paragraph>
                  <strong>The Servants (via Longbourn)</strong>: Jo Baker's retelling gives voice to characters like
                  Sarah and Mrs. Hill, revealing the hidden labor that maintains the genteel lifestyle of the main characters.
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="secondary">Mansfield Park: Moral Worth vs. Social Status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>The Privileged Circle</Typography>
                <Typography paragraph>
                  <strong>The Bertram Family</strong>: Sir Thomas's wealth from colonial enterprises in Antigua
                  raises questions about the source of aristocratic wealth. His children's poor moral education
                  despite their privileged upbringing challenges assumptions about class and character.
                </Typography>
                <Typography paragraph>
                  <strong>Mary and Henry Crawford</strong>: Their London sophistication and wealth mask moral
                  bankruptcy, contrasting with Fanny's humble virtue. They represent the corruption of urban wealth
                  versus rural values.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>The Dependent Relations</Typography>
                <Typography paragraph>
                  <strong>Fanny Price</strong>: Her position as a poor relation taken in by wealthy relatives
                  highlights the complex dynamics of dependency and gratitude. Her moral strength despite her low
                  status challenges class-based assumptions about worth.
                </Typography>
                <Typography paragraph>
                  <strong>The Price Family in Portsmouth</strong>: Their cramped, chaotic household provides a
                  stark contrast to Mansfield's luxury, highlighting the material realities of class difference
                  in the period.
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="secondary">Contemporary Perspectives: Modern Retellings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>Pride by Ibi Zoboi</Typography>
                <Typography paragraph>
                  <strong>Zuri Benitez</strong>: Reimagines Elizabeth Bennet as a proud Afro-Latina teenager in
                  Brooklyn, exploring how gentrification and cultural identity intersect with class in contemporary
                  America.
                </Typography>
                <Typography paragraph>
                  <strong>Darius Darcy</strong>: As a wealthy African American teenager, his character explores the
                  complexities of privilege within modern racial and social contexts, updating Austen's examination
                  of pride and prejudice.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="primary" gutterBottom>Longbourn's Legacy</Typography>
                <Typography paragraph>
                  <strong>The Servants' Perspective</strong>: Baker's novel reveals the physical labor, limited
                  opportunities, and complex relationships that supported the genteel world of Pride and Prejudice,
                  giving voice to historically silenced characters.
                </Typography>
                <Typography paragraph>
                  <strong>Class Intersections</strong>: Through characters like James Smith, the novel explores how
                  war, servitude, and social mobility operated for those below stairs, expanding our understanding
                  of Austen's world.
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* Interactive View */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom color="primary" fontFamily="cormorant" sx={{ mb: 3 }}>
          Interactive Class Analysis
        </Typography>
        <SocialClassView />
      </Paper>

      {/* Critical Analysis */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom color="primary" fontFamily="cormorant">
          Critical Insights
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Economic Realities
              </Typography>
              <Typography>
                Austen's precise attention to characters' incomes and property reflects the real economic pressures
                that shaped marriage choices and social mobility in the Regency period. Her novels acknowledge both
                the practical necessity of financial security and its moral dangers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Social Mobility
              </Typography>
              <Typography>
                Through characters like Emma Woodhouse and Elizabeth Bennet, Austen explores the possibilities and
                limitations of social mobility through marriage, education, and moral development, while acknowledging
                the rigid class structures of her time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Modern Relevance
              </Typography>
              <Typography>
                Contemporary adaptations like Pride and Longbourn demonstrate how Austen's exploration of class,
                privilege, and social mobility remains relevant to modern discussions of inequality, opportunity,
                and social justice.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
