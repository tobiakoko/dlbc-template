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
  shortName: 'DCLM Tampa',
  tagline: 'Experience the Deeper Life in Christ',
  address: {
    street: '1234 Faith Avenue',
    city: 'Tampa',
    state: 'FL',
    zip: '33601',
    country: 'USA',
  },
  phone: '(813) 555-0123',
  email: 'info@dclmtampa.org',
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com/dclmtampa', label: 'Follow us on Facebook' },
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
      { label: 'Men\'s Ministry', href: '/ministries/men' },
      { label: 'Women\'s Ministry', href: '/ministries/women' },
      { label: 'Youth Ministry', href: '/ministries/youth' },
      { label: 'Children\'s Ministry', href: '/ministries/children' },
    ]
  },
  { label: 'Events', href: '/events' },
  { label: 'Contact Us', href: '/contact' },
];

// Service Times
export const SERVICE_TIMES: ServiceTime[] = [
  {
    id: 'sunday-school',
    day: 'Sunday',
    name: 'Sunday School',
    time: '9:00 AM',
    description: 'Bible study for all ages',
    icon: 'book-open',
  },
  {
    id: 'sunday-worship',
    day: 'Sunday',
    name: 'Worship Service',
    time: '10:30 AM',
    description: 'Main worship gathering',
    icon: 'music',
  },
  {
    id: 'wednesday-bible',
    day: 'Wednesday',
    name: 'Bible Study',
    time: '7:00 PM',
    description: 'Midweek teaching and prayer',
    icon: 'book',
  },
  {
    id: 'friday-prayer',
    day: 'Friday',
    name: 'Prayer Meeting',
    time: '7:00 PM',
    description: 'Corporate prayer and intercession',
    icon: 'heart',
  },
];

// Featured Sermons
export const FEATURED_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Divine Purpose',
    preacher: 'Pastor W.F. Kumuyi',
    date: '2024-12-08',
    duration: '45:30',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    category: 'Sunday Message',
    description: 'Discovering and fulfilling God\'s unique purpose for your life.',
  },
  {
    id: '2',
    title: 'The Power of Prayer',
    preacher: 'Pastor John Doe',
    date: '2024-12-01',
    duration: '38:15',
    thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
    category: 'Wednesday Teaching',
    description: 'Understanding the transformative power of consistent prayer.',
  },
  {
    id: '3',
    title: 'Faith That Moves Mountains',
    preacher: 'Pastor W.F. Kumuyi',
    date: '2024-11-24',
    duration: '52:00',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    category: 'Sunday Message',
    description: 'Building unshakeable faith in challenging times.',
  },
  {
    id: '4',
    title: 'Living a Holy Life',
    preacher: 'Pastor Jane Smith',
    date: '2024-11-17',
    duration: '41:45',
    thumbnail: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    category: 'Special Service',
    description: 'Practical steps to holiness in everyday living.',
  },
];

// Upcoming Events
export const UPCOMING_EVENTS: ChurchEvent[] = [
  {
    id: '1',
    title: 'Christmas Carol Service',
    date: '2024-12-22',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    description: 'Join us for an evening of worship and celebration as we honor the birth of our Savior.',
    category: 'worship',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
  },
  {
    id: '2',
    title: 'New Year\'s Eve Service',
    date: '2024-12-31',
    time: '10:00 PM',
    location: 'Main Sanctuary',
    description: 'Cross over into the new year with prayer, praise, and prophetic declarations.',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80',
  },
  {
    id: '3',
    title: 'Youth Conference 2025',
    date: '2025-01-15',
    time: '9:00 AM',
    location: 'Youth Center',
    description: 'A powerful gathering for young people to encounter God and discover their purpose.',
    category: 'youth',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  },
];

// Ministries
export const MINISTRIES: Ministry[] = [
  {
    id: 'men',
    name: 'Men\'s Ministry',
    description: 'Empowering men to be godly leaders in their homes, workplaces, and communities.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    leader: 'Bro. Michael Johnson',
    meetingTime: 'First Saturday, 8:00 AM',
  },
  {
    id: 'women',
    name: 'Women\'s Ministry',
    description: 'Building strong women of faith through fellowship, study, and service.',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80',
    leader: 'Sis. Sarah Williams',
    meetingTime: 'Second Saturday, 9:00 AM',
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    description: 'Raising up a generation passionate about Jesus and equipped for impact.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    leader: 'Pastor David Brown',
    meetingTime: 'Every Friday, 6:00 PM',
  },
  {
    id: 'children',
    name: 'Children\'s Ministry',
    description: 'Teaching children the Word of God in fun, engaging, and age-appropriate ways.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    leader: 'Sis. Mary Anderson',
    meetingTime: 'Every Sunday, 9:00 AM',
  },
];

// Leadership Team
export const LEADERSHIP: Leader[] = [
  {
    id: '1',
    name: 'Pastor W.F. Kumuyi',
    title: 'General Superintendent',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Founder and General Superintendent of Deeper Life Bible Church worldwide.',
  },
  {
    id: '2',
    name: 'Pastor James Thompson',
    title: 'Regional Pastor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Leading the Tampa congregation with passion for souls and biblical teaching.',
  },
  {
    id: '3',
    name: 'Pastor Grace Thompson',
    title: 'Associate Pastor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Overseeing women\'s ministry and family counseling.',
  },
];

// Prayer Request Types
export const PRAYER_TYPES = [
  { value: 'healing', label: 'Healing & Health' },
  { value: 'guidance', label: 'Guidance & Direction' },
  { value: 'thanksgiving', label: 'Thanksgiving' },
  { value: 'family', label: 'Family & Relationships' },
  { value: 'financial', label: 'Financial Breakthrough' },
  { value: 'other', label: 'Other' },
] as const;

// Hero Slides
export const HERO_SLIDES = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80',
    title: 'Welcome to DCLM Tampa',
    subtitle: 'Experience the Deeper Life in Christ',
    cta: { label: 'Join Us This Sunday', href: '#services' },
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&q=80',
    title: 'Grow in Faith',
    subtitle: 'Biblical Teaching for Spiritual Maturity',
    cta: { label: 'Watch Sermons', href: '#sermons' },
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424f1?w=1920&q=80',
    title: 'Connect & Belong',
    subtitle: 'Find Your Place in Our Church Family',
    cta: { label: 'Get Connected', href: '#contact' },
  },
];

// Quick Stats
export const CHURCH_STATS = [
  { label: 'Years of Ministry', value: '50+' },
  { label: 'Countries Worldwide', value: '100+' },
  { label: 'Local Members', value: '500+' },
  { label: 'Weekly Services', value: '4' },
];

// About Content
export const ABOUT_CONTENT = {
  title: 'About DCLM Tampa',
  subtitle: 'Proclaiming the Gospel of Jesus Christ',
  description: `Deeper Life Bible Church Tampa is a vibrant community of believers committed to 
    the authentic teaching of God\'s Word. As part of the global Deeper Life Bible Church ministry 
    founded by Pastor W.F. Kumuyi, we are dedicated to spiritual growth, evangelism, and service 
    to our community.`,
  mission: `Our mission is to proclaim the gospel of Jesus Christ, make disciples, and equip 
    believers for the work of ministry. We believe in the transformative power of God\'s Word 
    and the Holy Spirit to change lives and communities.`,
  vision: `To be a lighthouse of hope in Tampa Bay, reaching souls for Christ and raising 
    disciples who impact their world for God\'s kingdom.`,
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
    title: 'Holy Living',
    description: 'We believe in the call to holy living, empowered by the Holy Spirit, as evidence of genuine faith.',
  },
  {
    title: 'The Church',
    description: 'We believe the Church is the body of Christ, called to worship, fellowship, and mission in the world.',
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

export const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Pastor Raymond Akoko',
    date: 'December 3, 2024',
    scripture: 'Hebrews 11:1-6',
    duration: '42 min',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    speaker: 'Rev. Sarah Mitchell',
    date: 'November 26, 2024',
    scripture: 'Matthew 6:5-15',
    duration: '38 min',
  },
  {
    id: 3,
    title: 'Living in Grace',
    speaker: 'Pastor Michael A. Dada',
    date: 'November 19, 2024',
    scripture: 'Ephesians 2:1-10',
    duration: '45 min',
  },
  {
    id: 4,
    title: 'The Fruit of the Spirit',
    speaker: 'Elder Michael Chen',
    date: 'November 12, 2024',
    scripture: 'Galatians 5:22-26',
    duration: '40 min',
  },
  {
    id: 5,
    title: 'Love One Another',
    speaker: 'Pastor Raymond Akoko',
    date: 'November 5, 2024',
    scripture: 'John 13:34-35',
    duration: '36 min',
  },
  {
    id: 6,
    title: 'The Great Commission',
    speaker: 'Pastor W.F. Kumuyi',
    date: 'October 29, 2024',
    scripture: 'Matthew 28:16-20',
    duration: '44 min',
  },
];


export const leadership = [
    {
      name: 'Pastor W.F. Kumuyi',
      role: 'General Superintendent',
      bio: 'Pastor Kumuyi founded Deeper Life Bible Church in 1973 with 15 university students. A former Mathematics professor, he is recognized as one of the greatest living preachers, leading a ministry that has grown to over 120,000 members in Lagos and thousands of churches worldwide across 40+ countries.',
      image: '',
    },
    {
      name: 'Pastor Michael A. Dada',
      role: 'Regional Overseer - Mid Atlantic Region, USA',
      bio: 'Pastor Dada is a dynamic Holy Ghost-filled preacher overseeing over 70 church locations in the United States. A former banker with B.Sc and MBA degrees, he has planted about 60 churches within 19 years and has ministered across the United States, Europe, Asia, Africa, and the Caribbean.',
      image: '',
    },
    {
      name: 'Pastor Raymond Akoko',
      role: 'Local Pastor - Tampa, Florida',
      bio: 'Pastor Raymond Akoko leads our local congregation with dedication to biblical teaching and holiness. He provides spiritual guidance and pastoral care to our church family, continuing the mission of making disciples and demonstrating God\'s love in our community.',
      image: '',
    },
  ];
