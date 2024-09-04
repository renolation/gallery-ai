const sql = require("better-sqlite3");
const { v4: uuidv4 } = require("uuid");
const db = sql("posts.db");

const images = [
  {

    title: "Sunset Over the Mountains",
    description: "A beautiful sunset with orange and pink hues over a mountain range.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg",
    status: "PENDING",

    userId: "1",
    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Calm Ocean",
    description: "A serene view of the ocean at dawn.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219874/samples/look-up.jpg",
    status: "PENDING",

    userId: "1",
    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Forest Path",
    description: "A peaceful path through a dense forest.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219861/samples/cloudinary-group.jpg",
    status: "PENDING",
    uploadedBy: { id: "1", name: "user1" },
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "City Skyline at Night",
    description: "A vibrant city skyline illuminated at night.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Desert Dunes",
    description: "Golden sand dunes under a clear blue sky.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219861/samples/cloudinary-group.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Snowy Mountains",
    description: "Snow-capped mountains under a bright winter sky.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Cherry Blossom Trees",
    description: "Cherry blossom trees in full bloom.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219874/samples/look-up.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Autumn Leaves",
    description: "Colorful autumn leaves covering the ground.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219861/samples/cloudinary-group.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Starry Night",
    description: "A clear night sky filled with stars.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219875/samples/outdoor-woman.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {

    title: "Misty Lake",
    description: "A tranquil lake surrounded by mist.",
    imageUrl: "https://res.cloudinary.com/dlqx1qpfr/image/upload/v1690219861/samples/cloudinary-group.jpg",
    status: "PENDING",
    userId: "1",


    galleryId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];


db.prepare(`
   CREATE TABLE IF NOT EXISTS posts (
        id TEXT PRIMARY KEY,
       title TEXT NOT NULL,
       description TEXT NOT NULL,
       imageUrl TEXT NOT NULL,
       status TEXT NOT NULL,
       
       userId TEXT NOT NULL,
       galleryId TEXT,
       createdAt TEXT NOT NULL,
       updatedAt TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO posts VALUES (
         null,
         @title,
         @description,
         @imageUrl,
         @status,
      
         @userId,
         @galleryId,
         @createdAt,
         @updatedAt
      )
   `);

  for (const post of images) {
    stmt.run(post);
  }
}

initData();