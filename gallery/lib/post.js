import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";

const db = sql('posts.db');

export async function getPosts() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return db.prepare('Select * from posts').all();
}

export function getPost(slug) {
    return db.prepare('select * from posts where slug = ?').get(slug);
}