var jobs = {
    "Google": {
        "role": "Cloud Engineer",
        "title": "Google",
        "description": [''],
        "status": true,
        "year": "August 2019 - Current",
        "links": null,
        "img": "img/glogo.png"
    },
    "DrFirst": {
        "role": "Software Engineering Intern",
        "title": "DrFirst",
        "description": ['Built a Pre-Certification API Analysis tool and dynamic parsing algorithm that checks XML requests against user-defined test cases via a user interface', 'Built Python middleware for active directory integration between multiple sources/apis', 'SCreated PHP Genomics API and RNS Websocket Listener Plugins for Customer API testing','Obtained Portal Integration Certification (Certification to integrate DrFirst Portal products into Customer EMR/EHR\'s)','Built multiple Postman Environments for easier internal API testing'],
        "status": false,
        "year": "Summer 2018 - Spring 2019",
        "links": null,
        "img": "img/DrFirst.png"
    },
    "UMD": {
        "role": "Teaching Assistant",
        "title": "UMD CS Department",
        "description": ['Helped to develop syllabus, projects, and give lectures for CMSC389K: Full Stack Web Development with Node.js', 'Co-Teach 30 students the fundamental concepts from the syllabus', 'Syllabus can be found here: https://github.com/UMD-CS-STICs/389Kspring18'],
        "status": false,
        "year": "Spring 2018 - Spring 2019",
        "links": {
            "STICS": "http://stics.umd.edu/catalog.html"
        },
        "img": "img/UMD.png"
    },
    "MPLEX": {
        "role": "Full-Stack Software Engineer",
        "title": "MPLEX Virtual Reality",
        "year": "Fall 2017 - Spring 2018",
        "description": ['Utilized React.js to build full stack website for company and game website', 'Research for user scalability and data analysis', 'Helped to build motional sickness virtual reality study tool for psychology department'],
        "status": false,
        "links": {
            "MPLEXVR": "http://mplexvr.com/#/",
            "Core Disruption": "http://coredisruption.com/"
        },
        "img": "img/MPLEX_logo.png"
    },
    "STAMP": {
        "role": "IT Programmer/Analyst",
        "title": "STAMP IT Department",
        "description": ["Set up AV/IT Equipment for events", "Install/troubleshoot programs and problems on different OS's, softwares, and networks", "Employed wireless/direct solutions"],
        "status": false,
        "year": "Fall 2016 - Spring 2019",
        "links": {
            "STAMP IT": "http://thestamp.umd.edu/the_stamp_student_union/technology_services"
        },
        "img": "img/stamp.jpg"
    },
    "HCIL": {
        "role": "Software Engineering Intern",
        "title": "Human Computer Interaction Lab",
        "description": ["Helped to scale and improve UI for the projectsidewalk.io website for CHI2018", "Created AWS Mechanical Turk Crowd sourcing tool", "Helped with ground truth analysis for truth testing for research analysis"],
        "status": false,
        "year": "Summer 2017",
        "links": {
            "HCIL": "https://hcil.umd.edu/",
            "Project Sidewalk": "http://sidewalk.umiacs.umd.edu/"
        },
        "img": "img/HCIL-umd.png"
    },
    "Mathnasium": {
        "role": "Math Tutor",
        "title": "Mathnasium <br />",
        "description": ["Math tutor for grades k-12", "Organized and ran STEM/MATH camps"],
        "status": false,
        "year": "Fall 2011 - Spring 2015",
        "links": {
            "": ""
        },
        "img": "img/mathnasium.png"
    },
    "Hitchikers": {
        "role": "Build Lead",
        "title": "The Hitchhikers, FRC",
        "description": ["Designed, modeled, and created pneumatic,hydraulic, electical, and mechanical systems", 'Programmed and troubleshooted robot using Java and C++ default packages'],
        "status": false,
        "links": {
            "The Hitchikers": "http://team2059.org/"
        },
        "year": "Spring 2009 - Summer 2015",
        "img": "img/Hitchhikers.png"
    },
};

var experiences = {
    "Bitcamp2018": {
        "title": "Bitcamp 2018",
        "year": "Spring 2018",
        "img": "img/bitcamp2018.jpg",
        "links": null
    },
    "HackUMBC2018": {
        "title": "HackUMBC 2017",
        "year": "Fall 2018",
        "img": "img/UMBC.jpg",
        "links": null
    },
    "Medhacks2017": {
        "title": "MedHacks 2017",
        "year": "Fall 2017",
        "img": "img/medhacks.jpg",
        "links": null
    },
    "Bitcamp2017": {
        "title": "Bitcamp 2017",
        "year": "Spring 2017",
        "img": "img/bitcamp2017.jpg",
        "links": null
    },
};

var classes = {
    "CMSC435": {
        "title": "Software Engineering",
        "languages": ["Electron.js", "Node.js", "React.js", "Redux"],
        "semester": "Spring 2019",
        "projects": [
            {
                "title":"WebCache",
                "description":"A desktop application that allows users to download websites and annotate them."
            }
        ]
    },
    "CMSC434": {
        "title": "Human Computer Interaction",
        "languages": ["HTML/CSS"],
        "semester": "Spring 2019",
        "projects": []
    },
    "CMSC414": {
        "title": "Computer and Network Security",
        "languages": ["C","Python","X86-Assembly","Bash Scripting"],
        "semester": "Fall 2018",
        "projects": [{
                "title": "Buffer Overflow Attack",
                "description": " "
            },
            {
                "title": "Cryptography/Cipher",
                "description": " "
            },
            {
                "title": "SQL-Web Attacks",
                "description": " "
            },
            {
                "title": "ATM/BANK Build-it Break-it",
                "description": " "
            },
        ]
    },
    "CMSC411": {
        "title": "Computer Architecture",
        "languages": ["MIPS64","CISC Architecture","RISC Architecture"],
        "semester": "Fall 2018",
        "projects": []
    },
    "CMSC433": {
        "title": "Programming Lanugages, Technologies, and Paradaigms",
        "languages": ["Java","AKKA","Hadoop"],
        "semester": "Fall 2018",
        "projects": [{
                "title": "Multi-Threaded Auction House",
                "description": " "
            },
            {
                "title": "Ratsies Restaurant Simulation",
                "description": " "
            },
            {
                "title": "Maze Runner",
                "description": " "
            },
            {
                "title": "AKKA Distributed Resources Management",
                "description": " "
            },
            {
                "title": "Hadoop Twitter Analyzer",
                "description": " "
            },
        ]
    },
    "CMSC389K": {
        "title": "Full-Stack Web Development with Node.js",
        "languages": ["HTML/CSS", "Javascript", "JQuery/AJAX", "Node.js", "Express.js", "Handlebars.js", "MongoDB", "Socket.io", "Now", "API"],
        "semester": "Spring 2018",
        "projects": [{
                "title": "Final Project",
                "description": "A culmination of all the languages and technologies used in the class "
            },
            {
                "title": "Representatives Site",
                "description": "Use a templating engine to create a large site for representatives"
            },
            {
                "title": "Pokemon API",
                "description": "An API that handled POST,GET, and DELETE requests"
            },
            {
                "title": "50-States Game",
                "description": "Game to test users on all 50 states. Implemented using JQuery and AJAX"
            }
        ]
    },
    "CMSC423": {
        "title": "Bioinformatics Algorithms, Databases, and Tools",
        "languages": ["Python"],
        "semester": "Spring 2018",
        "projects": [{
                "title": "Lloyd Algorithm for K-means Clustering",
                "description": "Clustering heuristics for the k-Means Clustering Problem"
            },
            {
                "title": "Global Alignment of DNA Sequences for Evolutionary Similarity",
                "description": "Find the highest-scoring alignment between two strings using a scoring matrix"
            },
            {
                "title": "Inverse Burrows-Wheeler Transform",
                "description": "Reconstruct a string from its Burrows-Wheeler transform."
            },
            {
                "title": "De Bruijn Graph from a String",
                "description": "Given a genome Text, PathGraphk(Text) is the path consisting of |Text| - k + 1 edges, where the i-th edge of this path is labeled by the i-th k-mer in Text and the i-th node of the path is labeled by the i-th (k - 1)-mer in Text. The de Bruijn graph DeBruijnk(Text) is formed by gluing identically labeled nodes in PathGraphk(Text)"
            },
            {
                "title": "Cyclopeptide Sequencing",
                "description": "In “Compute the Number of Peptides of Given Total Mass”, we first encountered the problem of reconstructing a cyclic peptide from its theoretical spectrum; this problem is called the Cyclopeptide Sequencing Problem and is given below. It is solved by the following algorithm."
            },
            {
                "title": "Greedy Motif Search",
                "description": "A collection of strings BestMotifs resulting from running GreedyMotifSearch(Dna, k, t). If at any step you find more than one Profile-most probable k-mer in a given string, use the one occurring first."
            },
            {
                "title": "Find a Profile-most Probable k-mer in a String ",
                "description": "Multiple Profile-most probable k-mers in Text, then we select the first such k-mer occurring in Text."
            },
            {
                "title": "Speeding up motif finding",
                "description": "Finding motif in Kmer"
            },
            {
                "title": "Find all occurences of a pattern in a string",
                "description": "Find the Most Frequent Words in a String"
            },
            {
                "title": "Find a position in a genome minimizing the skew",
                "description": "Skew in DNA Replication"
            },
            {
                "title": "Counting DNA Nucleotides",
                "description": "Finding the count of each nucleotide in a sequence"
            }
        ]
    },
    "CMSC420": {
        "title": "Data Structures",
        "languages": ["Java"],
        "semester": "Spring 2018",
        "projects": [{
                "title": "Patricia Trie",
                "description": "Implement a Binary Patricia Trie that held common prefixes among binary strings."
            },
            {
                "title": "AVL-G",
                "description": "Implement an AVL tree that can have a variable imbalance factor."
            },
            {
                "title": "Heaps",
                "description": "Implement Min Heaps, Priority Queues, and Linked BST"
            }
        ]
    },
    "CMSC351": {
        "title": "Algorithms",
        "languages": ["Java"],
        "semester": "Fall 2017",
        "projects": [{
                "title": "Pac-Man Challenge",
                "description": "To write a program to see in how many distinct ways the Power Pellet can be reaches.The initial location is (0,0) and the power pellet is located at (w,h). Some of the nodes are blocked, which have to be accounted for.The program must report the number of distinct paths from (0,0) to (w,h) that do pass through any blocked nodes."
            },
            {
                "title": "Expression Tree",
                "description": "A binary tree in which each internal node corresponds to operator and each leaf node corresponds to operand."
            },
        ]
    },
    "CMSC330": {
        "title": "Organization of Programming Languages",
        "languages": ["Ruby", "OCaml", "Prolog"],
        "semester": "Fall 2017",
        "projects": [{
                "title": "Security",
                "description": "Cybersecurity project to practice proper security practices when making a website. Penetration testing techniques and how to patch these bugs. SQL Injection, Salting/Hashing, etc."
            },
            {
                "title": "Prolog",
                "description": "Prolog project to get familiar with logical programming concepts. This project included basic arthmetic operations, list manipulations, implementing operational semantics, and finite automata."
            },
            {
                "title": "C-Compiler",
                "description": "Built a C interpreter that involved building a Lexer to tokenize a C program, a Parser to build expression and statement grammers, and an interpretor to evaluate and compile the C program in an environment."
            },
            {
                "title": "NFA/DFA State Machines",
                "description": "Implement NFA (Non-Deterministic Finite Automata) in OCaml. Create functions e-closure, nfa->dfa conversion, and regex to nfa."
            },
            {
                "title": "Higher Order Functions",
                "description": "Practice with recursion, higher order functions, maps, syntax, trees."
            },
            {
                "title": "OCaml Basics",
                "description": "Practice with recursion and introduction to functional programming,OCaml, syntax."
            },
            {
                "title": "WordNet",
                "description": "A semantic lexicon for the English Language that groups words in sets of Synsets, Hypernyms, and Hyponyms. Creating the backend for a semantic library. The goal of this project was to get more familiar with Ruby, Hash data structures, and REGEX."
            }
        ]
    },
    "CMSC216": {
        "title": "Introduction to Computer Systems",
        "languages": ["C", "Assembly"],
        "semester": "Summer 2017",
        "projects": [{
                "title": "Shell",
                "description": "Implemented a Shell."
            },
            {
                "title": "C to Assembly",
                "description": "Writing recursive assembly programs using the ebp frame and esp stack pointer. We used Y-86 assembly which is£ close to x86 Assembly."
            },
            {
                "title": "Bag",
                "description": "A Bag structure project to practice previous concepts."
            },
            {
                "title": "Calendar",
                "description": "A calendar program that stored events and times."
            },
            {
                "title": "Document Manager CLI",
                "description": "A command line interface to interact with and utilize all the functions associated with the Document Manager project."
            },
            {
                "title": "Automated Document Manager",
                "description": "A document manager program designed to manage text via input redirection."
            },
            {
                "title": "Grades Calculator",
                "description": "A grades calculator, designed to hold a students grades, drop the lowest scores, calculate the average. etc."
            }
        ]
    },
    "CMSC250": {
        "title": "Discrete Structures",
        "languages": [],
        "semester": "Spring 2017",
        "projects": []
    },
    "CMSC132": {
        "title": "Object Oriented Programming II",
        "languages": ["Java"],
        "semester": "Spring 2017",
        "projects": [{
                "title": "Baby Names",
                "description": "This project used a Map with a nested HashMap data structure to store information. In addition, this project utilized threads and thread synchronization techniques to parse websites for popular baby names and store them in the data structure for easy access."
            },
            {
                "title": "Graphs",
                "description": "This project on creating a graph structure that consisted of a Map with a nested Hashmap and vertices to created a weighted graph data structure."
            },
            {
                "title": "Bag & Course List",
                "description": "This project was focused on HashMaps and Maps as data structures to organize and store data."
            },
            {
                "title": "Polymorphic Binary Search Trees",
                "description": "Making a photo editor for simple photo manipulation."
            },
            {
                "title": "Powers",
                "description": "Practice with Iterators and Inheritance."
            },
            {
                "title": "Recursive Lists",
                "description": "Practice with recursive methods."
            },
            {
                "title": "Linked Lists",
                "description": "This project involved creating a Link List data structure in-order and organizing information."
            },
            {
                "title": "TA Manager",
                "description": "This projects was designed to manage TA's via Object Array Lists and Inheritance."
            },
            {
                "title": "Game Conference Manager",
                "description": "This project was an introduction to organizing data structures. We created a conference class, which consisted of game objects, which consisted of player objects."
            }
        ]
    },
    "CMSC131": {
        "title": "Introduction to Object Oriented Programming",
        "languages": ["Java"],
        "semester": "Fall 2016",
        "projects": [{
                "title": "Battleable",
                "description": "This project involved us creating objects or objects with characteristics that battle each other. This project was used to together concepts from preivous projects."
            },
            {
                "title": "Poker",
                "description": "This project involved us creating objects or objects with characteristics that battle each other. This project was used to together concepts from preivous projects."
            },
            {
                "title": "Martian Cubic Calculator",
                "description": "This project involved us creating a polynomial calculator that calculated the basic polynomial calculations."
            },
            {
                "title": "Photo Tools",
                "description": "Making a photo editor for simple photo manipulation."
            },
            {
                "title": "Flag Maker",
                "description": "This project involved us creating colored flags that represented country flags."
            },
            {
                "title": "CryptoCode",
                "description": "This project turned a string into cipher code based on certain specifications, such as shifting the ASCII by 32 characters."
            },
            {
                "title": "CrypoQuiz & Multilingual Greetings",
                "description": "This project turned a string into cipher code based on certain specifications, such as shifting the ASCII by 32 characters."
            }
        ]
    }
};

var extra_projects = {
    "AmazonMturksCrowdSourceTool": {
        "title": "Amazon Mturks Crowd Source Tool",
        "languages": ['Python', 'MTurks API'],
        "semester": "Summer 2017",
        "type": "Internship",
        "description": "This python project utilizes the Amazon Mechanical Turks Boto API to make a crowd sourcing research tool with an auto-granting qualification request workflow that checks user answers against an answer_key in XML format.",
        "github": "https://github.com/chishankar/MTurksWorkflow",
        "devpost": "",
        "youtube": "",
        "website": ""
    },
    "PersonalWebsite": {
        "title": "Personal Webiste",
        "languages": ['HTML/CSS', 'Javascript'],
        "semester": "Summer 2017",
        "type": "Personal",
        "description": "Personal Website",
        "github": "",
        "devpost": "",
        "youtube": "",
        "website": "https://chishankar.github.io/"
    },
    "ProjectSidewalk.io": {
        "title": "Project Sidewalk",
        "languages": ['HTML/CSS', 'Javascript', 'SQL', 'jQuery/AJAX'],
        "semester": "Summer 2017",
        "type": "Internship",
        "description": "A website that combines human computer interaction and machine learning to help map accessibility features in Washington D.C. so those who are disables can travel through DC easier",
        "github": "https://github.com/ProjectSidewalk",
        "devpost": "",
        "youtube": "",
        "website": "http://sidewalk.umiacs.umd.edu/"
    },
};

var projects = {
    "RooftopFinder": {
        "title": "Rooftop Finder",
        "languages": ['Node.js', 'Express.js', 'Handlebars.js', 'Socket.io', 'MongoDB', 'Now', 'JQuery/AJAX'],
        "semester": "Spring 2018",
        "type": "Personal Project",
        "description": "A web app that allows users to find buildings to climb and have an adventure getting to the roof. The user and can add new roofs and trips. Search among all active roofs and even have an anonymous chat functionality that allows them to chat with each other.",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
    "LocFi": {
        "title": "LocFi",
        "languages": ['Ionic', 'Angular 2', 'Python/Flask', 'Firebase', 'AWS Beanstalk'],
        "semester": "Spring 2018",
        "type": "Bitcamp 2018",
        "description": "A location based social media platform similar to Yik Yak, but with the ability to follow locations, have friends, set up geo-fencing for events and having the ability to review events in real time as they happen and for others to like,disklike and respond accordingly. Minimilistic yet an interesting way to see what is being talked about. The app was built using Ionic (A framework that supports cross-platform development in iOS and Android), which communicated via POST and GET requests to our API which was written in Flask and depoloyed on AWS Beanstalk that talked to Firebase (Google's Database system).",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
    "Rashional": {
        "title": "Rashional",
        "languages": ['React.js', 'HTML/CSS', 'API', 'Javascript', 'Machine Learning'],
        "semester": "Fall 2017",
        "type": "Medhacks 2017",
        "description": "Access to Care was a challenge at this years MedHacks Hackathon with an aim to nullify social and regional determinants from impacting ones health. The mobile/desktop app, Rashional, tackles this problem by using a Machine Learning Algorithim to identify different skin rashes, the severity, and utilizes a Free Clinic API to provide the user with a list of the nearest free healthcare clinics available to them. The app helps to provide initial insight and direction to a medical problem, in a field in which there is not a readily available solution that is accessible through the internet and works via a single picture upload. The app is also available in both English and Spanish so it can be accommodate a larger user base and provide access to care to a larger growing population of native English and Spanish speakers.",
        "github": "https://github.com/chishankar/rashional",
        "devpost": "https://devpost.com/chishankar",
        "youtube": "https://youtu.be/XrzsnUgpqW4",
        "website": "https://rashional.run.aws-usw02-pr.ice.predix.io/"
    },
    "Blink2Speech": {
        "title": "Blink2Speech",
        "languages": ['Python/Flask', 'HTML/CSS', 'JQuery/AJAX', "OSC Server", "Muse SDK"],
        "semester": "Spring 2017",
        "type": "Bitcamp 2017",
        "description": "A project that facilitates communication by capturing and analyzing eye links using a Muse Headband. Used the Muse Headband SDK to collect EEG data and send the data using a local UDP connection to an OSC python server, where the data was parsed for eye blinks. We used a Flaskpython server that allowed pings from JQuery to make AJAX calls 10x a second and update the chart.",
        "github": "https://github.com/chishankar/Brain2Speech",
        "devpost": "https://devpost.com/software/blink2speech",
        "youtube": "https://www.youtube.com/embed/XA_DWc00pFw",
        "website": null
    },
    "TwitterSpotify": {
        "title": "Twitter Spotify Music Tool",
        "languages": ['Python', "Tweepy API", 'Spotify API'],
        "semester": "Summer 2017",
        "type": "Personal Project",
        "description": "Allows an audience to collectively contribute to a public Spotify Playlist by Private Messaging a public twitter account. This project utilizes the Twitter API and Spotify API.",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
    "TwitterAnalyticsTool": {
        "title": "Twitter Analytics Tool",
        "languages": ['Python', "Tweepy API"],
        "semester": "Summer 2017",
        "type": "Personal Project",
        "description": "Used the Twitter API to make an analysis tool for businesses to be able to track sentiment about their products or other current events across twitter community. The program runs each live incoming tweet JSON through a sentiment analysis tool assigning it a number and then sorts it respectively into region and sentiment.",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
    "MotionSicknessStudyTool": {
        "title": "Motion Sickness Study Tool",
        "languages": ['C++11'],
        "semester": "Spring 2017",
        "type": "Personal Project",
        "description": "Designed and programmed virtual reality program using C++11 through Visual Studio integrated with Unreal Engine to quantify motion sickness.",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
    "OverSandVehicle": {
        "title": "Over Sand Vehicle",
        "languages": ['C++11'],
        "semester": "Fall 2015",
        "type": "Engineering Project",
        "description": "Designed and built over sand vehicle to find object, determine material composition and weight and send information to a server.",
        "github": null,
        "devpost": null,
        "youtube": null,
        "website": null
    },
};