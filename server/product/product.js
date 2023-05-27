const products = [
  {
    id: 1,
    category: "Personal Development",
    name: "You Were Born to Write",
    author: "Kelly Notaras",
    publisher: "Hay House Inc.; Cancelled edition (15 September 2020)",
    price: 540,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684701022/BookBuy/born-to-write_iopspp.jpg",
    description:
      "In Born to Write, Charis Cotter chronicles the early lives of these and other much-loved children's writers, including Christopher Paul Curtis, C.S. Lewis and E.B. White, revealing how each author's achievements and losses, triumphs and tragedies, helped shape our most beloved books.",
  },
  {
    id: 2,
    category: "Personal development",
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: "The Ralston Society",
    description:
      "Think and Grow Rich is a book written by Napoleon Hill released in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. However there is no evidence that the two ever met",
    price: 274,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700964/BookBuy/Think-and-grow-rich_xiymrm.jpg",
  },
  {
    id: 3,
    category: "Finance",
    name: "The Intelligent investor",
    author: "Benjamin Graham",
    publisher: "Harper and brothers",
    description:
      "The Intelligent Investor by Benjamin Graham, first published in 1949, is a widely acclaimed book on value investing. The book provides strategies on how to successfully use value investing in the stock market. Historically, the book has been one of the most popular books on investing and Graham's legacy remains",
    price: 786,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700887/BookBuy/the-intelligent-invester_lbuvad.jpg",
  },
  {
    id: 4,
    category: "Fiction",
    name: "Girl Made of Gold",
    author: "Gitanjali Kolanad",
    publisher: "JUGGERNAUT BOOKS",
    description:
      "Set in 1920's Thanjavur, Tamil Nadu, this book is about a devadasi named Kanaka, who disappears right before her sixteenth birthday. At the same time, a mysterious gold statue appears near the deity of the temple, convincing almost everyone that Kanaka has transformed herself into a gold statue.",
    price: 380,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700883/BookBuy/girl-made-of-gold_wtrfw7.jpg",
  },
  {
    id: 5,
    category: "Science",
    name: "A Brief History of Time",
    author: "Stephen Hawking",
    publisher: "Bantam Books",
    description:
      "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
    price: 1200,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700874/BookBuy/brief-history-of-time_rbw6ps.jpg",
  },
  {
    id: 6,
    category: "Real story",
    name: "Take My Hand",
    author: "Dolen Perkins-Valdez",
    publisher: "Berkley",
    description:
      "Inspired by true events that rocked the nation, a profoundly moving novel about a Black nurse in post-segregation Alabama who blows the whistle on a terrible wrong done to her patients, from the New York Times bestselling author of Wench.",
    price: 960,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700876/BookBuy/take-my-hand_giisaf.jpg",
  },
  {
    id: 7,
    category: "Personal development",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    description:
      "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    price: 999,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684700896/BookBuy/The-Great-Gatsby_kozqiw.jpg",
  },
  {
    id: 8,
    category: "Biography",
    name: "Bad Mormon: A Memoir",
    author: "Heather Gay",
    publisher: "Gallery Books",
    description:
      "Drinking and Tweeting meets Unorthodox in this vulnerable memoir about The Real Housewives of Salt Lake City star’s departure from the Mormon Church, and her unforeseen success in business, television, and single motherhood.",
    price: 1300,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684876308/BookBuy/bad_mormon_nukbv6.jpg",
  },
  {
    id: 9,
    category: "Biography",
    name: "Becoming",
    author: "Michelle Obama",
    publisher: "Crown",
    description:
      "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also",
    price: 995,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684876255/BookBuy/becoming_uhk4jd.jpg",
  },
  {
    id: 10,
    category: "Biography",
    name: "The Longest Race",
    author: "Kara Goucher",
    publisher: "Gallery Books",
    description:
      "In this unvarnished and affecting memoir, Olympian Kara Goucher reveals her experience of living through and speaking out about one of the biggest scandals in running Kara Goucher grew up with Olympic dreams. She excelled at running from a young age and was offered a Nike sponsorship deal when she graduated from college. Then in 2004, she was invited to join a secretive, lavishly funded new team, dubbed the Nike Oregon Project. Coached by distance running legend Alberto Salazar, it seemed like the opportunity of a lifetime.",
    price: 1100,
    imageUrl:
      "https://res.cloudinary.com/dbujool1y/image/upload/v1684876308/BookBuy/The_longest_race_clruzw.jpg",
  },
];

module.exports = products;
