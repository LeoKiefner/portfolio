const header = {
  homepage: '',
  title: 'Léo Kiefner',
}

const about = {
  name: 'Léo Kiefner',
  role: 'Working @ C-Koya Tech',
  description:
  'I am a dedicated second-year Computer Science student at IUT Robert Schuman, specializing in software solution development with a keen passion for web development.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/leo-kiefner/',
    github: 'https://github.com/LeoKiefner'
  },
  photo: 'https://cdn.discordapp.com/attachments/1221561089632895198/1245419565261914233/1699710973598.png?ex=6658aedb&is=66575d5b&hm=109ce61a4b1f9f5fc645842dface18db800d556c15fddf10df8fca478845c93d&',
}

const projects = [ 
  {
    image: 'https://media.discordapp.net/attachments/1221561089632895198/1245116127584190495/file-vwFiwvxpMK8bHfFSQrnLi0wq.png?ex=66579441&is=665642c1&hm=7530dadb336f4c5ea3c4eeba0300c38e8dadb353aa0ef6439453d3229380d7e8&=&format=webp&quality=lossless&width=693&height=693 ',
    name: 'CocoBot',
    description: 'Cocobot is an innovative solution designed with a friend of mine to revolutionize content creation across platforms. This automated system takes a video uploaded to YouTube via a link and edits it to align with the algorithmic preferences of TikTok and YouTube Shorts.',
    stack: ['python', 'api', 'automation'],
    sourceCode: 'https://github.com/LeoKiefner/CocoBot-Automatic-Editing-Video-App/tree/main',
    livePreview: 'https://github.com/LeoKiefner/CocoBot-Automatic-Editing-Video-App/tree/main',
  },
  {
    image: 'https://media.discordapp.net/attachments/1221561089632895198/1245113932096475176/file-jhpyUyMJJlaAUjdPLa7XrzeR.png?ex=66579236&is=665640b6&hm=92117ec6a47e3a1caa983c5f4ed7f14219689ad4cb66728fbf3754aa05327a31&=&format=webp&quality=lossless&width=350&height=350',
    name: 'Bookology',
    description: 'React and Laravel project to enhance and gamify your reading experience',
    stack: ['React', 'TypeScript', 'JavaScript', 'Laravel', 'PHP', 'SQL'],

  },
  {
    image: 'https://cdn.discordapp.com/attachments/1221561089632895198/1245115861363069068/file-8i3hliCiTXwh8mkWVCNRTgSj.png?ex=66579402&is=66564282&hm=1a6ac82b63537f1596adb5c1928075bf8f417b7e4149720e2e4608854053ced7&',
    name: 'MoseArt',
    description: 'MoseArt is a turn-based management game in which the player embodies Robert Mose, the director of the IUT Robert Schuman in Illkirch-Graffenstaden, for a 5-year mandate.',
    stack: ['Unity', 'C#', 'Plastic SCM','Agile', 'Scrum'],

  },
  {
    image:'https://media.discordapp.net/attachments/1221561089632895198/1245452478397415511/file-cRC0HsRtoMpWwLNTRwGIhpZg.png?ex=6658cd82&is=66577c02&hm=f91789ce13783b6b21cf7c4990742d627dc9c38d9c0150b3af2aaf7eb7b3a912&=&format=webp&quality=lossless&width=693&height=693',
    name: 'Portfolio',
    description: 'My personal portfolio, made with React',
    stack: ['React', 'JavaScript', 'CSS'],

  },
  {
    image:'https://media.discordapp.net/attachments/1221561089632895198/1245453161238368419/file-DZn6YO0eBxgsHbkycHOiLi0r.png?ex=6658ce25&is=66577ca5&hm=6d0e3c5c0c04b40b8fa43809621343e0bbbfb1615fe9fdbd2651915d0c988b7b&=&format=webp&quality=lossless&width=693&height=693',
    name: 'Nooblety',
    description: 'Nooblety is an immersive game that transports you to a medieval universe taking place in Amboise during the Renaissance until the start of the Wars of Religion (1450 - 1574). You\'ll start off as a young peasant, but your goal is to climb the ranks of society to become a respected nobleman.',
    stack: ['Unity', 'C#', 'Plastic SCM','Agile', 'Scrum'],
  },
  {
    image:'https://media.discordapp.net/attachments/1221561089632895198/1245453477078106173/file-w5SaxmA8GLAYs2Ux1TyKQqEl.png?ex=6658ce70&is=66577cf0&hm=5bd139b733bf3f22bf47c84f993972c9482eeb02eb926a009cea16be3185bce9&=&format=webp&quality=lossless&width=693&height=693',
    name: 'Mastermind',
    description: 'Mastermind is a simple game where you have to guess a secret code. The game will give you hints to help you find the code.',
    stack: ['Java', 'Agile', 'PlantUML'], 
  },
  {
    image:'https://media.discordapp.net/attachments/1221561089632895198/1245453810298523718/file-MSbsc8qLhNPYfFVrf7pppKEX.png?ex=6658cebf&is=66577d3f&hm=29f876f918d33c706081639f4630db01f96ddfebcd6ecbd8df2e3775966e9813&=&format=webp&quality=lossless&width=693&height=693',
    name:'Fridgeo',
    description: 'Fridgeo is a web application that allows you to manage your fridge and your recipes. You can add, delete and update your products and recipes.',
    stack:['Windows Form', 'C#', 'SQL']
  }
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Laravel',
  'Symfony',
  'PHP',
  'Git',
  'SQL',
  'Python',
  'C#',
  'C',
  'Unity',
  'Java',
  'R',
  'HTML',
  'CSS',
]

const contact = {
  email: 'leokiefner.pro@gmail.com',
}

export { header, about, projects, skills, contact }
