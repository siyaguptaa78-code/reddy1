export const CONFIG = {
  brandName: "Reddy Anna",
  domainName: "reddynow.com",
  whatsappUrl: "https://wa.me/918796686330",
  whatsappSupportUrl: "https://wa.me/918796686330",
  
  logoUrl: "https://images.unsplash.com/photo-1599577180579-79c293444002?q=80&w=200&auto=format&fit=crop", // placeholder logo
  faviconUrl: "/favicon.ico",
  
  images: {
    heroBg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop",
    cricketCardBg: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2938&auto=format&fit=crop",
    footballCardBg: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=3162&auto=format&fit=crop",
    tennisCardBg: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2942&auto=format&fit=crop",
    horseCardBg: "https://images.unsplash.com/photo-1599818815124-f1873b88eef0?q=80&w=2940&auto=format&fit=crop",
    greyhoundCardBg: "https://images.unsplash.com/photo-1616428751515-32e652c799a4?q=80&w=2940&auto=format&fit=crop",
    
    eCricketQuickBg: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2938&auto=format&fit=crop",
    evolutionQuickBg: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop",
    aviatorQuickBg: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop",
    sportsbookQuickBg: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2787&auto=format&fit=crop",
    
    brandIntroBg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop",
    whatIsReddyAnnaBg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop",
    exchangeBg: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2787&auto=format&fit=crop",
    
    bonuses: {
      welcome: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      daily: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      referral: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      seasonal: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop"
    },
    
    steps: [
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop"
    ],
    
    certs: [
      "/certs/gc_logo.png",
      "/certs/egf_logo.png",
      "/certs/digicert_logo.png",
      "/certs/eighteen_plus.png",
      "/certs/gamecare_logo.png",
      "/certs/gt_logo.png"
    ]
  },

  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Reddy Anna ID",
      href: "#",
      children: [
        { label: "Demo ID", href: "/reddy-anna-id/demo-id" },
        { label: "Cricket ID", href: "/reddy-anna-id/cricket-id" },
        { label: "IPL Betting ID", href: "/reddy-anna-id/ipl-betting-id" }
      ]
    },
    {
      label: "Reddy Anna Sports",
      href: "#",
      children: [
        { label: "Cricket Betting", href: "/reddy-anna-sports/cricket-betting" },
        { label: "Football Betting", href: "/reddy-anna-sports/football-betting" },
        { label: "Tennis Betting", href: "/reddy-anna-sports/tennis-betting" },
        { label: "Live Betting", href: "/reddy-anna-sports/live-betting" },
        { label: "Horse Racing", href: "/reddy-anna-sports/horse-racing" }
      ]
    },
    { label: "Indian Card Games", href: "/indian-card-games" },
    { label: "Blogs", href: "/blogs" }
  ],

  sidebarCategories: [
    { label: "Favourites", icon: "⭐" },
    { label: "Kabaddi", icon: "🤼" },
    { label: "Cricket", icon: "🏏", active: true },
    { label: "Football", icon: "⚽" },
    { label: "Tennis", icon: "🎾" },
    { label: "Horse Racing", icon: "🏇" },
    { label: "Greyhound Racing", icon: "🐕" },
    { label: "Indian Card Games", icon: "🃏" },
    { label: "Sportsbook", icon: "🎯" },
    { label: "Live Casino", icon: "🎲" },
    { label: "Binary", icon: "📈" },
    { label: "Slots Games", icon: "🎰" }
  ],

  matches: {
    cricket: [
      {
        teams: "R C Bengaluru v Kolkata Knight Riders",
        tournament: "Indian Premier League",
        date: "05/25/2026 4:16 pm",
        live: true,
        bm: true
      },
      {
        teams: "Hobart Hurricanes Women vs Perth Scorchers Women, Final",
        tournament: "Womens Big Bash League 2026",
        date: "05/25/2026 4:16 pm",
        live: true,
        bm: true
      }
    ],
    football: [
      {
        teams: "FC Barcelona SRL vs. BSC Young Boys Srl",
        tournament: "UEFA Champions League SRL",
        date: "25/05/2026 4:16 pm",
        live: true,
        bm: true
      },
      {
        teams: "Bahir Dar FC v Hadiah Hosanna FC",
        tournament: "Ethiopian Premier League",
        date: "25/05/2026 4:16 pm",
        live: true,
        bm: true
      }
    ],
    tennis: [
      {
        teams: "Novak Djokovic v Carlos Alcaraz",
        tournament: "French Open Men Singles",
        date: "26/05/2026 3:30 pm",
        live: false,
        bm: true
      }
    ]
  },

  casinos: [
    { label: "Teen Patti", name: "2020poker.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" },
    { label: "Poker", name: "Muflis_teenpatti.png", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop" },
    { label: "Jili", name: "jilib.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" },
    { label: "Ezugi", name: "ezugib.jpg", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop" },
    { label: "Super Spade", name: "superspadeb.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" },
    { label: "Table Games", name: "tablegamesb.webp", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop" },
    { label: "Virtual Sports", name: "virtualb.webp", image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2787&auto=format&fit=crop" },
    { label: "Bingo", name: "bingob.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" },
    { label: "Fishing Games", name: "fishingb.webp", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop" },
    { label: "Betgames", name: "betgamesb.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" },
    { label: "Casino", name: "casinob.webp", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2944&auto=format&fit=crop" },
    { label: "Live Casino", name: "liveb.webp", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2940&auto=format&fit=crop" }
  ],

  faqs: [
    {
      question: "What is a Reddy Anna ID?",
      answer: "A Reddy Anna ID is your verified personal account that gives you access to cricket betting, sports wagering, and live casino games on the Reddy Anna platform. It is created instantly via WhatsApp and is linked to your personal wallet for deposits and withdrawals."
    },
    {
      question: "How do I create a Reddy Anna ID?",
      answer: "Visit reddynow.com, click the WhatsApp button, and contact our official agent. Share your preferred username and password. Your ID is created and delivered in under 60 seconds."
    },
    {
      question: "Is Reddy Anna safe and legitimate?",
      answer: "Yes. Reddy Anna has operated safely since 2010, serving millions of verified users across India. All transactions are encrypted, all payments are processed through secure Indian banking channels, and all payouts are guaranteed. reddynow.com is the only official Reddy Anna domain — always verify you are on the right site."
    },
    {
      question: "What payment methods does Reddy Anna accept?",
      answer: "We accept all major Indian payment methods: UPI (PhonePe, Google Pay, BHIM), Paytm, Paytm Wallet, Net Banking, NEFT, and IMPS. Deposits are instant. Withdrawals are processed within 2-4 hours."
    },
    {
      question: "Can I bet on IPL using Reddy Anna?",
      answer: "Absolutely. IPL betting is one of Reddy Anna's core offerings. We provide live, real-time odds on every IPL match with ball-by-ball markets, session betting, player performance bets, and full pre-match markets. Your Reddy Anna ID gives you instant access to all IPL 2026 markets."
    },
    {
      question: "Does Reddy Anna offer casino games?",
      answer: "Yes. reddynow.com offers a comprehensive live casino section featuring Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, Poker, Dragon Tiger, and hundreds of slots. All games run 24/7 with live dealers and certified fair-play mechanisms."
    },
    {
      question: "How can I contact Reddy Anna support?",
      answer: "Our support team is available 24/7 via WhatsApp and Telegram. Visit reddynow.com and click the WhatsApp icon for instant connection to our support team. Average response time is under 2 minutes, even during live matches."
    },
    {
      question: "What is a Reddy Anna Demo ID?",
      answer: "A Demo ID is a free practice account that lets you explore the Reddy Anna platform, understand how betting markets work, and place practice bets without using real money. Contact our agent via WhatsApp and request a Demo ID — it is completely free."
    }
  ]
};
