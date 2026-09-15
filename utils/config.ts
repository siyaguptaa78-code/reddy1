export const CONFIG = {
  brandName: "Reddy Anna",
  domainName: "reddynow.com",
  whatsappUrl: "https://wa.me/918796686330",
  whatsappSupportUrl: "https://wa.me/918360750829",
  
  logoUrl: "/logo.jpg",
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
 { label: "IPL ID", href: "/reddy-anna-id/ipl-id" }
 ]
 },
 {
 label: "Reddy Anna Sports",
 href: "#",
 children: [
 { label: "Cricket", href: "/reddy-anna-sports/cricket" },
 { label: "Football", href: "/reddy-anna-sports/football" },
 { label: "Tennis", href: "/reddy-anna-sports/tennis" },
 { label: "Live", href: "/reddy-anna-sports/live" },
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
 question: "What is Reddy Anna?",
 answer: "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
 },
 {
 question: "How does a Reddy Anna ID work?",
 answer: "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
 },
 {
 question: "How can I access the Reddy Anna website?",
 answer: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
 },
 {
 question: "What sports are available on Reddy Anna?",
 answer: "Available sports can change. Check the current sports or section on the website for the latest list and availability."
 },
 {
 question: "Does Reddy Anna provide live sports information?",
 answer: "Check the site's current sports section for any live-event information and the terms that apply to its use."
 },
 {
 question: "How can I get help with my Reddy Anna account?",
 answer: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
 },
 {
 question: "What payment options are supported?",
 answer: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
 },
 {
 question: "How can I check Reddy Anna login information?",
 answer: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
 },
 {
 question: "What should I do if I have a problem with my account?",
 answer: "Refer to Reddy Anna's current website information and terms for the most accurate answer."
 },
 {
 question: "Where can I find the latest Reddy Anna updates?",
 answer: "Refer to Reddy Anna's current website information and terms for the most accurate answer."
 }
 ]
};
