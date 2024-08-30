'use client';
import Link from "next/link";
import slugify from "slugify";
import {DUMMY_NEWS} from "@/dummy-news";
import NewsList from "@/components/news-list";
import {useEffect, useState} from "react";


export default function NewsPage() {


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:3030/news')
            if (!response.ok) {
                setError('Failed to fetch news.')
                setIsLoading(false);
            }
            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    let newsContent;
    if(news){
        newsContent = <NewsList news={news} />;
    }
    return (
        <div id="news">
            <h1>News Page</h1>
            {newsContent}
        </div>
    );
}