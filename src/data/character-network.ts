import { CharacterNetwork } from '../types/character-network';

export const characterNetwork: CharacterNetwork = {
  books: [
    {
      id: "pride-and-prejudice",
      name: "Pride and Prejudice",
      type: "book",
      color: "#e91e63",
      description: "A masterpiece of wit and social commentary exploring marriage, class, and prejudice in Regency England.",
      year: 1813
    },
    {
      id: "sense-and-sensibility",
      name: "Sense and Sensibility",
      type: "book",
      color: "#2196f3",
      description: "A story of two sisters with contrasting temperaments navigating love and heartbreak.",
      year: 1811
    },
    {
      id: "northanger-abbey",
      name: "Northanger Abbey",
      type: "book",
      color: "#4caf50",
      description: "A coming-of-age story that parodies Gothic novels while exploring the perils of confusing fiction with reality.",
      year: 1818
    },
    {
      id: "mansfield-park",
      name: "Mansfield Park",
      type: "book",
      color: "#9c27b0",
      description: "A complex exploration of morality, social position, and personal integrity through the story of Fanny Price.",
      year: 1814
    },
    {
      id: "longbourn",
      name: "Longbourn",
      type: "book",
      color: "#795548",
      description: "A retelling of Pride and Prejudice from the servants' perspective, exploring class and social inequality.",
      year: 2013
    }
  ],
  nodes: [
    // Pride and Prejudice
    {
      id: "elizabeth-bennet",
      name: "Elizabeth Bennet",
      novel: "Pride and Prejudice",
      class: "middle",
      type: "protagonist",
      description: "The witty and independent second daughter of the Bennet family, known for her intelligence and prejudiced first impressions."
    },
    {
      id: "darcy",
      name: "Fitzwilliam Darcy",
      novel: "Pride and Prejudice",
      class: "upper",
      type: "protagonist",
      description: "A wealthy and proud nobleman who learns to overcome his prejudices and rigid social expectations."
    },
    {
      id: "jane-bennet",
      name: "Jane Bennet",
      novel: "Pride and Prejudice",
      class: "middle",
      type: "supporting",
      description: "The beautiful and gentle eldest Bennet daughter, whose sweet nature leads her to see only the good in others."
    },
    {
      id: "bingley",
      name: "Charles Bingley",
      novel: "Pride and Prejudice",
      class: "upper",
      type: "supporting",
      description: "Darcy's wealthy and amiable friend who falls in love with Jane Bennet, easily influenced by others."
    },
    {
      id: "lydia-bennet",
      name: "Lydia Bennet",
      novel: "Pride and Prejudice",
      class: "middle",
      type: "supporting",
      description: "The youngest Bennet sister, whose reckless behavior threatens her family's reputation."
    },
    {
      id: "wickham",
      name: "George Wickham",
      novel: "Pride and Prejudice",
      class: "middle",
      type: "antagonist",
      description: "A charming but deceitful officer who causes trouble for both the Bennets and Darcy."
    },
    // Sense and Sensibility
    {
      id: "elinor-dashwood",
      name: "Elinor Dashwood",
      novel: "Sense and Sensibility",
      class: "middle",
      type: "protagonist",
      description: "The sensible and reserved elder Dashwood sister, who represents sense and emotional restraint."
    },
    {
      id: "marianne-dashwood",
      name: "Marianne Dashwood",
      novel: "Sense and Sensibility",
      class: "middle",
      type: "protagonist",
      description: "The emotional and romantic younger Dashwood sister, who learns to balance sensibility with sense."
    },
    {
      id: "edward-ferrars",
      name: "Edward Ferrars",
      novel: "Sense and Sensibility",
      class: "upper",
      type: "supporting",
      description: "A gentle, reserved man who forms an attachment to Elinor despite his secret engagement."
    },
    {
      id: "willoughby",
      name: "John Willoughby",
      novel: "Sense and Sensibility",
      class: "upper",
      type: "antagonist",
      description: "A dashing young man who captures Marianne's heart but proves morally bankrupt."
    },
    {
      id: "colonel-brandon",
      name: "Colonel Brandon",
      novel: "Sense and Sensibility",
      class: "upper",
      type: "supporting",
      description: "A mature and honorable man who quietly loves Marianne and proves his worth through actions."
    },
    // Northanger Abbey
    {
      id: "catherine-morland",
      name: "Catherine Morland",
      novel: "Northanger Abbey",
      class: "middle",
      type: "protagonist",
      description: "A naive but charming young woman whose love of Gothic novels colors her view of reality."
    },
    {
      id: "henry-tilney",
      name: "Henry Tilney",
      novel: "Northanger Abbey",
      class: "upper",
      type: "protagonist",
      description: "An intelligent and witty clergyman who guides Catherine's maturation while falling in love with her."
    },
    {
      id: "isabella-thorpe",
      name: "Isabella Thorpe",
      novel: "Northanger Abbey",
      class: "middle",
      type: "antagonist",
      description: "A manipulative friend who pretends affection for Catherine's brother while pursuing others."
    },
    {
      id: "john-thorpe",
      name: "John Thorpe",
      novel: "Northanger Abbey",
      class: "middle",
      type: "antagonist",
      description: "Isabella's boastful and dishonest brother who pursues Catherine for her perceived wealth."
    },
    // Mansfield Park
    {
      id: "fanny-price",
      name: "Fanny Price",
      novel: "Mansfield Park",
      class: "lower",
      type: "protagonist",
      description: "A modest and moral young woman taken in by her wealthy relatives, steadfast in her principles."
    },
    {
      id: "edmund-bertram",
      name: "Edmund Bertram",
      novel: "Mansfield Park",
      class: "upper",
      type: "protagonist",
      description: "Fanny's cousin and friend, a would-be clergyman who is temporarily led astray by Mary Crawford."
    },
    {
      id: "mary-crawford",
      name: "Mary Crawford",
      novel: "Mansfield Park",
      class: "upper",
      type: "antagonist",
      description: "A charming but worldly woman who attracts Edmund while representing modern urban values."
    },
    {
      id: "henry-crawford",
      name: "Henry Crawford",
      novel: "Mansfield Park",
      class: "upper",
      type: "antagonist",
      description: "Mary's brother, a charismatic man who pursues Fanny after toying with her cousins' affections."
    },
    // Longbourn
    {
      id: "sarah",
      name: "Sarah",
      novel: "Longbourn",
      class: "lower",
      type: "protagonist",
      description: "A hardworking housemaid at Longbourn with dreams beyond her station."
    },
    {
      id: "james-smith",
      name: "James Smith",
      novel: "Longbourn",
      class: "lower",
      type: "protagonist",
      description: "The mysterious new footman with a hidden past, who catches Sarah's attention."
    },
    {
      id: "mrs-hill",
      name: "Mrs. Hill",
      novel: "Longbourn",
      class: "lower",
      type: "supporting",
      description: "The housekeeper of Longbourn, who holds many secrets about the household."
    },
    {
      id: "polly",
      name: "Polly",
      novel: "Longbourn",
      class: "lower",
      type: "supporting",
      description: "The young housemaid learning her duties alongside Sarah."
    }
  ],
  relationships: [
    // Pride and Prejudice Relationships
    {
      source: "elizabeth-bennet",
      target: "jane-bennet",
      type: "family",
      description: "Sisters and closest confidantes",
      development: [
        "Share sisterly bond throughout the novel",
        "Support each other through romantic trials",
        "Maintain trust and confidence in each other"
      ]
    },
    {
      source: "elizabeth-bennet",
      target: "darcy",
      type: "romance",
      description: "Central romance overcoming pride and prejudice",
      development: [
        "Initial mutual dislike",
        "Growing understanding through letters and visits",
        "Eventual recognition of true character",
        "Marriage"
      ]
    },
    {
      source: "jane-bennet",
      target: "bingley",
      type: "romance",
      description: "Love at first sight couple",
      development: [
        "Immediate mutual attraction",
        "Separation due to social interference",
        "Reunion and marriage"
      ]
    },
    {
      source: "lydia-bennet",
      target: "wickham",
      type: "romance",
      description: "Scandalous elopement",
      development: [
        "Flirtation and infatuation",
        "Reckless elopement",
        "Forced marriage through Darcy's intervention"
      ]
    },
    // Sense and Sensibility Relationships
    {
      source: "elinor-dashwood",
      target: "marianne-dashwood",
      type: "family",
      description: "Sisters representing sense and sensibility",
      development: [
        "Contrasting approaches to emotion",
        "Support through family difficulties",
        "Mutual growth and understanding"
      ]
    },
    {
      source: "elinor-dashwood",
      target: "edward-ferrars",
      type: "romance",
      description: "Reserved romance complicated by duty",
      development: [
        "Quiet mutual attraction",
        "Separation due to prior engagement",
        "Eventual reunion and marriage"
      ]
    },
    {
      source: "marianne-dashwood",
      target: "willoughby",
      type: "romance",
      description: "Passionate but doomed romance",
      development: [
        "Intense initial attraction",
        "Shared romantic sensibilities",
        "Heartbreaking separation",
        "Eventual disillusionment"
      ]
    },
    {
      source: "marianne-dashwood",
      target: "colonel-brandon",
      type: "romance",
      description: "Mature love developing from friendship",
      development: [
        "Initial indifference from Marianne",
        "Growing appreciation through trials",
        "Marriage based on deeper understanding"
      ]
    },
    // Northanger Abbey Relationships
    {
      source: "catherine-morland",
      target: "henry-tilney",
      type: "romance",
      description: "Educational romance",
      development: [
        "Initial friendship and guidance",
        "Growing romantic attachment",
        "Overcoming misunderstandings",
        "Marriage despite family opposition"
      ]
    },
    {
      source: "catherine-morland",
      target: "isabella-thorpe",
      type: "friendship",
      description: "False friendship",
      development: [
        "Initial close friendship",
        "Growing awareness of Isabella's true nature",
        "Betrayal and disillusionment"
      ]
    },
    // Mansfield Park Relationships
    {
      source: "fanny-price",
      target: "edmund-bertram",
      type: "romance",
      description: "Constant love tested by rival",
      development: [
        "Childhood friendship",
        "Fanny's secret love",
        "Edmund's infatuation with Mary",
        "Final recognition of true feelings"
      ]
    },
    {
      source: "edmund-bertram",
      target: "mary-crawford",
      type: "romance",
      description: "Tempting but unsuitable attachment",
      development: [
        "Initial attraction",
        "Growing awareness of moral differences",
        "Final disillusionment"
      ]
    },
    {
      source: "fanny-price",
      target: "henry-crawford",
      type: "rivalry",
      description: "Unwanted pursuit",
      development: [
        "Henry's initial indifference",
        "Determined pursuit of Fanny",
        "Fanny's steadfast refusal",
        "Henry's moral failure"
      ]
    },
    // Longbourn Relationships
    {
      source: "sarah",
      target: "james-smith",
      type: "romance",
      description: "A romance that crosses social boundaries",
      development: [
        "Initial curiosity about the mysterious new footman",
        "Growing understanding of each other's struggles",
        "Shared moments during daily tasks",
        "Overcoming past secrets and social barriers"
      ]
    },
    {
      source: "sarah",
      target: "mrs-hill",
      type: "family",
      description: "Mentor-like relationship",
      development: [
        "Mrs. Hill's guidance in household duties",
        "Growing trust and confidence",
        "Sharing of household secrets",
        "Maternal care and protection"
      ]
    },
    {
      source: "sarah",
      target: "polly",
      type: "friendship",
      description: "Fellow servants and friends",
      development: [
        "Teaching Polly household duties",
        "Supporting each other through daily challenges",
        "Sharing dreams and aspirations"
      ]
    },
    // Add connections between Longbourn and Pride and Prejudice characters
    {
      source: "sarah",
      target: "elizabeth-bennet",
      type: "friendship",
      description: "Servant and mistress with mutual respect",
      development: [
        "Sarah's observations of Elizabeth's character",
        "Growing understanding across social boundaries",
        "Shared experiences from different perspectives"
      ]
    },
    {
      source: "mrs-hill",
      target: "elizabeth-bennet",
      type: "family",
      description: "Housekeeper's care for the Bennet family",
      development: [
        "Years of service to the Bennet family",
        "Protection of family secrets",
        "Maternal guidance from below stairs"
      ]
    },
    {
      source: "james-smith",
      target: "elizabeth-bennet",
      type: "friendship",
      description: "Distant but respectful relationship",
      development: [
        "Initial wariness",
        "Growing trust through service",
        "Understanding of social positions"
      ]
    }
  ]
};
