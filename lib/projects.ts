export interface ProjectItem {
  slug: string
  title: string
  tag: string
  description: string
  overview: string[]
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  doiUrl?: string
  highlights: string[]
  image?: string[]
  imageCaption?: string
  thumbnail?: string
}

export const allProjects: ProjectItem[] = [
    {
    slug: 'amr-agent-based',
    thumbnail:
      '/images/amr-thumbnail.png',
    title: 'Simulating the Spread of Antimicrobial Resistance in Agricultural Ecosystems Using an Agent-Based Approach with Parallelization',
    tag: 'Peer-Review Research Study',
    description: 
        'a peer-reviewed paper published by the Institute of Electrical and Electronics Engineers (IEEE) presented virtually during the 10th IEEE Cyber Science and Technology Congress in Hokkaido, Japan held on October 2025.',
    overview: [
        'Antimicrobial resistance (AMR) in livestock farming is a serious global health issue, mainly due to the overuse of antibiotics. Most existing studies made use of traditional mathematical formulas which overlook the complex, real-world interactions between animals, humans, and bacteria. ',
        'To solve this, I built an agent-based simulation in NetLogo that models how antibiotic-resistant bacteria develops and emerge on farms and transmit to people and livestocks via different transmission pathways. In order to handle large populations without slowing down, I integrated the pyNetLogo Python library to parallelise simulation runs across multiple CPU cores. The results showed that bacterial mutation rates are a major driver of risk, wherein higher mutation rates led to a direct surge in antibiotic-resistant bacteria that can cause human and animal infections.'
    ],
    image: [
      '/images/amr-post-2.jpg',
      '/images/amr-post-1.jpg'
    ], 
    imageCaption: 'me presenting during the IEEE conference session, along with other presenters; my co-author, Prof. Orven Llantos is also present',
    stack: ['NetLogo', 'pyNetLogo', 'Python', 'Parallel Computing'],
    doiUrl: 'https://doi.org/10.1109/CyberSciTech68397.2025.00071',
    highlights: [
      'Engineered an agent-based model simulation using NetLogo simulating how antimicrobial causes resistance over time and how it transmits across farming agents—livestock, humans, environment',
    ],
  },
  {
    slug: 'visual-clutter-risk-assessment',
    thumbnail:
      '/images/wire-post-1.jpg',
    title: 'Real-Time Visual Clutter & Risk Assessment of Electrical Posts Using Deep Learning V2',
    tag: 'Computer Vision | Deep Learning', 
    description: 'Real-time hazard detection and segmentation of power distribution poles using deep learning.',
    image: [
      '/images/low-clutter.gif',
      '/images/wire-detection-demo-2.gif'
    ],
    imageCaption: 'me testing the model with random wire clutter images; one image shows a relatively clean wire cluster; the other, shows a relatively cluttered wire.',
    overview: [
      'An updated version of the project I created for our Intelligent Systems subject back in university. The project is called Real-Time Visual clutter & Risk Assessment of Electrical Posts Using Deep Learning. The project addresses a critical problem for complex, poorly-maintained wire clusters in urban areas—a tedious and risky task requiring subjective manual inspection. The project has a two-stage Deep Computer Vision pipeline that made use of a custom dataset of wire cluster images scraped from Google Maps, Google Images, and some in Pinterest. With Roboflow, the images were then annotated into four distinct risk levels. ',
      'While the previous version offered some valuable insights, it still lacks the ability to classify the wire clusters from, say, a post or tree, which resulted to false classification issues. In order to address that, I update its pipeline into an end-to-end segmentation. Instead of the classification, I made use of Instance Segmentation. I also made sure that the dataset are more appropriate to my goal, that is why, I am curating a newer custom dataset scraped from KartaView, Mapillary, Google Maps, and some photographed by me. I then annotated them with polygon masks, that identify the exact pixels belonging to the wire clusters and those that belongs to the pole, efficiently distinguishing them from its background interferences. ',
      'Along with that, I implemented an automated clutter severity metric (R = WireArea/Pole Area) with categorical severity thresholds Low Clutter: R < 0.5, Moderate Clutter: 0.5 ≤ R < 1.5, and  High / Critical Clutter: R ≥ 1.5. ',
      'I also deployed a real-time OpenCV with a Heads-Up Display (HUD) running at 20-30+ FPSm for real-time video inspection. ',
      'I first did a test pilot run where I made use of 120 dataset and tested it with my metric, splitting into 80% for train (96 images) and 20% for valid (24 images). The annotated dataset were then exported from Roboflow with COCO segmentation export format, with 2 classes (pole and wire_clusters). ',
      'Model used is YOLOv8-seg with hardware configuration of Local NVIDIA GPU via PyTorch CUDA. The hyperparameters used were epoch=100, patience=20 (for early stopping), imgsz=640, batch=8. The early stopping were triggered around epoch 56 in order to preserve peak model weights.',
      'So far, the trained custom segmentation weights on CUDA GPU hardware achieved ~0.70 Mask mAP50 with early stopping optimization. My next approach is to test it on 600-1000 custom dataset and maybe build a lightweight web interface with Streamlit.'
      
    ],
    stack: ['Python', 'YOLOv8', 'Roboflow'],
    githubUrl: 'https://github.com/kay-16/electrical-post-clutter-segmentation-V2.git',
    highlights: [
      'Annotated and augmented a robust dataset addressing occlusions and overlapping wires.',
      'Implemented real-time mask inference for hazard prioritization.',
    ],
  },
  {
    slug: 'acoustic-crack-detection', // url: /projects/acoustic-crack-detection
    thumbnail:
      '/images/egg-crack-thumbnail.png',
    title: 'Acoustic Crack Detection System',
    tag: 'ML |   Research',
    description: 'Automated crack detection on chicken eggs using Log-Mel Spectrograms and CNN.',
    image: [
      '/images/egg-crack-post.png',
      '/images/egg-crack-post-3.png'
    ],
    imageCaption: 'ui previews of the web app; 1st image: home state; 2nd image: showing results',
    overview: [
      'Detecting hairline cracks in chicken eggs using manual inspection or light candling is slow, labor-intensive, and prone to human error. ',
      'To automate this, me and my thesismates developed an acoustic crack detection system that captures sound resonance using an Arduino-controlled sensor setup when an egg is gently tapped. ',
      'The recorded acoustic signals are converted into Log-Mel spectrograms and classified using a lightweight Convolutional Neural Network (CNN). The trained model was deployed to an interactive Streamlit web dashboard to provide real-time, non-destructive crack detection.',
    ],
    stack: ['Python', 'PyTorch', 'Streamlit', 'Librosa', 'OpenCV'],
    githubUrl: 'https://github.com/kay-16/Egg-Shell-Crack-Detection-Web-App.git',
    // doiUrl: '/paper/Detecting_Cracks_in_Chicken_Eggs_using_Log_Mel_Spectrograms_and_CNN.pdf',
    highlights: [
      'Turned raw sound vibrations into clear audio visual charts (spectrograms).',
      'Trained a lightweight AI model that spots cracked eggs with high accuracy.',
      'Built a small real-time system that tests and checks eggs instantly on the spot.',
    ],
  },
  {
    slug: 'artfolio',
    thumbnail:
      '/images/artfolio-thumbnail.png',
    title: 'Artfolio',
    tag: 'Full-Stack Web Application (in development)',
    description: 'A full-stack web platform built for digital artists to curate, organize, and showcase their creative work with ease.',
    overview: [
    'I first thought of this project during my internship at Dotted Studios. At that time, I was only starting Laravel and I was in the search for ideas. ',
    'Something that isnt too "techy", (the irony lol). Something that I can pour my passion for art into. So when I got back home, I was scrolling through my Instagram feed and I thought, artists also deserve a dedicated space to present their work without the visual clutter and algorithmic noise of social media. ', 
    'With this idea in mind, it took only for my artistic side to be piqued. Soo...Artfolio was born! ',
    'This project serves as a personal gallery with artists in mind, where they can upload high-resolution artwork, categorize pieces into curated collections, and manage their portfolio effortlessly. ',
    'On the technical side, the application connects a clean, modern frontend with a solid full-stack backend. It handles secure user authentication, responsive gallery layouts, and direct cloud media hosting to ensure artwork loads crisply and quickly across devices. ',
    'This project served as a playground for blending design with engineering, focusing on intuitive UI/UX, seamless database architecture, and giving visual art the spotlight it deserves.',
  ],
    stack: ['Laravel', 'PHP', 'Blade'],
    githubUrl: 'https://github.com/kay-16/art_webapp.git',
    highlights: [
      'Lets artists log in and manage their own galleries.',
      'Uses cloud image hosting for fast loading and crisp visuals.',
    ],
  },
]