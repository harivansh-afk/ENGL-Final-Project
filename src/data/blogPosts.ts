export interface BlogPost {
  id: number;
  title: string;
  character: string;
  date: string;
  content: string;
  imageUrl: string;
  tags?: string[];
  likes?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Spirit of Community",
    character: "Lewis",
    date: "Spring 1",
    content: "As mayor of Pelican Town, nothing brings me more joy than seeing our community thrive. Today, our newest farmer arrived, breathing life into old Grandpa's farm. The look of determination in their eyes reminds me of the valley's golden days. Speaking of which, I should remind everyone about the upcoming Egg Festival - Marnie's chickens have been especially productive this year! And please, if anyone sees Pierre, tell him I need to discuss the flower arrangements for the town square...",
    imageUrl: "/images/blogs/lewis-blog.png",
    tags: ["community", "events", "announcements"],
    likes: 156
  },
  {
    id: 2,
    title: "Tales from the Sea",
    character: "Willy",
    date: "Spring 15",
    content: "The morning mist rolled in thick today, just the way I like it. Found something peculiar in my crab pots - a message in a bottle! Reminded me of my old sailor days... For those interested in fishing, the legend of the Crimsonfish resurfaces every summer. Some say it's just a tale, but I've seen things in these waters that would make a seasoned sailor question everything. Drop by the shop if you want to hear more, or need some quality bait.",
    imageUrl: "/images/blogs/willy-blog.png",
    tags: ["fishing", "legends", "sea stories"],
    likes: 89
  },
  {
    id: 3,
    title: "Behind the Bar",
    character: "Gus",
    date: "Summer 1",
    content: "Every night at the Stardrop Saloon tells a different story. Yesterday, Pam shared tales of her trucking days while Emily's positive energy kept everyone's spirits high. Shane actually joined a conversation about chicken farming with Marnie - a rare sight indeed! My special spaghetti recipe was a hit again, though I'll never reveal the secret ingredient (sorry, Lewis!). Remember, Fridays mean special discounts on pale ale - locally sourced from our very own farmer!",
    imageUrl: "/images/blogs/gus-blog.png",
    tags: ["saloon", "recipes", "community"],
    likes: 124
  },
  {
    id: 4,
    title: "Wizard's Musings",
    character: "Wizard",
    date: "Fall 13",
    content: "The veil between realms grows thin as we approach the season of spirits. I've observed unusual activities in the witch's swamp, and the junimos seem more active than ever. For those brave souls interested in the arcane arts, I'm considering hosting a seminar on mushroom identification and their magical properties. Note: Please stop asking about love potions - they're strictly forbidden and highly unstable...",
    imageUrl: "/images/blogs/wizard-blog.png",
    tags: ["magic", "junimos", "mystical"],
    likes: 201
  },
  {
    id: 5,
    title: "Adventures in Mining",
    character: "Clint",
    date: "Winter 8",
    content: "Found an extraordinary geode yesterday - the crystalline structure unlike anything I've seen before. If you're planning to explore the mines, remember to bring your sword and plenty of torches. I'm offering a special discount on tool upgrades this week. And no, I haven't worked up the courage to... well, never mind. Just come by the shop if you need anything forged.",
    imageUrl: "/images/blogs/clint-blog.png",
    tags: ["mining", "blacksmith", "tools"],
    likes: 67
  }
];
