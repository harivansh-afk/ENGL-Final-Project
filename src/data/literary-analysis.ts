interface ThematicElement {
  theme: string;
  description: string;
  examples: {
    quote: string;
    source: string;
    analysis: string;
  }[];
  significance: string;
}

interface NovelAnalysis {
  title: string;
  publicationYear: number;
  mainThemes: ThematicElement[];
  characterAnalysis: {
    character: string;
    role: string;
    development: string;
    significance: string;
    keyQuotes: {
      quote: string;
      context: string;
      analysis: string;
    }[];
  }[];
  socialCommentary: {
    topic: string;
    analysis: string;
    modernRelevance: string;
    examples: string[];
  }[];
  literaryDevices: {
    device: string;
    usage: string;
    examples: string[];
    effect: string;
  }[];
}

export const prideAndPrejudiceAnalysis: NovelAnalysis = {
  title: "Pride and Prejudice",
  publicationYear: 1813,
  mainThemes: [
    {
      theme: "Marriage and Economic Reality",
      description: "Exploration of marriage as both a social and economic institution in Regency England",
      examples: [
        {
          quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          source: "Chapter 1",
          analysis: "This iconic opening line establishes the novel's central premise: the interconnection between marriage and economics. The ironic tone suggests Austen's critique of viewing marriage purely as an economic transaction."
        },
        {
          quote: "I am not romantic, you know. I never was. I ask only a comfortable home.",
          source: "Charlotte Lucas to Elizabeth",
          analysis: "Charlotte's practical view of marriage represents the economic reality many women faced, choosing financial security over romantic love."
        }
      ],
      significance: "Through this theme, Austen critiques the marriage market while acknowledging the practical constraints women faced in Regency society."
    },
    {
      theme: "Pride and Social Prejudice",
      description: "Examination of how pride and prejudice affect social relationships and personal growth",
      examples: [
        {
          quote: "I could easily forgive his pride, if he had not mortified mine.",
          source: "Elizabeth about Darcy",
          analysis: "This quote encapsulates how personal pride leads to prejudice, showing how both Elizabeth and Darcy must overcome their biases."
        }
      ],
      significance: "The theme demonstrates how personal growth requires overcoming both social prejudices and individual pride."
    }
  ],
  characterAnalysis: [
    {
      character: "Elizabeth Bennet",
      role: "Protagonist",
      development: "Elizabeth's journey from confident wit to self-awareness represents the novel's central character development",
      significance: "Through Elizabeth, Austen explores the balance between individual judgment and societal expectations",
      keyQuotes: [
        {
          quote: "Till this moment I never knew myself.",
          context: "After reading Darcy's letter",
          analysis: "This moment marks Elizabeth's recognition of her own prejudices and marks the beginning of her character transformation."
        }
      ]
    },
    {
      character: "Mr. Darcy",
      role: "Male Protagonist",
      development: "Darcy's evolution from proud aristocrat to humble lover shows the possibility of personal growth",
      significance: "His character arc demonstrates how true love requires overcoming class prejudice and personal pride",
      keyQuotes: [
        {
          quote: "I have been a selfish being all my life, in practice, though not in principle.",
          context: "Darcy's self-reflection to Elizabeth",
          analysis: "This admission shows Darcy's growth and self-awareness, marking his character development."
        }
      ]
    }
  ],
  socialCommentary: [
    {
      topic: "Class Mobility",
      analysis: "Austen explores the rigidity and occasional permeability of class boundaries in Regency England",
      modernRelevance: "The commentary on social mobility and class prejudice remains relevant to modern social inequalities",
      examples: [
        "The Bingley family's 'new money' status versus Darcy's established wealth",
        "Elizabeth's ability to transcend class boundaries through marriage",
        "Lady Catherine's attempts to maintain class distinctions"
      ]
    }
  ],
  literaryDevices: [
    {
      device: "Free Indirect Discourse",
      usage: "Austen pioneered this technique to blend narrator and character perspectives",
      examples: [
        "The opening line's ironic tone",
        "Elizabeth's internal reflections",
        "Commentary on the Meryton assembly"
      ],
      effect: "Creates intimacy with characters while maintaining narrative distance for ironic commentary"
    }
  ]
};

export const northangerAbbeyAnalysis: NovelAnalysis = {
  title: "Northanger Abbey",
  publicationYear: 1818,
  mainThemes: [
    {
      theme: "Gothic Literature Parody",
      description: "A satirical take on Gothic fiction and its influence on young readers",
      examples: [
        {
          quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
          source: "Chapter 5",
          analysis: "Austen directly addresses the value of novel reading while simultaneously parodying Gothic literature's melodramatic tendencies."
        },
        {
          quote: "Oh! I am delighted with the book! I should like to spend my whole life in reading it.",
          source: "Catherine about 'The Mysteries of Udolpho'",
          analysis: "Illustrates Catherine's naive enthusiasm for Gothic novels, which Austen uses to critique uncritical consumption of literature."
        }
      ],
      significance: "Through parody, Austen critiques both Gothic conventions and the societal attitudes toward novel reading."
    },
    {
      theme: "Reality vs. Imagination",
      description: "The contrast between romantic imagination and everyday reality",
      examples: [
        {
          quote: "She had yet to learn that the commonplace details of real life can be more affecting than the most dramatic of imagined horrors.",
          source: "Narrator about Catherine",
          analysis: "Shows Catherine's growth from Gothic fantasy to understanding real-world complexities."
        }
      ],
      significance: "Demonstrates how imagination must be tempered with reality and experience."
    }
  ],
  characterAnalysis: [
    {
      character: "Catherine Morland",
      role: "Protagonist",
      development: "Catherine's journey from naive Gothic romance enthusiast to mature observer of real human nature",
      significance: "Represents the necessary maturation from adolescent fantasy to adult understanding",
      keyQuotes: [
        {
          quote: "No one who had ever seen Catherine Morland in her infancy would have supposed her born to be an heroine.",
          context: "Opening line",
          analysis: "Sets up the novel's playful subversion of Gothic and romantic conventions."
        }
      ]
    }
  ],
  socialCommentary: [
    {
      topic: "Novel Reading and Education",
      analysis: "Austen examines the role of reading in young women's education and moral development",
      modernRelevance: "Parallels contemporary debates about media influence on young minds",
      examples: [
        "Catherine's Gothic-influenced imagination",
        "The defense of novel reading",
        "The contrast between sensational fiction and reality"
      ]
    }
  ],
  literaryDevices: [
    {
      device: "Narrative Irony",
      usage: "Austen uses ironic narration to comment on Gothic conventions and social expectations",
      examples: [
        "The opening description of Catherine as an unlikely heroine",
        "Commentary on Catherine's Gothic fantasies",
        "The narrator's knowing asides about romance conventions"
      ],
      effect: "Creates a meta-commentary on literary conventions while telling an engaging story"
    }
  ]
};

export const senseAndSensibilityAnalysis: NovelAnalysis = {
  title: "Sense and Sensibility",
  publicationYear: 1811,
  mainThemes: [
    {
      theme: "Reason vs. Emotion",
      description: "The balance between emotional expression and rational judgment",
      examples: [
        {
          quote: "I will be calm. I will be mistress of myself.",
          source: "Elinor Dashwood",
          analysis: "Represents the struggle between emotional truth and social necessity."
        },
        {
          quote: "The more I know of the world, the more I am convinced that I shall never see a man whom I can really love.",
          source: "Marianne Dashwood",
          analysis: "Illustrates the dangers of excessive romantic sensibility."
        }
      ],
      significance: "Explores the necessity of balancing emotional authenticity with social pragmatism."
    },
    {
      theme: "Financial Vulnerability",
      description: "The economic precarity of women in Regency society",
      examples: [
        {
          quote: "What have wealth or grandeur to do with happiness?",
          source: "Marianne Dashwood",
          analysis: "Highlights the tension between romantic ideals and economic reality."
        }
      ],
      significance: "Demonstrates how economic circumstances shape women's choices and opportunities."
    }
  ],
  characterAnalysis: [
    {
      character: "Elinor Dashwood",
      role: "Protagonist - Sense",
      development: "Maintains emotional control while navigating social and personal challenges",
      significance: "Represents the value of emotional regulation and social awareness",
      keyQuotes: [
        {
          quote: "I have suffered all the punishment of an attachment without enjoying any of its advantages.",
          context: "Reflecting on Edward",
          analysis: "Shows the cost of emotional restraint while highlighting its necessity."
        }
      ]
    },
    {
      character: "Marianne Dashwood",
      role: "Protagonist - Sensibility",
      development: "Learns to temper excessive emotion with judgment",
      significance: "Shows the maturation from pure emotional response to balanced understanding",
      keyQuotes: [
        {
          quote: "My feelings shall be governed and my temper improved.",
          context: "After her illness",
          analysis: "Marks her growth toward emotional maturity."
        }
      ]
    }
  ],
  socialCommentary: [
    {
      topic: "Women's Economic Dependence",
      analysis: "Examines how financial constraints affect women's choices and behavior",
      modernRelevance: "Relates to contemporary issues of economic inequality and gender",
      examples: [
        "The Dashwood women's reduced circumstances",
        "Lucy Steele's strategic marriage choices",
        "The power dynamics in courtship and marriage"
      ]
    }
  ],
  literaryDevices: [
    {
      device: "Parallel Characters",
      usage: "Uses contrasting character pairs to explore different approaches to life",
      examples: [
        "Elinor and Marianne's different temperaments",
        "Edward and Willoughby's different moral characters",
        "Lucy and Elinor's different approaches to love"
      ],
      effect: "Creates a nuanced exploration of different philosophical approaches to life"
    }
  ]
};

export const mansfieldParkAnalysis: NovelAnalysis = {
  title: "Mansfield Park",
  publicationYear: 1814,
  mainThemes: [
    {
      theme: "Morality and Social Values",
      description: "The relationship between moral character and social behavior",
      examples: [
        {
          quote: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
          source: "Fanny Price",
          analysis: "Emphasizes the importance of individual moral judgment over social pressure."
        }
      ],
      significance: "Explores how true morality must come from internal conviction rather than external rules."
    },
    {
      theme: "Colonial Undertones",
      description: "The presence of colonial wealth and its moral implications",
      examples: [
        {
          quote: "But I do talk to him more than I used. I am sure I do. Did not you hear me ask him about the slave-trade last night?",
          source: "Fanny about Sir Thomas",
          analysis: "Highlights the novel's engagement with colonial issues and moral responsibility."
        }
      ],
      significance: "Addresses the relationship between domestic English society and colonial exploitation."
    }
  ],
  characterAnalysis: [
    {
      character: "Fanny Price",
      role: "Protagonist",
      development: "Maintains moral integrity while navigating social pressures",
      significance: "Represents moral constancy in the face of social corruption",
      keyQuotes: [
        {
          quote: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
          context: "Refusing Henry Crawford",
          analysis: "Shows Fanny's commitment to internal moral guidance over external pressure."
        }
      ]
    }
  ],
  socialCommentary: [
    {
      topic: "Class and Moral Character",
      analysis: "Examines the relationship between social position and moral behavior",
      modernRelevance: "Connects to contemporary discussions about privilege and responsibility",
      examples: [
        "The contrast between the Bertrams and the Crawfords",
        "Fanny's position between social classes",
        "The moral implications of wealth and privilege"
      ]
    }
  ],
  literaryDevices: [
    {
      device: "Moral Contrast",
      usage: "Uses character contrasts to highlight moral choices",
      examples: [
        "Fanny's principles versus Mary's pragmatism",
        "Edmund's sincerity versus Henry's performance",
        "The stability of Mansfield versus the chaos of London"
      ],
      effect: "Creates a clear moral framework while exploring its complexities"
    }
  ]
};

// Export all analyses
export const novelAnalyses = {
  prideAndPrejudice: prideAndPrejudiceAnalysis,
  northangerAbbey: northangerAbbeyAnalysis,
  senseAndSensibility: senseAndSensibilityAnalysis,
  mansfieldPark: mansfieldParkAnalysis
};
