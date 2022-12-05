import { useState } from 'react'
import './ArticleTitle.css'

function ArticleTitle() {
    const [count, setCount] = useState(0)

    return (
        <div className="ArticleTitle">
            Project Tile
        </div>
    )
}

export default ArticleTitle