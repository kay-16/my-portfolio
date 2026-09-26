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
}

export const allProjects: ProjectItem[] = [
    {
    slug: 'amr-agent-based',
    title: 'Simulating the Spread of Antimicrobial Resistance in Agricultural Ecosystems Using an Agent-Based Approach with Parallelization',
    tag: 'Peer-Review Research Study',
    description: 
        'a peer-reviewed paper published by the Institute of Electrical and Electronics Engineers (IEEE) presented virtually during the 10th IEEE Cyber Science and Technology Congress in Hokkaido, Japan held on October 2025.',
    overview: [
        'Antimicrobial resistance (AMR) in livestock farming is a serious global health issue, mainly due to the overuse of antibiotics.  ', 
        'Most existing studies made use of traditional mathematical formulas ', 
        'which overlook the complex, real-world interactions between animals, humans, and bacteria. ',
        'To solve this, I built an agent-based simulation in NetLogo that models how antibiotic-resistant bacteria develops and emerge ',
        'on farms and transmit to people and livestocks via different transmission pathways. ',
        'In order to handle large populations without slowing down, I integrated the pyNetLogo Python library to parallelise simulation ',
        'runs across multiple CPU cores. The results showed that bacterial mutation rates are a major driver of risk, wherein ',
        'higher mutation rates led to a direct surge in antibiotic-resistant bacteria that can cause human and animal infections.'
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
    title: 'Visual Clutter & Risk Assessment of Electrical Posts',
    tag: 'Computer Vision',
    description: 'Real-time hazard detection and segmentation of power distribution poles using deep learning.',
    overview: [
      'An end-to-end computer vision pipeline using',
    ],
    stack: ['Python', 'YOLOv8', 'Roboflow', 'FastAPI'],
    githubUrl: 'https://github.com/your-username/post-hazard-segmentation',
    highlights: [
      'Annotated and augmented a robust dataset addressing occlusions and overlapping wires.',
      'Implemented real-time bounding box and mask inference for hazard prioritization.',
      'Built a lightweight reporting dashboard for municipal maintenance crews.',
    ],
  },
  {
    slug: 'acoustic-crack-detection', // url: /projects/acoustic-crack-detection
    title: 'Acoustic Crack Detection System',
    tag: 'ML / Research',
    description: 'Automated crack detection on chicken eggs using Log-Mel Spectrograms and CNN.',
    overview: [
      'An end-to-end computer vision pipeline using',
    ],
    stack: ['Python', 'PyTorch', 'Librosa', 'OpenCV'],
    githubUrl: 'https://github.com/your-username/acoustic-crack-detection',
    highlights: [
      'Engineered signal preprocessing pipeline converting raw audio vibrations to Log-Mel spectrograms.',
      'Trained a custom lightweight CNN reaching high classification accuracy across test batches.',
      'Designed an edge-computing prototype for real-time inference telemetry.',
    ],
  },
  {
    slug: 'artfolio',
    title: 'Artfolio',
    tag: 'Full-Stack Web Application',
    description: 'Real-time hazard detection and segmentation of power distribution poles using deep learning.',
    overview: [
      'An end-to-end computer vision pipeline using',
    ],
    stack: ['Python', 'YOLOv8', 'Roboflow', 'FastAPI'],
    githubUrl: 'https://github.com/your-username/post-hazard-segmentation',
    highlights: [
      'Annotated and augmented a robust dataset addressing occlusions and overlapping wires.',
      'Implemented real-time bounding box and mask inference for hazard prioritization.',
      'Built a lightweight reporting dashboard for municipal maintenance crews.',
    ],
  },
]