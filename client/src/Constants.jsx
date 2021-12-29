import RandomQuote from "./components/fcc/RandomQuote";

export const baseGhUrl = "https://api.github.com/";

export const SERVICES = [
  "API & Web Design",
  "Social Media & Marketing",
  "Custom Integrated Solutions",
  "Web Hosting",
  "Wordpress Management",
  "UI/UX Design",
];

export const PROJECTS = [
  {
    id: 1,
    name: "Random Quote Machine",
    slug: "random-quote-machine",
    category: "Free Code Camp",
    ghUrl:
      "https://github.com/sflems/piboy-site/blob/update-deps%2Brouter/client/src/components/fcc/RandomQuote.jsx",
    element: <RandomQuote />,
    fetch: false,
  },
  {
    id: 0,
    name: "Markdown Previewer",
    slug: "markdown-previewer",
    category: "Free Code Camp",
    ghUrl: null,
    element: null,
    fetch: false,
  },
  {
    id: 2,
    name: "LED Scoreboard Manager",
    slug: "led-board-manager",
    category: "Piboy",
    desc: "",
    ghUrl: "https://github.com/sflems/led-board-manager",
    element: null,
    fetch: true,
  },
];

export const container = {
  hidden: {
    opacity: 0,
    height: "100%",
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
};

export const variants = {
  pages: {
    hidden: {
      opacity: 0,
      x: "-100vw",
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        translate: 0,
        duration: 1,
        staggerChildren: 0.5,
        when: "beforeChildren",
        ease: "easeInOut",
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      y: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },

  containerMain: {
    hidden: {
      opacity: 0,
      height: "100%",
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
  },
  containers: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        ease: "easeInOut",
        type: "tween",
      },
    },
  },
  buttons: {
    hover: {
      scale: 1.3,
      originX: "50%",
    },
    hoverTopButton: {
      scale: 1.1,
      originX: "50%",
      originY: "50%",
    },
    hoverProjButton: {
      scale: 1.1,
      originX: 0,
      originY: 0,
    },
    tap: {
      scale: 0.8,
    },
    tapTopButton: {
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        type: "spring",
      },
    },
    exit: { opacity: 0, transition: { when: "beforeChildren" } },
  },
  writer: {
    sentence: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
          staggerChildren: 0.03,
          when: "beforeChildren",
        },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  },
  writerTwo: {
    sentence: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          when: "beforeChildren",
        },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
          repeat: 1,
          repeatType: "reverse",
        },
      },
    },
    letterTwo: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      },
    },
  },
  writerThree: {
    sentence: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          when: "beforeChildren",
        },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
          repeat: 1,
          repeatType: "reverse",
        },
      },
    },
    letterTwo: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      },
    },
  },
};

export const QUOTES = [
  {
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: "Cynthia Lewis",
  },
  {
    text: "Every man dies. Not every man really lives.",
    author: "William Wallace",
  },
  {
    text: "To lead people walk behind them.",
    author: "Lao Tzu",
  },
  {
    text: "Having nothing, nothing can he lose.",
    author: "William Shakespeare",
  },
  {
    text: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser",
  },
  {
    text: "A rolling stone gathers no moss.",
    author: "Publilius Syrus",
  },
  {
    text: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill",
  },
  {
    text: "Everything in life is luck.",
    author: "Donald Trump",
  },
  {
    text: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu",
  },
  {
    text: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
  },
  {
    text: "Study the past, if you would divine the future.",
    author: "Confucius",
  },
  {
    text: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud",
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams",
  },
  {
    text: "Work out your own salvation. Do not depend on others.",
    author: "Buddha",
  },
  {
    text: "One today is worth two tomorrows.",
    author: "Benjamin Franklin",
  },
  {
    text: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve",
  },
  {
    text: "God always takes the simplest way.",
    author: "Albert Einstein",
  },
  {
    text: "One fails forward toward success.",
    author: "Charles Kettering",
  },
  {
    text: "From small beginnings come great things.",
    author: "Proverb",
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere",
    author: "Chinese proverb",
  },
  {
    text: "Be as you wish to seem.",
    author: "Socrates",
  },
  {
    text: "The world is always in movement.",
    author: "V. Naipaul",
  },
  {
    text: "Never mistake activity for achievement.",
    author: "John Wooden",
  },
  {
    text: "What worries you masters you.",
    author: "Haddon Robinson",
  },
  {
    text: "One faces the future with ones past.",
    author: "Pearl Buck",
  },
  {
    text: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy",
  },
  {
    text: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama",
  },
  {
    text: "Talk doesn't cook rice.",
    author: "Chinese proverb",
  },
  {
    text: "He is able who thinks he is able.",
    author: "Buddha",
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Larry Elder",
  },
  {
    text: "To succeed, we must first believe that we can.",
    author: "Michael Korda",
  },
  {
    text: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein",
  },
  {
    text: "A weed is no more than a flower in disguise.",
    author: "James Lowell",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
  },
  {
    text: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer",
  },
  {
    text: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann",
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: "John Lennon",
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Time is the wisest counsellor of all.",
    author: "Pericles",
  },
  {
    text: "You give before you get.",
    author: "Napoleon Hill",
  },
  {
    text: "Wisdom begins in wonder.",
    author: "Socrates",
  },
  {
    text: "Without courage, wisdom bears no fruit.",
    author: "Baltasar Gracian",
  },
  {
    text: "Change in all things is sweet.",
    author: "Aristotle",
  },
  {
    text: "What you fear is that which requires action to overcome.",
    author: "Byron Pulsifer",
  },
  {
    text: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower",
  },
  {
    text: "When deeds speak, words are nothing.",
    author: "African proverb",
  },
  {
    text:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer",
  },
  {
    text: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein",
  },
  {
    text: "Skill to do comes of doing.",
    author: "Ralph Emerson",
  },
  {
    text: "Wisdom is the supreme part of happiness.",
    author: "Sophocles",
  },
  {
    text: "I believe that every person is born with talent.",
    author: "Maya Angelou",
  },
  {
    text: "Important principles may, and must, be inflexible.",
    author: "Abraham Lincoln",
  },
  {
    text: "The undertaking of a new action brings new strength.",
    author: "Richard Evans",
  },
  {
    text: "The years teach much which the days never know.",
    author: "Ralph Emerson",
  },
  {
    text: "Our distrust is very expensive.",
    author: "Ralph Emerson",
  },
  {
    text: "All know the way; few actually walk it.",
    author: "Bodhidharma",
  },
  {
    text: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Faith in oneself is the best and safest course.",
    author: "Michelangelo",
  },
  {
    text: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
  },
  {
    text: "Anticipate the difficult by managing the easy.",
    author: "Lao Tzu",
  },
  {
    text: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha",
  },
  {
    text: "A short saying often contains much wisdom.",
    author: "Sophocles",
  },
  {
    text: "It takes both sunshine and rain to make a rainbow.",
    author: "Proverb",
  },
  {
    text: "Only do what your heart tells you.",
    author: "Princess Diana",
  },
  {
    text: "Life is movement-we breathe, we eat, we walk, we move!",
    author: "John Pierrakos",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
  },
  {
    text: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    text: "In order to win, you must expect to win.",
    author: "Richard Bach",
  },
  {
    text: "A goal is a dream with a deadline.",
    author: "Napoleon Hill",
  },
  {
    text: "You can do it if you believe you can!",
    author: "Napoleon Hill",
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson",
  },
  {
    text: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace",
  },
  {
    text: "Do more than dream: work.",
    author: "William Arthur Ward",
  },
  {
    text: "No man was ever wise by chance.",
    author: "Seneca",
  },
  {
    text: "He that is giddy thinks the world turns round.",
    author: "William Shakespeare",
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: "Ellen Gilchrist",
  },
  {
    text: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer",
  },
  {
    text: "We do what we do because we believe.",
    author: null,
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer",
  },
  {
    text: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung",
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
  },
  {
    text: "The shortest answer is doing.",
    author: "Lord Herbert",
  },
  {
    text: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The harder you fall, the higher you bounce.",
    author: "A Basketball",
  },
  {
    text: "Trusting our intuition often saves us from disaster.",
    author: "Anne Wilson Schaef",
  },
  {
    text: "Truth is powerful and it prevails.",
    author: "Sojourner Truth",
  },
  {
    text: "Light tomorrow with today!",
    author: "Elizabeth Browning",
  },
  {
    text: "Silence is a fence around wisdom.",
    author: "German proverb",
  },
  {
    text: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael",
  },
  {
    text: "The simplest things are often the truest.",
    author: "Richard Bach",
  },
  {
    text: "Everyone smiles in the same language.",
    author: null,
  },
  {
    text: "Yesterday I dared to struggle. Today I dare to win.",
    author: "Bernadette Devlin",
  },
  {
    text: "No alibi will save you from accepting the responsibility.",
    author: "Napoleon Hill",
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    text: "It is better to travel well than to arrive.",
    author: "Buddha",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    text: "You have to believe in yourself.",
    author: "Sun Tzu",
  },
  {
    text: "Our intention creates our reality.",
    author: "Wayne Dyer",
  },
  {
    text: "Silence is a true friend who never betrays.",
    author: "Confucius",
  },
  {
    text: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "From little acorns mighty oaks do grow.",
    author: "American proverb",
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn",
  },
  {
    text: "Reality does not conform to the ideal, but confirms it.",
    author: "Gustave Flaubert",
  },
  {
    text: "Speak low, if you speak love.",
    author: "William Shakespeare",
  },
  {
    text: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Reality leaves a lot to the imagination.",
    author: "John Lennon",
  },
  {
    text: "The greatest remedy for anger is delay.",
    author: "Seneca",
  },
  {
    text: "Growth itself contains the germ of happiness.",
    author: "Pearl Buck",
  },
  {
    text: "You can do what's reasonable, or you can decide what's possible.",
    author: "Anonymous",
  },
  {
    text: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Wherever you go, go with all your heart.",
    author: "Confucius",
  },
  {
    text: "The only real valuable thing is intuition.",
    author: "Albert Einstein",
  },
  {
    text: "Good luck is another name for tenacity of purpose.",
    author: "Ralph Emerson",
  },
  {
    text: "Rainbows apologize for angry skies.",
    author: "Sylvia Voirol",
  },
  {
    text: "Friendship isn't a big thing. It's a million little things.",
    author: "Unknown",
  },
  {
    text: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
  },
  {
    text: "Whatever happens, take responsibility.",
    author: "Tony Robbins",
  },
  {
    text: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde",
  },
  {
    text: "I think and that is all that I am.",
    author: "Wayne Dyer",
  },
  {
    text: "A good plan today is better than a perfect plan tomorrow.",
    author: "Unknown",
  },
  {
    text: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem",
  },
  {
    text: "Each day provides its own gifts.",
    author: "Marcus Aurelius",
  },
  {
    text: "While we stop to think, we often miss our opportunity.",
    author: "Publilius Syrus",
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw",
  },
  {
    text: "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach",
  },
  {
    text: "Begin to weave and God will give you the thread.",
    author: "German proverb",
  },
  {
    text: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius",
  },
  {
    text:
      "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    author: "Unknown",
  },
  {
    text: "Without faith, nothing is possible. With it, nothing is impossible.",
    author: "Mary Bethune",
  },
  {
    text: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein",
  },
  {
    text: "Don't be pushed by your problems; be led by your dreams.",
    author: "Unknown",
  },
  {
    text:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Fear is a darkroom where negatives develop.",
    author: "Usman Asif",
  },
  {
    text: "The truest wisdom is a resolute determination.",
    author: "Napoleon Bonaparte",
  },
  {
    text: "Life is the flower for which love is the honey.",
    author: "Victor Hugo",
  },
  {
    text: "Freedom is the right to live as we wish.",
    author: "Epictetus",
  },
  {
    text: "Change your thoughts, change your life!",
    author: null,
  },
  {
    text: "Never ignore a gut feeling, but never believe that it's enough.",
    author: "Robert Heller",
  },
  {
    text: "Loss is nothing else but change,and change is Natures delight.",
    author: "Marcus Aurelius",
  },
  {
    text: "Someone is special only if you tell them.",
    author: "Byron Pulsifer",
  },
  {
    text: "Today is the tomorrow you worried about yesterday.",
    author: null,
  },
  {
    text: "There is no way to happiness, happiness is the way.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "The day always looks brighter from behind a smile.",
    author: null,
  },
  {
    text: "A stumble may prevent a fall.",
    author: null,
  },
  {
    text: "He who talks more is sooner exhausted.",
    author: "Lao Tzu",
  },
  {
    text: "He who is contented is rich.",
    author: "Lao Tzu",
  },
  {
    text: "What we achieve inwardly will change outer reality.",
    author: "Plutarch",
  },
  {
    text: "Our strength grows out of our weaknesses.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "We must become the change we want to see.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Happiness is found in doing, not merely possessing.",
    author: "Napoleon Hill",
  },
  {
    text: "Put your future in good hands your own.",
    author: null,
  },
  {
    text: "We choose our destiny in the way we treat others.",
    author: "Wit",
  },
  {
    text: "No snowflake in an avalanche ever feels responsible.",
    author: "Voltaire",
  },
  {
    text: "Fortune favours the brave.",
    author: "Virgil",
  },
  {
    text: "I believe in one thing only, the power of human will.",
    author: "Joseph Stalin",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "The mind unlearns with difficulty what it has long learned.",
    author: "Seneca",
  },
  {
    text: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln",
  },
  {
    text: "No garden is without its weeds.",
    author: "Thomas Fuller",
  },
  {
    text: "There is no failure except in no longer trying.",
    author: "Elbert Hubbard",
  },
  {
    text: "Kind words will unlock an iron door.",
    author: "Turkish proverb",
  },
  {
    text: "Problems are only opportunities with thorns on them.",
    author: "Hugh Miller",
  },
  {
    text: "Life is just a chance to grow a soul.",
    author: "A. Powell Davies",
  },
  {
    text: "Mountains cannot be surmounted except by winding paths.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Fortune befriends the bold.",
    author: "John Dryden",
  },
  {
    text: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller",
  },
  {
    text: "You're never a loser until you quit trying.",
    author: "Mike Ditka",
  },
  {
    text: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant",
  },
  {
    text: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Strong beliefs win strong men, and then make them stronger.",
    author: "Richard Bach",
  },
  {
    text: "Autumn is a second spring when every leaf is a flower.",
    author: "Albert Camus",
  },
  {
    text: "If you surrender to the wind, you can ride it.",
    author: "Toni Morrison",
  },
  {
    text: "Keep yourself to the sunshine and you cannot see the shadow.",
    author: "Helen Keller",
  },
  {
    text: "Write your plans in pencil and give God the eraser.",
    author: "Paulo Coelho",
  },
  {
    text: "Inspiration exists, but it has to find us working.",
    author: "Pablo Picasso",
  },
  {
    text: "Pick battles big enough to matter, small enough to win.",
    author: "Jonathan Kozol",
  },
  {
    text: "Don't compromise yourself. You are all you've got.",
    author: "Janis Joplin",
  },
  {
    text: "A short saying oft contains much wisdom.",
    author: "Sophocles",
  },
  {
    text: "Difficulties are things that show a person what they are.",
    author: "Epictetus",
  },
  {
    text: "When you doubt your power, you give power to your doubt.",
    author: "Honore de Balzac",
  },
  {
    text: "The cause is hidden. The effect is visible to all.",
    author: "Ovid",
  },
  {
    text: "A prudent question is one half of wisdom.",
    author: "Francis Bacon",
  },
  {
    text: "The path to success is to take massive, determined action.",
    author: "Tony Robbins",
  },
  {
    text: "I allow my intuition to lead my path.",
    author: "Manuel Puig",
  },
  {
    text: "Nature takes away any faculty that is not used.",
    author: "William R. Inge",
  },
  {
    text: "If you wish to be a writer, write.",
    author: "Epictetus",
  },
  {
    text: "There is no way to prosperity, prosperity is the way.",
    author: "Wayne Dyer",
  },
  {
    text: "Either you run the day or the day runs you.",
    author: "Jim Rohn",
  },
  {
    text: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus",
  },
  {
    text: "Follow your instincts. That is where true wisdom manifests itself.",
    author: "Oprah Winfrey",
  },
  {
    text: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin",
  },
  {
    text: "To accomplish great things, we must dream as well as act.",
    author: "Anatole France",
  },
  {
    text: "Patience is the companion of wisdom.",
    author: "Saint Augustine",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire",
  },
  {
    text: "To fly, we have to have resistance.",
    author: "Maya Lin",
  },
  {
    text: "What you see depends on what you're looking for.",
    author: null,
  },
  {
    text: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal",
  },
  {
    text: "Be great in act, as you have been in thought.",
    author: "William Shakespeare",
  },
  {
    text: "Imagination rules the world.",
    author: "Napoleon Bonaparte",
  },
  {
    text: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal",
  },
  {
    text: "There is no greater harm than that of time wasted.",
    author: "Michelangelo",
  },
  {
    text: "Intuition will tell the thinking mind where to look next.",
    author: "Jonas Salk",
  },
  {
    text: "Worry gives a small thing a big shadow.",
    author: null,
  },
  {
    text: "Fears are nothing more than a state of mind.",
    author: "Napoleon Hill",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker",
  },
  {
    text: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    text: "Don't cry because it's over. Smile because it happened.",
    author: "Dr. Seuss",
  },
  {
    text: "No is easier to do. Yes is easier to say.",
    author: "Jason Fried",
  },
  {
    text: "To be wrong is nothing unless you continue to remember it.",
    author: "Confucius",
  },
  {
    text: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth",
  },
  {
    text: "Silence is deep as Eternity, Speech is shallow as Time.",
    author: "Carlyle",
  },
  {
    text: "Don't smother each other. No one can grow in the shade.",
    author: "Leo F. Buscaglia",
  },
  {
    text: "An ant on the move does more than a dozing ox",
    author: "Lao Tzu",
  },
  {
    text: "You can't shake hands with a clenched fist.",
    author: "Indira Gandhi",
  },
  {
    text: "A good decision is based on knowledge and not on numbers.",
    author: "Plato",
  },
  {
    text: "The cautious seldom err.",
    author: "Confucius",
  },
  {
    text: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass",
  },
  {
    text: "Where there is great love, there are always miracles.",
    author: "Willa Cather",
  },
  {
    text: "Time you enjoy wasting, was not wasted.",
    author: "John Lennon",
  },
  {
    text: "Every problem has a gift for you in its hands.",
    author: "Richard Bach",
  },
  {
    text: "Sadness flies away on the wings of time.",
    author: "Jean de la Fontaine",
  },
  {
    text: "I have often regretted my speech, never my silence.",
    author: "Publilius Syrus",
  },
  {
    text: "Never put off till tomorrow what you can do today.",
    author: "Thomas Jefferson",
  },
  {
    text: "Minds are like parachutes. They only function when open.",
    author: "Thomas Dewar",
  },
  {
    text: "If a man does his best, what else is there?",
    author: "George Patton",
  },
  {
    text: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli",
  },
  {
    text: "Life is a progress, and not a station.",
    author: "Ralph Emerson",
  },
  {
    text:
      "All seasons are beautiful for the person who carries happiness within.",
    author: "Horace Friess",
  },
  {
    text: "To avoid criticism, do nothing, say nothing, be nothing.",
    author: "Elbert Hubbard",
  },
  {
    text: "All things change; nothing perishes.",
    author: "Ovid",
  },
  {
    text: "Absence makes the heart grow fonder.",
    author: "Haynes Bayly",
  },
  {
    text: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall",
  },
  {
    text:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert",
  },
  {
    text:
      "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    author: "Elizabeth Browning",
  },
  {
    text:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Arthur Conan Doyle",
  },
  {
    text:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott",
  },
  {
    text:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama",
  },
  {
    text:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon",
  },
  {
    text:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text:
      "To get something you never had, you have to do something you never did.",
    author: null,
  },
  {
    text:
      "Be thankful when you don't know something for it gives you the opportunity to learn.",
    author: null,
  },
  {
    text:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    text:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
    author: "Og Mandino",
  },
  {
    text:
      "To forgive is to set a prisoner free and realize that prisoner was you.",
    author: "Lewis B. Smedes",
  },
  {
    text:
      "In separateness lies the world's great misery, in compassion lies the world's true strength.",
    author: "Buddha",
  },
  {
    text:
      "By believing passionately in something that does not yet exist, we create it.",
    author: "Nikos Kazantzakis",
  },
  {
    text:
      "Letting go is not the end of the world; it is the beginning of a new life.",
    author: null,
  },
  {
    text:
      "All the great performers I have worked with are fuelled by a personal dream.",
    author: "John Eliot",
  },
  {
    text:
      "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
    author: "A. A. Milne",
  },
  {
    text: "I never see what has been done; I only see what remains to be done.",
    author: "Marie Curie",
  },
  {
    text:
      "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca",
  },
  {
    text:
      "If you don't know where you are going, you will probably end up somewhere else.",
    author: "Lawrence Peter",
  },
  {
    text:
      "It is not so important to know everything as to appreciate what we learn.",
    author: "Hannah More",
  },
  {
    text:
      "The bird of paradise alights only upon the hand that does not grasp.",
    author: "John Berry",
  },
  {
    text: "Think as a wise man but communicate in the language of the people.",
    author: "William Yeats",
  },
  {
    text:
      "Practice yourself, for heavens sake in little things, and then proceed to greater.",
    author: "Epictetus",
  },
  {
    text:
      "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca",
  },
  {
    text:
      "Our greatest glory is not in never failing but rising everytime we fall.",
    author: "Confucious",
  },
  {
    text:
      "Being right is highly overrated. Even a stopped clock is right twice a day.",
    author: "Unknown",
  },
  {
    text: "To be upset over what you don't have is to waste what you do have.",
    author: "Ken S. Keyes",
  },
  {
    text: "If we did the things we are capable of, we would astound ourselves.",
    author: "Thomas Edison",
  },
  {
    text: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie",
  },
  {
    text:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins",
  },
  {
    text:
      "Love is not blind; it simply enables one to see things others fail to see.",
    author: "Johnny Depp",
  },
  {
    text: "Life is a process. We are a process. The universe is a process.",
    author: "Anne Schaef",
  },
  {
    text:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "We learn what we have said from those who listen to our speaking.",
    author: "Kenneth Patton",
  },
  {
    text:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
    author: "Kahlil Gibran",
  },
  {
    text:
      "If you get up one more time than you fall, you will make it through.",
    author: "Chinese Proverb",
  },
];
