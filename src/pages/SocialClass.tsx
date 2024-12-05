import { Typography, Paper, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SocialClassView from '../components/SocialClassView';

export default function SocialClass() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-cormorant text-4xl md:text-5xl text-sage-900 mb-4">
          Social Class in Jane Austen's Works
        </h1>
        <p className="text-sage-600 text-lg max-w-3xl mx-auto mb-6">
          An analysis of how social class shapes character relationships, marriage prospects, and social mobility across Austen's novels
          and their modern retellings.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <Chip
            label="Class Mobility"
            sx={{
              bgcolor: '#4A5D52',
              color: 'white',
              '&:hover': { bgcolor: '#3A4D42' }
            }}
          />
          <Chip
            label="Marriage Market"
            sx={{
              bgcolor: '#5B6E65',
              color: 'white',
              '&:hover': { bgcolor: '#4B5E55' }
            }}
          />
          <Chip
            label="Social Status"
            sx={{
              bgcolor: '#6B7F75',
              color: 'white',
              '&:hover': { bgcolor: '#5B6F65' }
            }}
          />
          <Chip
            label="Wealth & Property"
            sx={{
              bgcolor: '#7C8F86',
              color: 'white',
              '&:hover': { bgcolor: '#6C7F76' }
            }}
          />
        </div>
      </div>

      {/* Interactive View */}
      <Paper className="mb-8 rounded-lg border border-sage-200" elevation={0}>
        <div className="p-6 md:p-8">
          <Typography variant="h5" className="font-cormorant text-2xl text-sage-900 mb-4">
            Interactive Class Analysis
          </Typography>
          <div className="bg-sage-50 p-6 rounded-lg mb-6">
            <Typography variant="h6" className="font-cormorant text-xl text-sage-800 mb-3">
              Explore Social Class Differences
            </Typography>
            <div className="space-y-4 text-sage-700">
              <div className="mb-4">
                <p className="text-sage-800 font-medium mb-2">How to Compare Characters:</p>
                <div className="pl-4 space-y-2">
                  <p className="leading-relaxed flex items-start">
                    <span className="text-sage-900 font-semibold mr-2">1.</span>
                    Select your first character by clicking on any character card below
                  </p>
                  <p className="leading-relaxed flex items-start">
                    <span className="text-sage-900 font-semibold mr-2">2.</span>
                    Choose a second character to initiate the comparison
                  </p>
                  <p className="leading-relaxed flex items-start">
                    <span className="text-sage-900 font-semibold mr-2">3.</span>
                    Examine their social positions, incomes, and circumstances in the comparison view
                  </p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sage-800 font-medium mb-2">Suggested Comparisons:</p>
                <ul className="list-disc list-inside space-y-1 text-sage-600">
                  <li>Mr. Darcy vs. Elizabeth Bennet - Explore the class divide in courtship</li>
                  <li>The Bennet Family vs. The Servants - Understand the full spectrum of social hierarchy</li>
                  <li>Upper Class vs. Working Class - See the economic disparities of Regency England</li>
                </ul>
              </div>
              <p className="text-sage-600 italic border-l-2 border-sage-300 pl-4 mt-4">
                💡 Tip: Compare characters from different social classes to understand how wealth, status, and opportunities
                varied dramatically in Austen's world.
              </p>
            </div>
          </div>
          <SocialClassView />
        </div>
      </Paper>

      {/* Character Analysis Section */}
      <Paper className="mb-8 rounded-lg border border-sage-200" elevation={0}>
        <div className="p-6 md:p-8">
          <Typography variant="h5" className="font-cormorant text-2xl text-sage-900 mb-6">
            Character Studies Across Class Lines
          </Typography>

          <Accordion
            defaultExpanded
            sx={{
              border: '1px solid #E2E8F0',
              '&:before': { display: 'none' },
              borderRadius: '0.5rem',
              mb: 2,
              '&:first-of-type': { borderRadius: '0.5rem' },
              '&:last-of-type': { borderRadius: '0.5rem' }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-sage-600" />}
              className="bg-sage-50 hover:bg-sage-100"
            >
              <Typography className="font-cormorant text-xl text-sage-800">
                Pride and Prejudice: The Economics of Marriage
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    Upper Class
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>Mr. Darcy (£10,000 per year)</strong>: Represents the pinnacle of landed gentry, whose wealth
                      allows him to transcend local social barriers. His initial pride stems from his position, but his
                      character development shows wealth doesn't guarantee happiness or love.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>Lady Catherine de Bourgh</strong>: Embodies the aristocracy's resistance to social mobility,
                      particularly in her opposition to Darcy and Elizabeth's marriage. Her character critiques the
                      assumption that high birth equals moral superiority.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    Middle & Lower Classes
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>The Bennet Family</strong>: Despite their genteel status, their precarious financial position
                      (with the entailed estate) demonstrates the vulnerability of women in the period. Mrs. Bennet's
                      anxiety about her daughters' marriages stems from real economic concerns.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>The Servants (via Longbourn)</strong>: Jo Baker's retelling gives voice to characters like
                      Sarah and Mrs. Hill, revealing the hidden labor that maintains the genteel lifestyle of the main characters.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: '1px solid #E2E8F0',
              '&:before': { display: 'none' },
              borderRadius: '0.5rem',
              mb: 2
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-sage-600" />}
              className="bg-sage-50 hover:bg-sage-100"
            >
              <Typography className="font-cormorant text-xl text-sage-800">
                Mansfield Park: Moral Worth vs. Social Status
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    The Privileged Circle
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>The Bertram Family</strong>: Sir Thomas's wealth from colonial enterprises in Antigua
                      raises questions about the source of aristocratic wealth. His children's poor moral education
                      despite their privileged upbringing challenges assumptions about class and character.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>Mary and Henry Crawford</strong>: Their London sophistication and wealth mask moral
                      bankruptcy, contrasting with Fanny's humble virtue. They represent the corruption of urban wealth
                      versus rural values.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    The Dependent Relations
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>Fanny Price</strong>: Her position as a poor relation taken in by wealthy relatives
                      highlights the complex dynamics of dependency and gratitude. Her moral strength despite her low
                      status challenges class-based assumptions about worth.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>The Price Family in Portsmouth</strong>: Their cramped, chaotic household provides a
                      stark contrast to Mansfield's luxury, highlighting the material realities of class difference
                      in the period.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: '1px solid #E2E8F0',
              '&:before': { display: 'none' },
              borderRadius: '0.5rem'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-sage-600" />}
              className="bg-sage-50 hover:bg-sage-100"
            >
              <Typography className="font-cormorant text-xl text-sage-800">
                Contemporary Perspectives: Modern Retellings
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    Pride by Ibi Zoboi
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>Zuri Benitez</strong>: Reimagines Elizabeth Bennet as a proud Afro-Latina teenager in
                      Brooklyn, exploring how gentrification and cultural identity intersect with class in contemporary
                      America.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>Darius Darcy</strong>: As a wealthy African American teenager, his character explores the
                      complexities of privilege within modern racial and social contexts, updating Austen's examination
                      of pride and prejudice.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className="font-cormorant text-lg text-sage-800 mb-3">
                    Longbourn's Legacy
                  </Typography>
                  <div className="space-y-4 text-sage-700">
                    <Typography paragraph className="leading-relaxed">
                      <strong>The Servants' Perspective</strong>: Baker's novel reveals the physical labor, limited
                      opportunities, and complex relationships that supported the genteel world of Pride and Prejudice,
                      giving voice to historically silenced characters.
                    </Typography>
                    <Typography paragraph className="leading-relaxed">
                      <strong>Class Intersections</strong>: Through characters like James Smith, the novel explores how
                      war, servitude, and social mobility operated for those below stairs, expanding our understanding
                      of Austen's world.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>

      {/* Critical Analysis */}
      <Paper className="rounded-lg border border-sage-200" elevation={0}>
        <div className="p-6 md:p-8">
          <Typography variant="h5" className="font-cormorant text-2xl text-sage-900 mb-6">
            Critical Insights
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="bg-sage-50 p-6 rounded-lg">
                <Typography className="font-cormorant text-xl text-sage-800 mb-3">
                  Economic Realities
                </Typography>
                <Typography className="text-sage-700 leading-relaxed">
                  Austen's precise attention to characters' incomes and property reflects the real economic pressures
                  that shaped marriage choices and social mobility in the Regency period. Her novels acknowledge both
                  the practical necessity of financial security and its moral dangers.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="bg-sage-50 p-6 rounded-lg">
                <Typography className="font-cormorant text-xl text-sage-800 mb-3">
                  Social Mobility
                </Typography>
                <Typography className="text-sage-700 leading-relaxed">
                  Through characters like Emma Woodhouse and Elizabeth Bennet, Austen explores the possibilities and
                  limitations of social mobility through marriage, education, and moral development, while acknowledging
                  the rigid class structures of her time.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="bg-sage-50 p-6 rounded-lg">
                <Typography className="font-cormorant text-xl text-sage-800 mb-3">
                  Modern Relevance
                </Typography>
                <Typography className="text-sage-700 leading-relaxed">
                  Contemporary adaptations like Pride and Longbourn demonstrate how Austen's exploration of class,
                  privilege, and social mobility remains relevant to modern discussions of inequality, opportunity,
                  and social justice.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
