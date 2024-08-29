



export default function NewsDetailPage({params}){
    return (
        <div id="news-detail">
            <h1>News Detail Page</h1>
            <h1>{params.id}</h1>
        </div>
    );
}