import {Link, useNavigate} from 'react-router-dom'

export default function ArticleTeaser({article}) {
    const navigate = useNavigate()

    return (
        <div className="articleTeaser">
            <div onClick={()=> { navigate(`/article/${article.id}`)}}>
                {/* <Link to={`/article/${article.id}`}> */}
                    <h2>{article.id}. {article.title}</h2>
                    <p>{article.created_date}</p>
                {/* </Link> */}
            </div>
        </div>
    )
}