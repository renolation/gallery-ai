import {Lucia} from 'lucia';
import {BetterSqlite3Adapter} from "@lucia-auth/adapter-sqlite";
import {cookies} from "next/headers";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const sql = require('better-sqlite3');
const db = sql('posts.db');

const adapter = new BetterSqlite3Adapter(db, {
    user: 'users',
    session: 'sessions'
});