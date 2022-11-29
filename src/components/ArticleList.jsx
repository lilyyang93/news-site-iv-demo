import ArticleTeaser from "./ArticleTeaser"

export default function ArticleList({articles}) {

    return (
        <div className="article-list">
            {articles.map(article => {
                return <ArticleTeaser key={article.id} id={article.id} article={article} />
            })}
        </div>
    )
}