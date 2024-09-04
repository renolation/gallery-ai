import { v4 as uuidv4 } from 'uuid';

const galleries = [
  {
    id: 1,
    name: "Gallery One",
    description: "A collection of landscape photos",
    images: [
      { id: uuidv4(), url: "image1.jpg", alt: "A beautiful landscape" },
      { id: uuidv4(), url: "image2.jpg", alt: "A sunny beach" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Gallery Two",
    description: "Abstract art pieces",
    images: [
      { id: uuidv4(), url: "image3.jpg", alt: "Abstract lines" },
      { id: uuidv4(), url: "image4.jpg", alt: "Colorful shapes" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Gallery Three",
    description: "Portrait photography",
    images: [
      { id: uuidv4(), url: "image5.jpg", alt: "A smiling person" },
      { id: uuidv4(), url: "image6.jpg", alt: "A thoughtful pose" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Gallery Four",
    description: "Urban exploration",
    images: [
      { id: uuidv4(), url: "image7.jpg", alt: "City skyline" },
      { id: uuidv4(), url: "image8.jpg", alt: "Graffiti art" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Gallery Five",
    description: "Nature and wildlife",
    images: [
      { id: uuidv4(), url: "image9.jpg", alt: "A wild tiger" },
      { id: uuidv4(), url: "image10.jpg", alt: "A serene forest" },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default galleries;
