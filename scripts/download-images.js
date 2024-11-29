import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const characters = ['lewis', 'willy', 'gus', 'wizard', 'clint'];
const imagesDir = path.join(__dirname, '../public/images/blogs');

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download a placeholder image for each character
characters.forEach(character => {
  const url = `https://via.placeholder.com/800x600.png?text=${character}`;
  const filePath = path.join(imagesDir, `${character}-blog.png`);

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Downloaded ${character}-blog.png`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${character}-blog.png:`, err.message);
  });
});
