import {notFound} from "next/navigation";
import Link from "next/link";
import {getNewsItem} from "@/lib/news";


export default async function NewsDetailPage({params}) {
    const newsSlug = params.slug;
    const newsItem =await getNewsItem(newsSlug);

    if(!newsItem){
        notFound();
    }

    return (
        <article id="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} width="50%"/>
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.data}>{newsItem.date}</time>
            </header>
            <p>News id: {newsItem.id}</p>
        </article>
    );
}