interface ThemeComparison {
  theme: string;
  description: string;
  appearances: {
    novel: string;
    manifestation: string;
    examples: {
      quote: string;
      context: string;
      analysis: string;
    }[];
    significance: string;
  }[];
}

interface CharacterType {
  archetype: string;
  description: string;
  examples: {
    novel: string;
    character: string;
    analysis: string;
    evolution: string;
    keyQuotes: {
      quote: string;
      context: string;
    }[];
  }[];
}

interface WritingStyleElement {
  technique: string;
  description: string;
  evolution: {
    novel: string;
    usage: string;
    examples: string[];
    significance: string;
  }[];
}

export const themeComparisons: ThemeComparison[] = [
  {
    theme: "Marriage and Economic Reality",
    description: "The intersection of marriage, economic necessity, and social mobility across Austen's works",
    appearances: [
      {
        novel: "Pride and Prejudice",
        manifestation: "Marriage market and social climbing",
        examples: [
          {
            quote: "It is a truth universally acknowledged...",
            context: "Opening line",
            analysis: "Establishes the economic premise of marriage in Regency society"
          }
        ],
        significance: "Direct examination of marriage as economic transaction"
      },
      {
        novel: "Sense and Sensibility",
        manifestation: "Financial vulnerability of women",
        examples: [
          {
            quote: "What have wealth or grandeur to do with happiness?",
            context: "Marianne's naive view",
            analysis: "Contrasts romantic ideals with economic reality"
          }
        ],
        significance: "Explores the harsh realities of women's financial dependence"
      }
    ]
  },
  {
    theme: "Social Class and Mobility",
    description: "The examination of class boundaries and social movement in Regency society",
    appearances: [
      {
        novel: "Mansfield Park",
        manifestation: "Class consciousness and moral worth",
        examples: [
          {
            quote: "We have all a better guide in ourselves...",
            context: "Fanny's moral stance",
            analysis: "Links class position with moral character"
          }
        ],
        significance: "Explores the relationship between social position and moral integrity"
      },
      {
        novel: "Northanger Abbey",
        manifestation: "Social climbing and authenticity",
        examples: [
          {
            quote: "No one who had ever seen Catherine Morland in her infancy...",
            context: "Opening description",
            analysis: "Subverts expectations of class and heroism"
          }
        ],
        significance: "Questions the relationship between social status and personal worth"
      }
    ]
  }
];

export const characterTypes: CharacterType[] = [
  {
    archetype: "The Witty Heroine",
    description: "Intelligent, spirited female protagonists who challenge social norms",
    examples: [
      {
        novel: "Pride and Prejudice",
        character: "Elizabeth Bennet",
        analysis: "Combines wit with social observation",
        evolution: "Learns to balance judgment with understanding",
        keyQuotes: [
          {
            quote: "I could easily forgive his pride, if he had not mortified mine",
            context: "Early judgment of Darcy"
          }
        ]
      },
      {
        novel: "Emma",
        character: "Emma Woodhouse",
        analysis: "Uses wit but must learn its proper application",
        evolution: "Develops from clever manipulation to genuine understanding",
        keyQuotes: [
          {
            quote: "I seem to have been doomed to blindness",
            context: "Moment of self-realization"
          }
        ]
      }
    ]
  }
];

export const writingStyleEvolution: WritingStyleElement[] = [
  {
    technique: "Free Indirect Discourse",
    description: "Narrative technique blending character and narrator perspectives",
    evolution: [
      {
        novel: "Northanger Abbey",
        usage: "Early experimentation with narrative voice",
        examples: [
          "Commentary on Gothic conventions",
          "Catherine's naive perspectives"
        ],
        significance: "Develops ironic distance while maintaining character sympathy"
      },
      {
        novel: "Emma",
        usage: "Sophisticated deployment for character insight",
        examples: [
          "Emma's self-deceptions",
          "Social observations"
        ],
        significance: "Achieves complex character psychology and social commentary"
      }
    ]
  }
];
