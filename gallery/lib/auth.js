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

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    }
})

export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
}

export async function verifyAuth() {
    const sessionCookie = cookies().get(lucia.sessionCookieName)
    if (!sessionCookie) {
        return {
            user: null,
            session: null,
        }
    }
    const sessionId = sessionCookie.value;
    if (!sessionId) {
        return {
            user: null,
            session: null,
        }
    }
    const result = lucia.validateSession(sessionId);

    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
    } catch (e) {

    }


    return result;
}

export async function destroySession() {
    const {session} = await verifyAuth();
    if (!session) {
        return {
            error: 'Unauthorized'
        }
    }
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
}

export function createUser(email, password) {
    const result = db
        .prepare('insert into users (email, password) values (? , ?)')
        .run(email, password);
    return result.lastInsertRowid;
}

export function getUserByEmail(email) {
    return db.prepare('select * from users where email= ?').get(email);
}