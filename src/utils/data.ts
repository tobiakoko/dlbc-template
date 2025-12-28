import type {
  NavItem,
  ServiceTime,
  Sermon,
  ChurchEvent,
  Ministry,
  Leader,
  ChurchInfo
} from '@/types';

// Church Information
export const CHURCH_INFO: ChurchInfo = {
  name: 'Deeper Life Bible Church Tampa',
  shortName: 'DLBC Tampa',
  tagline: 'Your Spiritual Welfare is Our Concern',
  address: {
    street: '9720 N 56th St',
    city: 'Temple Terrace',
    state: 'FL',
    zip: '33617',
    country: 'USA',
  },
  phone: '(813) 542-7793',
  email: 'info@dlbctampa.org',
  socialLinks: [
    { platform: 'facebook', url: 'https://www.facebook.com/dlbcTampa', label: 'Follow us on Facebook' },
    { platform: 'youtube', url: 'https://youtube.com/@dclmtampa', label: 'Watch on YouTube' },
    { platform: 'instagram', url: 'https://instagram.com/dclmtampa', label: 'Follow us on Instagram' },
  ],
};

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#our-story' },
      { label: 'Our Mission', href: '/about#mission' },
      { label: 'Core Values', href: '/about#values' },
      { label: 'What We Believe', href: '/about#beliefs' },
      { label: 'Leadership', href: '/about#leadership' },
    ]
  },
  { 
    label: 'Sermons', 
    href: '/sermons',
    children: [
      { label: 'Latest Sermons', href: '/sermons/latest' },
      { label: 'Sermon Series', href: '/sermons/series' },
      { label: 'Audio Messages', href: '/sermons/audio' },
    ]
  },
  { 
    label: 'Ministries', 
    href: '/ministries',
    children: [
      { label: 'Young Adult Ministry', href: '/ministries/youngAdult' },
      { label: 'Women\'s Ministry', href: '/ministries/women' },
      { label: 'Youth Ministry', href: '/ministries/youth' },
      { label: 'Children\'s Ministry', href: '/ministries/children' },
    ]
  },
  { label: 'Events', href: '/events' },
  { label: 'Give', href: '/give' },
  { label: 'Contact Us', href: '/contact' },
];

// Service Times
export const SERVICE_TIMES: ServiceTime[] = [
  {
    id: 'sunday-worship',
    day: 'Sunday',
    name: 'Sunday Worship Service',
    time: '9:00 AM',
    description: 'Main worship gathering with powerful preaching and praise',
    icon: 'music',
  },
  {
    id: 'wednesday-bible',
    day: 'Wednesday',
    name: 'Bible Study',
    time: '6:00 PM',
    description: 'In-depth study of God\'s Word',
    icon: 'book-open',
  },
  {
    id: 'friday-revival',
    day: 'Friday',
    name: 'Prayer Meeting & Revival Service',
    time: '6:00 PM',
    description: 'Corporate prayer and intercession',
    icon: 'heart',
  },
  {
    id: 'saturday-outreach',
    day: 'Saturday',
    name: "Community Outreach",
    time: '5:00 PM',
    description: 'Serving our community with love through evangelism',
    icon: 'briefcase',
  },
];

// Featured Sermons
export const FEATURED_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'The First Faith and the First Love for Jesus',
    preacher: 'Pastor W.F. Kumuyi',
    date: '2025-12-27',
    duration: '60:00',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    category: 'Retreat Message',
    description: 'A powerful message from the Global December Retreat on maintaining first love and faith.',
  },
  {
    id: '2',
    title: 'Conditions of Security in Christ',
    preacher: 'Pastor W.F. Kumuyi',
    date: '2025-12-27',
    duration: '55:00',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
    category: 'Retreat Message',
    description: 'Understanding our security and standing in Christ Jesus.',
  },
  {
    id: '3',
    title: 'The All-Sufficient Name of Jesus',
    preacher: 'Pastor W.F. Kumuyi',
    date: '2025-12-27',
    duration: '52:00',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    category: 'Retreat Message',
    description: 'Exploring the power and sufficiency in the name of Jesus.',
  },
  {
    id: '4',
    title: "Christ's Power to Heal Despite the Critics' Presence",
    preacher: 'Pastor W.F. Kumuyi',
    date: '2025-12-08',
    duration: '45:00',
    thumbnail: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    category: 'Bible Study',
    description: 'A Bible study on the healing power of Christ.',
  },
];

export const sermons = [
  { id: 1, title: 'The First Faith and the First Love for Jesus', speaker: 'Pastor W.F. Kumuyi', date: 'December 27, 2025', scripture: 'Revelation 2:1-7', duration: '60 min' },
  { id: 2, title: 'Conditions of Security in Christ', speaker: 'Pastor W.F. Kumuyi', date: 'December 27, 2025', scripture: 'John 10:27-30', duration: '55 min' },
  { id: 3, title: 'The All-Sufficient Name of Jesus', speaker: 'Pastor W.F. Kumuyi', date: 'December 27, 2025', scripture: 'Philippians 2:9-11', duration: '52 min' },
  { id: 4, title: "Christ's Power to Heal Despite the Critics' Presence", speaker: 'Pastor W.F. Kumuyi', date: 'December 8, 2025', scripture: 'Mark 2:1-12', duration: '45 min' },
  { id: 5, title: 'Walking in Faith', speaker: 'Pastor Raymond Akoko', date: 'December 3, 2025', scripture: 'Hebrews 11:1-6', duration: '42 min' },
  { id: 6, title: 'The Indispensable Experience of the Indisputable Sanctification', speaker: 'Pastor W.F. Kumuyi', date: 'December 6, 2025', scripture: '1 Thessalonians 4:3-8', duration: '50 min' },
];

// Sermon Series
export const SERMON_SERIES = [
  {
    id: '1',
    title: 'Walking in Divine Purpose',
    description: 'A transformative series exploring God\'s unique calling and purpose for your life. Learn to discover, embrace, and fulfill your divine destiny.',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    sermonCount: 4,
    startDate: '2024-11-01',
    endDate: '2024-11-24',
    speaker: 'Pastor W.F. Kumuyi',
    category: 'Sunday Message',
  },
  {
    id: '2',
    title: 'Power of Prayer',
    description: 'Discover the life-changing impact of consistent, fervent prayer. This series will strengthen your prayer life and deepen your relationship with God.',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
    sermonCount: 3,
    startDate: '2024-10-01',
    endDate: '2024-10-15',
    speaker: 'Pastor John Doe',
    category: 'Wednesday Teaching',
  },
  {
    id: '3',
    title: 'Living Holiness',
    description: 'Practical teachings on living a holy life in an unholy world. Learn biblical principles for daily sanctification and spiritual growth.',
    thumbnail: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    sermonCount: 2,
    startDate: '2024-09-15',
    endDate: '2024-09-29',
    speaker: 'Pastor Jane Smith',
    category: 'Special Service',
  },
];


// Upcoming Events
export const UPCOMING_EVENTS: ChurchEvent[] = [
  { id: '1', title: 'Sunday Worship Service', date: 'Every Sunday', time: '8:00 AM', location: 'Main Sanctuary', description: 'Join us for powerful worship, inspiring messages, and fellowship.', category: 'worship', image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80' },
  { id: '2', title: 'Monday Bible Study', date: 'Every Monday', time: '6:00 PM', location: 'Main Sanctuary', description: "Dive deeper into God's Word through interactive study and discussion.", category: 'study', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80' },
  { id: '3', title: "Workers' Training", date: 'Every Saturday', time: '5:00 PM', location: 'Main Sanctuary', description: 'Equipping and training workers for effective ministry service.', category: 'training', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80' },
];

export const events = [
  {
    id: 1,
    title: "Sunday Service",
    date: "Every Sunday",
    time: "9:00 AM - 11:00 AM",
    location: "Main Sanctuary",
    description: "Join us for powerful worship, inspiring messages, and fellowship.",
    type: "Weekly"
  },
  {
    id: 2,
    title: "Bible Study",
    date: "Every Wednesday",
    time: "6:00 PM - 8:00 PM",
    location: "Fellowship Hall",
    description: "Dive deeper into God's Word through interactive study and discussion.",
    type: "Weekly"
  },
  {
    id: 3,
    title: "Prayer Meeting",
    date: "Every Friday",
    time: "6:00 PM - 7:00 PM",
    location: "Prayer Room",
    description: "Join us in corporate prayer as we seek God's presence and intercede for our community.",
    type: "Weekly"
  },
  {
    id: 4,
    title: "Children Bible Club",
    date: "Every Saturday",
    time: "12:00 PM - 1:00 PM",
    location: "Children's Wing",
    description: "Engaging Bible lessons and fun activities for children to grow in their faith.",
    type: "Weekly"
  },
  {
    id: 5,
    title: "Community Outreach",
    date: "Every First Saturday",
    time: "9:00 AM - 1:00 PM",
    location: "Community Center",
    description: "Serving our community with love through various outreach programs and services.",
    type: "Monthly"
  }
];

// Ministries
export const MINISTRIES: Ministry[] = [
  {
    id: 'young-adult',
    name: 'Young Adult\'s Ministry',
    description: 'To unite young individuals to make a positive impact in our community for Christ.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    leader: 'Bro. Emmanuel Oyadeyi',
    meetingTime: 'As Scheduled',
  },
  {
    id: 'women',
    name: 'Women\'s Ministry',
    description: 'Building strong women of faith through fellowship, study, and service.',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80',
    leader: 'Sis. Dunni Udugba',
    meetingTime: 'Second Saturday, 11:00 AM',
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    description: 'Raising up a generation passionate about Jesus and equipped for impact.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    leader: 'Bro Emmanuel Teye',
    meetingTime: 'As Scheduled',
  },
  {
    id: 'children',
    name: 'Children\'s Ministry',
    description: 'Teaching children the Word of God in fun, engaging, and age-appropriate ways.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    leader: 'Sis. Jesutofunmi Fajemisin',
    meetingTime: 'Every Saturday, 12:00 PM',
  },
];

// Leadership Team
export const LEADERSHIP: Leader[] = [
  {
    id: '1',
    name: 'Pastor W.F. Kumuyi',
    title: 'General Superintendent, DCLM Worldwide',
    image: 'https://dclmcloud.s3.amazonaws.com/dclm.org/media/wf-kumuyi.jpg',
    bio: 'Pastor W.F. Kumuyi founded Deeper Life Bible Church in 1973 while serving as a Mathematics lecturer at the University of Lagos. Starting with just 15 university students, the ministry has grown to over 120,000 members in Lagos alone and thousands of churches across more than 40 countries worldwide. Born in 1941, Pastor Kumuyi was born again on April 5th, 1964. He holds a first-class degree in Mathematics from the University of Ibadan and is recognized as one of the greatest living preachers.',
  },
  {
    id: '2',
    name: 'Pastor Michael A. Dada',
    title: 'Regional Overseer - Mid-Atlantic & South-East USA',
    image: '/src/assets/pastor_dada.JPG',
    bio: 'Pastor Michael A. Dada is a dynamic Holy Ghost-filled preacher whose ministry has witnessed the conversion of souls and miracles, signs, and wonders. He currently oversees over seventy church locations in the United States, about sixty of which were planted under his leadership within nineteen years. A former banker turned preacher, he holds B.Sc in Business Administration and MBA degrees. His marriage of over thirty years is blessed with five children.',
  },
  {
    id: '3',
    name: 'Pastor Raymond Akoko',
    title: 'Local Pastor - DLBC Tampa',
    image: '/src/assets/pastor_raymond.jpg',
    bio: 'Pastor Raymond Akoko leads the Deeper Life Bible Church Tampa congregation with dedication to biblical teaching and holiness. He provides spiritual guidance and pastoral care to our church family, continuing the mission of making disciples and demonstrating God\'s love in our community.',
  },
];

export const leadership = [
  { name: 'Pastor W.F. Kumuyi', role: 'General Superintendent, DCLM Worldwide', bio: 'Pastor W.F. Kumuyi founded Deeper Life Bible Church in 1973 while serving as a Mathematics lecturer at the University of Lagos. Starting with just 15 university students, the ministry has grown to over 120,000 members in Lagos alone and thousands of churches across more than 40 countries worldwide. Born in 1941, Pastor Kumuyi was born again on April 5th, 1964. He holds a first-class degree in Mathematics from the University of Ibadan. Journalist Alan Isaacson describes him as "one of the greatest living preachers, giving a straightforward Bible-based message, his sermons thorough, and always personally challenging."', image: 'https://dclmcloud.s3.amazonaws.com/dclm.org/media/wf-kumuyi.jpg' },
  { name: 'Pastor Michael A. Dada', role: 'Regional Overseer - Mid-Atlantic & South-East USA', bio: 'Pastor Michael A. Dada is a dynamic Holy Ghost-filled preacher whose ministry has witnessed the conversion of souls and miracles, signs, and wonders. He currently oversees over seventy church locations in the United States, about sixty of which were planted under his leadership within nineteen years. A former banker turned preacher, he holds B.Sc in Business Administration and MBA degrees. In addition to serving as Regional Overseer, he is also a coordinating overseer for different countries in Asia. He serves as Chairman Board of Directors of the African Ministers Fellowship (A.M.F.) and National Vice Chairman for Africa Strategic Leadership Prayer Network (A.S.L.P.N.) in the USA. His marriage of over thirty years is blessed with five children.', image: '/src/assets/pastor_dada.JPG' },
  { name: 'Pastor Raymond Akoko', role: 'Local Pastor - DCLM Tampa', bio: "Pastor Raymond Akoko leads the Deeper Life Bible Church Tampa congregation with dedication to biblical teaching and holiness. He provides spiritual guidance and pastoral care to our church family, continuing the mission of making disciples and demonstrating God's love in our community.", image: '/src/assets/pastor_raymond.jpg' },
];

// Prayer Request Types
export const PRAYER_TYPES = [
  { value: 'healing', label: 'Healing & Health' },
  { value: 'guidance', label: 'Guidance & Direction' },
  { value: 'thanksgiving', label: 'Thanksgiving' },
  { value: 'family', label: 'Family & Relationships' },
  { value: 'financial', label: 'Financial Breakthrough' },
  { value: 'salvation', label: 'Salvation' },
  { value: 'other', label: 'Other' },
] as const;

// Hero Slides
export const HERO_SLIDES = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80',
    title: 'Welcome to DCLM Tampa',
    subtitle: 'Your Spiritual Welfare is Our Concern',
    cta: { label: 'Join Us This Sunday', href: '#services' },
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&q=80',
    title: 'Experience the Deeper Life',
    subtitle: 'Bible-Based Teaching for Spiritual Growth',
    cta: { label: 'Watch Sermons', href: '#sermons' },
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424f1?w=1920&q=80',
    title: 'Connect & Belong',
    subtitle: 'Find Your Place in Our Church Family',
    cta: { label: 'Get Connected', href: '/contact' },
  },
];

// Quick Stats
export const CHURCH_STATS = [
  { label: 'Years of Ministry', value: '50+' },
  { label: 'Countries Worldwide', value: '40+' },
  { label: 'Church Locations Worldwide', value: '50,000+' },
  { label: 'Weekly Services', value: '4' },
];

// About Content
export const ABOUT_CONTENT = {
  title: 'About DCLM Tampa',
  subtitle: 'Your Spiritual Welfare is Our Concern',
  description: `Deeper Life Bible Church Tampa is part of the global Deeper Christian Life Ministry, a multinational Bible-based holiness church founded by Pastor W.F. Kumuyi in 1973. What began as a Bible study group with 15 university students in Lagos, Nigeria has grown into a worldwide ministry with churches in over 40 countries.`,
  mission: `Our mission is to proclaim the gospel of Jesus Christ, make disciples, and equip believers for the work of ministry. We take Christian living and holiness seriously.`,
  vision: `To be a lighthouse of hope in Tampa Bay, reaching souls for Christ and raising disciples who impact their world for God's kingdom.`,
  values: [
    'Biblical Authority',
    'Holiness & Integrity',
    'Prayer & Worship',
    'Evangelism & Missions',
    'Discipleship & Growth',
    'Community & Fellowship',
  ],
};

// Doctrine Points
export const CORE_BELIEFS = [
  {
    title: 'The Bible',
    description: 'We believe the Bible is the inspired, infallible Word of God and the final authority for faith and practice.',
  },
  {
    title: 'Salvation',
    description: 'We believe salvation is by grace through faith in Jesus Christ alone, available to all who repent and believe.',
  },
  {
    title: 'Sanctification',
    description: 'We believe entire sanctification is a definite act of God\'s grace, subsequent to the New Birth, by which the believer\'s heart is purified and made holy through faith in the sanctifying blood of Jesus Christ.',
  },
  {
    title: 'The Holy Ghost',
    description: 'We believe the Baptism in the Holy Ghost is the endowment of power from on High upon the sanctified believer, accompanied by the initial evidence of speaking in tongues as the Spirit gives utterance.',
  },
];


export const beliefs = [
  { 
    id: 1,
    title: "THE HOLY BIBLE", 
    description: 
      "That the Holy Bible, consisting of 39 books of the Old Testament and 27 books" + 
        "of the New Testament, is the inspired Word of God. We take the Bible as final" + 
        "authority in all matters concerning Christian conduct and work.",
    references: "2 Timothy 3:16,17; Proverbs 30:5,6; Revelation 22:18,19." 
  },
  { 
    id: 2,
    title: "THE GODHEAD", 
    description: 
      "That the Godhead consists of three separate, distinct, and recognisable personalities" + 
      " and qualities, perfectly united in one. The Father, the Son, and the Holy Ghost are " + 
      " different Persons in the Godhead, not merely three names for one Person.",
    references: "Matthew 3:16,17; 2 Corinthians 13:14; Matthew 28:19,20."  
  },
  { 
    id: 3,
    title: "THE VIRGIN BIRTH OF JESUS", 
    description: 
      "The virgin birth of Jesus, the only begotten Son of God as well as His crucifixion, " + 
      "death, burial and bodily resurrection.",
    references: "Isaiah 7:14; Matthew 1:18-25; Romans 1:4; I Corinthians 15:3,4."  
    
  },
  { 
    id: 4,
    title: "Total Depravity, Sinfulness and Guilt of All Men", 
    description: 
      "The total depravity, sinfulness and guilt of all men since the Fall, rendering them " +
      "subject to God’s wrath and condemnation.",
    references: "Psalm 51:5; Job 14:4; Romans 3:23; 5:12-17; Mark 7:21-23; Ephesians 2:1."  
  },
  { 
    id: 5,
    title: "Repentance", 
    description: 
      "That Repentance is a complete turning away from all sins and its deceitful pleasures and "+
      "that it is required from every sinner before he can truly and effectively believe in Jesus "+
      "with saving faith.",
    references: "Proverbs 28:13; Isaiah 55:7; Ezekiel 18:21-23; Mark 1:15; Luke 24:46,47; Acts 2:38; 3:19; 20:20,21; 2 Corinthians 7:10; Hebrews 6:1-3."  
  },
  { 
    id: 6,
    title: "RESTITUTION", 
    description: 
      "That Restitution is making amends for wrongs done against our fellow-men, restoring stolen things "+
      " to their rightful owners, paying debts, giving back where one has defrauded, making confessions to"+ 
      " the offended and apologizing to those slandered so as to have a conscience void of offence toward God and man.", 
    references: "Genesis 20:1-8,14-18; Exodus 22:1-7; Leviticus 6:1-7; Numbers 5:6-8; 2 Samuel 12:1-6; Proverbs 6:30,31; Ezekiel 33:14-16; Matthew 5:23,24; Luke 19:8,9; Acts 23:1-5; 24:16; James 4:17." 
  },
  { 
    id: 7,
    title: "JUSTIFICATION", 
    description: 
      "That Justification is God’s grace through which one receives forgiveness and remission of sins and "+
      "is counted righteous before God, through faith in the atoning blood of Jesus. Having thus been cleared "+
      "of every guilt of sin, the regenerated stands before God as though he had never sinned, not on the basis "+
      "of any personal merit but in the light of what Christ had accomplished for mankind by His substitutionary "+
      "death on the cross at Calvary.",
    references: "Psalm 32:1,2; Isaiah 1:18; Micah 7:19; Acts 13:38."  
  },
  { 
    id: 8,
    title: "WATER BAPTISM", 
    description: 
      "That water Baptism is essential to our obedience after reconciliation with God. Water Baptism is one immersion "+
      "(not three) “In the name of the Father, and of the Son, and of the Holy Ghost”, as Jesus commanded.", 
    references: "Matthew 28:19; 3:13-17; Mark 16:15,16; Acts 2:38;8:38,39; 19:1-5; Romans 6:4,5."
  },
  { 
    id: 9,
    title: "THE LORD'S SUPPER", 
    description: 
      "That the Lord’s supper was instituted by Jesus Christ so that all believers (all members of the family of God) "+
      "might partake thereof regularly, to “shew the Lord’s death till he come”. The emblems used are “unleavened bread” and "+
      " the juice of “fruit of the vine”. Anyone who eats and drinks unworthily brings “damnation”, punishment and chastisement "+
      "upon himself." , 
    references: "Matthew 26:29; Luke 22:17-20; I Corinthians 11:23-30."
  },
  { 
    id: 10,
    title: "ENTIRE SANCTIFICATION", 
    description: 
      "That Entire Sanctification is a definite act of God’s grace, subsequent to the New Birth, by "+
      "which the believer’s heart is purified and made holy. It cannot be attained progressively by "+
      "works, struggle or suppression, but it is obtained by faith in the sanctifying blood of Jesus "+
      "Christ. Holiness of life and purity of heart are central to Christian living.", 
    references: "Luke 1:74,75; John 17:15-17; I Thessalonians 4:3,7,8; 5:22-24; Ephesians 5:25-27; Hebrews 2:11; 10:10,14; 13:11,12; Titus 2:11-14; I John 1:7; Hebrews 12:14; I Peter 1:14-16."
  },
  { 
    id: 11,
    title: "HOLY GHOST BAPTISM", 
    description: 
      "That the Baptism in the Holy Ghost is the enduement of power from on High upon the sanctified "+
      "believer. It is “the promise of the Father” and when one receives this “gift of the Holy Ghost”, "+
      "it is accompanied by the initial evidence of speaking a language unlearned previously, referred "+
      "to as speaking in tongues as the Spirit gives utterance. We do not teach or instruct people how "+
      "to speak in tongues: the Holy Spirit gives utterance. We also stress the necessity of purity before "+
      "power. The Gifts of the Spirit are for believers today.", 
      references: "Matthew 3:11; Acts 1:8; Luke 3:16; 24:49; John 1:30-33; 7:37-39; 14:16,17,26; 15:26; 16:12-15; Acts 1:5-8; Mark 16:17; Acts 2:1-18; 10:44-46; Acts 19:1-6; I Corinthians 12:1-31; 14:1-40." 
  },
  { 
    id: 12,
    title: "REDEMPTION, HEALING AND HEALTH", 
    description: 
      "That Redemption from the curse of the law, Healing of sickness and disease as well as "+
      "continued Health are provided for all people through the sacrificial death of Jesus Christ.", 
      references: "Exodus 15:26; Deuteronomy 7:15; Psalm 103:1-5; Proverbs 4:20-22; Isaiah 53:4,5; Matthew 8:16,17; I Peter 2:24; Mark 16;15-18; Luke 13:16; John 14:12-14; 10:10; Acts 10:38; James 5:14-16; 3 John 2 Galatians 3:13,14." 
  },
  { 
    id: 13,
    title: "PERSONAL EVANGELISM", 
    description: 
      "That Personal Evangelism is a God-given and God-ordained ministry for every "+
      "believer. Jesus commanded and God requires every believer to be a compassionate "+
      "and fruitful soulwinner, bringing others to Christ.", 
    references: "Matthew 28:19,20; Mark 16:15; Luke 24:46-49; John 17:18; Acts 1:8; 1-4; Psalm 126:5,6; Proverbs 11:30; Daniel 12:3; Ezekiel 3:17-21."
  },
  { 
    id: 14,
    title: "MARRIAGE", 
    description: 
      "That Marriage is binding for life. Monogamy is the uniform teaching of the "+
      "Bible. Polygamy is contrary to God’s perfect will and institution. Also, under "+
      "the New Testament dispensation, no one has a right to divorce and remarry while "+
      "the first companion lives. When a person becomes converted, necessary restitution, on "+
      "this line, must be done without delay if he has married wrongly.", 
      references: "Genesis 2:24; Deuteronomy 7:1-4; Job 23:11-13; 2 Corinthians 6:14-18; Proverbs 31:10-31; Malachi 2:14,15; Romans 7:2,3; Ephesians 5:31-33; Matthew 5;31,32; 19:3-9; Mark 10:2-12; Luke 16:18; John 4:15-19; Genesis 20:3-7." 
  },
  { 
    id: 15,
    title: "THE RAPTURE", 
    description: 
      "That the Rapture (commonly referred to as the first phase or stage of the SECOND "+
      "COMING OF CHRIST) is the catching away from the earth, of all living saints and all "+
      "who died in the Lord. The Rapture will take place before the Great Tribulation and can "+
      "happen any time from now. “In a twinkling of an eye” without a moment’s warning, “the "+
      "trumpet shall sound” “and the dead in Christ shall rise first; then we which are alive "+
      "and remain shall be caught up together with them in the clouds, to meet the Lord in the "+
      "air: and so shall we ever be with the Lord./”", 
      references: "John 14:1-3; Luke 21:34-36; I Corinthians 15:51-58; I Thessalonians 4:13-18; 5:4-9; 2 Thessalonians 2:5-7; Philippians 3:11,20,21; I John 3:1-3." 
  },
  { 
    id: 16,
    title: "THE RESURRECTION OF THE DEAD", 
    description: 
      "That the Resurrection of the dead is taught in the Bible as clearly as the "+
      "immortality of the soul. Every individual who has ever lived will be resurrected, "+
      "some to honour and glory and others to everlasting shame and contempt.", 
    references: "Job 19:25-27; Psalm 71:20; Isaiah 26:19; Daniel 12:2; John 5:28,29; I Corinthians 15:12-57; I Thessalonians 4:13-16; Hebrews 6:1,2; Philippians 3:8-11; Revelation 20:4,6,12,13."
  },
  { 
    id: 17,
    title: "THE GREAT TRIBULATION", 
    description: 
      "That the Great Tribulation will occur after the Rapture and will be a "+
      "time of terrible suffering on earth. It is also referred to as the time "+
      "of “Jacob’s trouble”. During this time, the Antichrist will take possession "+
      "of this world for a reign of terror. He will not be a system or organization "+
      "but a person – a supernatural, diabolical being, in the form of a man who will "+
      "blaspheme and proclaim himself to be God. The Marriage Supper of the Lamb will "+
      "take place above while the Tribulation continues on earth.", 
    references: "Matthew 24:21,22,29; Revelation 9:16; Mark 13:19; 2 Thessalonians 2:3-12; Revelation 13. Daniel 8:23-25; 2 Thessalonians 2:7-12; Revelation 13:1-10. Revelation 19:1-10."
  },
  { 
    id: 18,
    title: "THE SECOND COMING OF CHRIST", 
    description: 
      "That the Second Coming of Christ will be just as literal and visible as His "+
      "going away, and He is coming to execute judgement upon the ungodly. He will "+
      "also, then, set up His Kingdom and reign on this present earth for a thousand years.", 
    references: "Zechariah 14:3,4; Matthew 25:31-46; 26:64; Mark 13:24-37; 2 Thessalonians 1:7-10; 2:8; Jude 14,15."
  },
  { 
    id: 19,
    title: "CHRIST'S MILLENNIAL REIGN", 
    description: 
      "That Christ’s Millennial Reign is the 1,000 years literal reign of Jesus on "+
      "earth, which will be ushered in by the coming of Jesus back to earth with ten "+
      "thousands of His saints. At this time He will judge the nations that dwell upon "+
      "the face of the earth. During this time, the devil will be bound. It will be a "+
      "reign of peace and blessing.", 
    references: "Jude 14,15; 2 Thessalonians 1:7-10. Revelation 20:2,3. Isaiah 11:6-9; 65:25; Hosea 2:18; Zechariah 14:9-20; Isaiah 2:2-4."
  },
  { 
    id: 20,
    title: "THE GREAT WHITE THRONE JUDGEMENT", 
    description: 
      "That the Great White Throne Judgement is when God finally judges all (the living "+
      "and the dead, small and great) who have ever lived on the face of the earth, "+
      "according to their works. This is after the Millennium. At this time, the final "+
      "Judgement known as the Great White Throne Judgement will be held. All those, from "+
      "all ages, who have not yet been judged (believers’ judgement for sin, borne and "+
      "accomplished by Christ on the Cross will stand before God at this time. The devil "+
      "and his angels are judged at this time also and sent to the lake of fire forever.", 
    references: "John 5:24; 3:17-19. Daniel 12:2,3; Matthew 10:15; 11:21-24,12:41,42; John 5:28,29; Romans 2:15,16; 14:12; 2 Peter 2:9; Jude 6; I Corinthians 6:1-4; Acts 10:42; Revelation 20:11-15."
  },
  { 
    id: 21,
    title: "THE NEW HEAVEN AND THE NEW EARTH", 
    description: 
      "That the New Heaven and the New Earth “wherein dwelleth righteousness” will be "+
      "made by God and the redeemed shall dwell therein with God forever. This present "+
      "earth which has been polluted by sin will pass away after the Great White Throne "+
      "Judgement. No unclean thing will be there. There, we shall know each other, our "+
      "knowledge having been perfected. There will be no more curse upon anything. There "+
      "will be no more night; the glory of the Lord will be the light thereof.", 
    references: "Psalm 102:25,26; Isaiah 51:6; 65:17; Matthew 5:18; 24:35; 2 Peter 3:10-13; Revelation 21:1- Isaiah 66:22; 2 Peter 3:12,13; I Corinthians 13:12; I John 3:2,3; Revelation 21:1-7; 22:1-5."
  },
  { 
    id: 22,
    title: "HELL", 
    description: 
      "That Hell fire is a place of everlasting punishment where sinners (all who do not have " + 
      "their names in the book of life) will suffer torments for ever and ever. It was prepared " +
      "for the devil and his angels (Matthew 25:41) but God has decreed that the wicked and those " +
      "who forget Him and reject Christ will also be cast there because of their sin and neglect " + 
      "of His salvation.", 
    references: "Psalm 9:17; Matthew 25:46; Luke 12:4,5; 16:19-31; Matthew 5:22,30; Mark 9:43-47; Revelation 14:10,11; 20:10,12,15."
  }
];


// Gallery Images
export const GALLERY_IMAGES = [
  {
    id: '1',
    src: '/src/assets/church_1.jpeg',
    alt: 'DCLM Tampa church gathering',
    category: 'Worship',
    date: '2024-12-01',
  },
  {
    id: '2',
    src: '/src/assets/church_2.jpeg',
    alt: 'DCLM Tampa fellowship',
    category: 'Fellowship',
    date: '2024-11-28',
  },
  {
    id: '3',
    src: '/src/assets/church_3.jpg',
    alt: 'DCLM Tampa worship service',
    category: 'Worship',
    date: '2024-11-22',
  },
  {
    id: '4',
    src: '/src/assets/church_4.jpg',
    alt: 'DCLM Tampa community',
    category: 'Community',
    date: '2024-11-20',
  },
  {
    id: '5',
    src: '/src/assets/church_5.jpg',
    alt: 'DCLM Tampa ministry event',
    category: 'Ministry',
    date: '2024-11-15',
  },
  {
    id: '6',
    src: '/src/assets/church_6.jpg',
    alt: 'DCLM Tampa prayer meeting',
    category: 'Prayer',
    date: '2024-11-10',
  },
  {
    id: '7',
    src: '/src/assets/church_7.jpg',
    alt: 'DCLM Tampa Bible study',
    category: 'Study',
    date: '2024-11-05',
  },
  {
    id: '8',
    src: '/src/assets/church_8.jpg',
    alt: 'DCLM Tampa youth gathering',
    category: 'Youth',
    date: '2024-11-01',
  },
  {
    id: '9',
    src: '/src/assets/church_9.jpg',
    alt: 'DCLM Tampa outreach',
    category: 'Outreach',
    date: '2024-10-28',
  },
  {
    id: '10',
    src: '/src/assets/church_10.jpg',
    alt: 'DCLM Tampa special service',
    category: 'Service',
    date: '2024-10-22',
  },
  {
    id: '11',
    src: '/src/assets/church_11.jpg',
    alt: 'DCLM Tampa celebration',
    category: 'Celebration',
    date: '2024-10-15',
  },
];

// Giving - Impact Areas
export const IMPACT_AREAS = [
  { title: 'Ministry Operations', description: 'Supporting worship services, Bible studies, and the daily operations of our church.', icon: 'heart' },
  { title: 'Local Outreach', description: 'Serving our Tampa community through evangelism, food pantry, and benevolence.', icon: 'users' },
  { title: 'Global Missions', description: 'Supporting missionaries and church planting efforts around the world.', icon: 'globe' },
  { title: 'Children & Youth', description: "Investing in the next generation through vibrant children's and youth programs.", icon: 'building' },
];

// Giving - Methods
export const GIVING_METHODS = [
  { title: 'Online Giving', description: 'Give securely online using your credit card, debit card, or bank account.', features: ['Instant confirmation', 'Recurring options', 'Mobile friendly', 'Secure encryption'], cta: 'Give Online', icon: 'dollar-sign', primary: true },
  { title: 'In-Person Giving', description: 'Offering boxes are available at each service entrance.', features: ['Available at all services', 'Checks payable to DCLM Tampa', 'Giving envelopes provided'], cta: 'Visit Us', icon: 'building', primary: false },
  { title: 'Mail Your Gift', description: 'Send your gift by mail to our church office.', features: ['9720 N 56th St', 'Temple Terrace, FL 33617'], cta: 'Get Address', icon: 'send', primary: false },
];

// Giving - Special Funds
export const SPECIAL_FUNDS = [
  { title: 'Building Fund', description: 'Help us expand our facilities to accommodate growth.', goal: '-', raised: '-', percentage: 0 },
  { title: 'Mission Fund', description: 'Support our missionaries and global church planting efforts.', goal: '-', raised: '-', percentage: 0 },
  { title: 'Benevolence Fund', description: 'Provide assistance to those facing financial hardship.', goal: '-', raised: '-', percentage: 0 },
];

// Giving - FAQs
export const GIVING_FAQS = [
  { question: 'Is my online gift secure?', answer: 'Yes! We use industry-standard encryption and security measures to protect your financial information.' },
  { question: 'Will I receive a tax receipt?', answer: 'Yes, you will receive a giving statement at the end of each calendar year for tax purposes.' },
  { question: 'Can I set up recurring gifts?', answer: 'Absolutely! Our online giving platform allows you to set up weekly, bi-weekly, or monthly recurring gifts.' },
  { question: 'How much should I give?', answer: 'We encourage biblical giving—proportional, sacrificial, and cheerful. The most important thing is to give with a grateful heart.' },
];

// Recurring Events
export const RECURRING_EVENTS = [
  { title: 'Sunday Morning Worship', time: '8:00 AM', description: 'Join us for biblical preaching, passionate worship, and corporate prayer.', icon: 'worship' },
  { title: 'Monday Bible Study', time: '6:00 PM', description: "Midweek Bible study where we dig deeper into God's Word together.", icon: 'study' },
  { title: 'Tuesday Leadership Development', time: '6:30 PM', description: 'Training and equipping church leaders for effective ministry.', icon: 'leadership' },
  { title: "Saturday Workers' Training", time: '5:00 PM', description: 'Equipping workers for service in various church ministries.', icon: 'training' },
];

// Annual Events
export const ANNUAL_EVENTS = [
  { title: 'Easter Services', description: 'Celebrate the resurrection of our Lord with special sunrise service and worship celebration.', icon: '🌅' },
  { title: 'Global December Retreat', description: 'Annual spiritual retreat with believers worldwide for revival, renewal, and spiritual growth.', icon: '🙏' },
  { title: 'Youth Conference', description: 'Annual gathering for young people featuring worship, teaching, and meaningful connections.', icon: '🎯' },
  { title: "Women's Conference", description: 'Annual gathering for women featuring worship, teaching, and meaningful connections.', icon: '💐' },
  { title: 'Mission Conference', description: 'Annual focus on global missions with guest missionaries and special speakers.', icon: '🌍' },
  { title: "Workers' Retreat", description: 'Weekend away for church workers to be challenged, equipped, and refreshed.', icon: '⛰️' },
];

// Visit Steps (for Contact page)
export const VISIT_STEPS = [
  {
    step: 1,
    title: 'Plan Your Visit',
    description: 'Check our service times and plan to arrive 10-15 minutes early.',
  },
  {
    step: 2,
    title: 'Parking & Arrival',
    description: 'Free parking is available in our lot. Look for our church sign-boards to guide',
  },
  {
    step: 3,
    title: 'What to Expect',
    description: 'Dress comfortably. Services include worship, teaching, and fellowship time.',
  },
  {
    step: 4,
    title: 'Connect with Us',
    description: 'Fill out a connection card or ask our ushers to learn more.',
  },
  {
    step: 5,
    title: 'Get Involved',
    description: 'Discover ministries and small groups where you can belong and serve.',
  },
];

// Directions (for Contact page)
export const DIRECTIONS = {
  description: 'We are located in Temple Terrace, easily accessible from major highways.',
  parking: 'Free parking is available in our main lot off N 56th St. Additional overflow parking is available on weekends.',
  directions: [
    'From I-275: Take Exit 50 (Fowler Ave) and head east',
    'Turn left on N 56th St',
    'Church is on the right at 9720 N 56th St',
  ],
};

// Pastor Welcome Default Message (fallback)
export const DEFAULT_PASTOR_MESSAGE = [
  'Welcome to Deeper Life Bible Church Tampa! We are so glad you are here. Whether you are visiting for the first time or have been part of our church family for years, it is our prayer that you encounter the living God as we gather to worship Him together.',
  'Our church is committed to the faithful teaching of God\'s Word, passionate worship, and authentic community. We believe that the Bible is God\'s revealed truth, and we are dedicated to living according to its principles in holiness and love.',
  'I invite you to join us this Sunday as we study the Scriptures together, lift our voices in praise, and fellowship with other believers. May the Lord bless you richly as you seek to know Him more deeply and serve Him more faithfully.',
];

// Hero Section Metrics (fallback)
export const HERO_METRICS = [
  { label: 'Sunday Worship', value: '9:00 AM' },
  { label: 'Wednesday Bible Study', value: '6:00 PM' },
  { label: 'Location', value: '9720 N 56th St, Temple Terrace' },
];

// Gathering Details (fallback)
export const GATHERING_DETAILS = [
  { label: 'Wednesday Bible Study', value: '6:00 PM' },
  { label: 'Saturday Children Bible Study', value: '11:00 AM' },
  { label: 'Location', value: 'Zoom Online' },
];


// Hero Background Images
export const HERO_BACKGROUNDS = {
  home: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1920&q=80',
  ministries: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80',
  events: 'https://images.unsplash.com/photo-1519167758481-83f29da8c835?w=1920&q=80',
  sermons: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&q=80',
  give: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
};





// Service Time Default Images
export const SERVICE_TIME_IMAGES = {
  'Sunday Worship Service': '/src/assets/church_2.jpeg',
  'Bible Study': '/src/assets/church_6.jpg',
  'Prayer Meeting & Revival Service': '/src/assets/church_8.jpg',
  'Community Outreach': '/src/assets/church_4.jpg',
};

// Ministry Statistics
export const MINISTRY_STATS = [
  { number: '12+', label: 'Active Ministries' },
  { number: '500+', label: 'Volunteers Serving' },
  { number: '1,000+', label: 'Lives Impacted Monthly' },
  { number: '25+', label: 'Weekly Programs' },
];

// About Section Data
export const ABOUT_SECTION = {
  image: '/src/assets/church_1.jpeg',
  churchInteriorImage: '/src/assets/church_3.jpg',
  history: [
    'Founded in 1995, Deeper Life Bible Church Tampa has been a beacon of hope and spiritual transformation in the Tampa Bay community for nearly three decades.',
    'What began as a small gathering of believers committed to biblical truth and holiness has grown into a vibrant congregation serving hundreds of families across the region.',
    'Our church is part of the global Deeper Life Bible Church movement, which was founded by Pastor W.F. Kumuyi in Nigeria in 1973. Today, the ministry spans over 120 countries worldwide, united by a commitment to sound doctrine, holy living, and passionate evangelism.',
  ],
};

// Default Fallback Images
export const DEFAULT_IMAGES = {
  pastor: '/src/assets/pastor_raymond.jpg',
  leader: '/src/assets/pastor_raymond.jpg',
  ministry: '/src/assets/church_5.jpg',
  event: '/src/assets/church_7.jpg',
  sermon: '/src/assets/church_9.jpg',
};


// ============================================================================
// FLORIDA DCLM LOCATIONS
// ============================================================================

export const FLORIDA_LOCATIONS = [
  { id: 'tampa', name: 'Deeper Life Bible Church, Tampa', pastor: 'Pastor Raymond Akoko', address: '9720 North 56th Street, Temple Terrace, Tampa FL 33617', phone: '(813) 542-7793', facebook: 'https://www.facebook.com/Deeper-Life-Bible-Church-Tampa-Florida-USA-134141673318398/' },
  { id: 'deltona', name: 'Deeper Life Church, Deltona', pastor: 'Pastor Obafemi Ogunrinde', address: '704 Goldcoast Drive, Deltona, FL 32725', phone: '(386) 860-4094' },
  { id: 'gainesville', name: 'Deeper Life Bible Church, Gainesville', pastor: 'Pastor Akin Omoniyi', address: '1731 NW 6th Street, Suite B1, Gainesville, FL 32609', phone: '(301) 204-6564' },
  { id: 'jacksonville', name: 'Deeper Life Bible Church, Jacksonville', pastor: 'Pastor Joseph Adedokun', address: '8849 Ivey Road, Jacksonville, FL 32216', phone: '(904) 723-3522' },
  { id: 'miami', name: 'Deeper Life Bible Church, Miami/Miramar', pastor: 'Pastor Michael Bayere', address: '17325 NW 27th Avenue, Suite 204, Miami Gardens, FL 33056', phone: '(305) 318-2437' },
  { id: 'orlando', name: 'Deeper Life Bible Church, Orlando', pastor: 'Pastor Victor Nkwocha', address: '802 Crest Pines Drive, Orlando, FL 32828', phone: '(321) 202-3242' },
];

// ============================================================================
// REGIONAL & USEFUL LINKS
// ============================================================================

export const REGIONAL_INFO = {
  headquarters: {
    name: 'Deeper Life Bible Church - Regional Headquarters',
    overseer: 'Pastor Michael A. Dada',
    address: '4915 Sargent Road N.E., Washington DC 20017',
    phone: '(202) 509-7771',
    altPhone: '(202) 829-8145',
    email: 'deeperlifedc@yahoo.com',
    website: 'https://deeperlifedc.org',
  },
  floridaState: {
    overseer: 'Pastor Obafemi Ogunrinde',
    address: '704 Goldcoast Drive, Deltona, FL 32725',
    phone: '(386) 860-4094',
    email: 'deeperlifefl@bellsouth.net',
  },
};

export const USEFUL_LINKS = {
  dclmWorldwide: 'https://dclm.org',
  dclmWebcast: 'https://webcast.dclm.org',
  dclmRadio: 'https://radio.dclm.org',
  dailyManna: 'https://dailymanna.dclm.org',
  higherEveryday: 'https://highereveryday.dclm.org',
  regionalHQ: 'https://deeperlifedc.org',
  floridaChurches: 'https://dclmfl.org',
};
