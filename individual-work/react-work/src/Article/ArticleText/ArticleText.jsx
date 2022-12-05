import { useState } from 'react'
import './ArticleText.css'

function ArticleText() {
    const [count, setCount] = useState(0)

    return (
        <div className="ArticleText">
           Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. 
        </div>
    )
}

export default ArticleText