import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';


const db = sql('posts.db');



export async function getPosts() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare('Select * from posts').all();
}