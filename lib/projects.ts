export interface ProjectItem {
  slug: string
  title: string
  tag: string
  description: string
  overview: string
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
}

export const allProjects: ProjectItem[] = [
    {
    slug: 'amr-agent-based',
    title: 'Antimicrobial Resistance Research',
    tag: 'Peer-Review Research Study',
    description: 'Real-time hazard detection and segmentation of power distribution poles using deep learning.',
    overview:
      'An end-to-end computer vision pipeline using YOLO instance segmentation to detect power post hazards, addressing false positives in dense municipal environments.',
    stack: ['Python', 'YOLOv8', 'Roboflow', 'FastAPI'],
    githubUrl: 'https://github.com/your-username/post-hazard-segmentation',
    highlights: [
      'Annotated and augmented a robust dataset addressing occlusions and overlapping wires.',
      'Implemented real-time bounding box and mask inference for hazard prioritization.',
      'Built a lightweight reporting dashboard for municipal maintenance crews.',
    ],
  },
  {
    slug: 'visual-clutter-risk-assessment',
    title: 'Visual Clutter & Risk Assessment of Electrical Posts',
    tag: 'Computer Vision',
    description: 'Real-time hazard detection and segmentation of power distribution poles using deep learning.',
    overview:
      'An end-to-end computer vision pipeline using YOLO instance segmentation to detect power post hazards, addressing false positives in dense municipal environments.',
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
    overview:
      'A research-backed acoustic analysis system that processes resonance signals from egg tapping into Log-Mel Spectrograms, classifying structural integrity via a convolutional neural network.',
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
    overview:
      'An end-to-end computer vision pipeline using YOLO instance segmentation to detect power post hazards, addressing false positives in dense municipal environments.',
    stack: ['Python', 'YOLOv8', 'Roboflow', 'FastAPI'],
    githubUrl: 'https://github.com/your-username/post-hazard-segmentation',
    highlights: [
      'Annotated and augmented a robust dataset addressing occlusions and overlapping wires.',
      'Implemented real-time bounding box and mask inference for hazard prioritization.',
      'Built a lightweight reporting dashboard for municipal maintenance crews.',
    ],
  },
]