import Link from "next/link";

const dummyNewsData = [
    {
        title: "Breaking News: Market Hits Record High",
        content: "The stock market reached an all-time high today, driven by strong earnings reports and positive economic data."
    },
    {
        title: "Sports Update: Local Team Wins Championship",
        content: "In an exciting final match, the local team clinched the championship title with a last-minute goal."
    },
    {
        title: "Weather Alert: Heavy Rain Expected Tomorrow",
        content: "Meteorologists predict heavy rainfall tomorrow, urging residents to take necessary precautions and stay indoors."
    },
    {
        title: "Tech News: New Smartphone Released",
        content: "The latest smartphone model features cutting-edge technology and innovative design, setting a new standard in the industry."
    },
    {
        title: "Health Tips: Benefits of a Balanced Diet",
        content: "A balanced diet is essential for maintaining good health, providing the body with necessary nutrients and energy."
    }
];


export default function NewsPage() {
    return (
        <div id="news">
            <h1>News Page</h1>
            <ul>
                {dummyNewsData.map((newsItem, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/news/${index}`}><h2>{newsItem.title}</h2></Link>
                            <p>{newsItem.content}</p>
                        </li>);
                })}
            </ul>
        </div>
    );
}