import { useState } from 'react'
import './Article.css'
import ArticleText from './ArticleText/ArticleText'
import ArticleTitle from './ArticleTitle/ArticleTitle'

function Article() {
    const [count, setCount] = useState(0)

    return (
        <div className="Articlecle">
            <ArticleTitle/>
            <ArticleText />
        </div>
    )
}

export default Article