import Link from "next/link";
import slugify from "slugify";
import {DUMMY_NEWS} from "@/dummy-news";
import NewsList from "@/components/news-list";


export default function NewsPage() {
    return (
        <div id="news">
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS}/>
        </div>
    );
}