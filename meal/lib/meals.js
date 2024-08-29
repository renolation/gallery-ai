import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';


const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare('Select * from meals').all();
}

export function getMeal(slug) {
    return db.prepare('Select * from meals where slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    // const stream = fs.createWriteStream(`public/images/${fileName}`);
    // const buffer = await meal.image.arrayBuffer();
    // stream.write(Buffer.from(buffer), (error) => {
    //     if (error) {
    //         throw new Error('Error saving image');
    //     }
    // });

    meal.image = `/images/macncheese.jpg`;

    db.prepare(`
        insert into meals (title, summary, instructions, image, creator, creator_email, slug)
        values (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `).run(meal);

}