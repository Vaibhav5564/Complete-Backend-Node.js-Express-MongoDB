import React, {useState, useEffect} from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
        _id: "1",
        image: "#",
        caption: "Hello World"
        }
    ])

    useEffect(() => {
        axios.get("https://scaling-umbrella-q7x976jwwg653x9vg-3000.app.github.dev/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                posts.map( (post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt="Image"/>
                        <p>{post.caption}</p>
                    </div>
                ) )
    ): (
        <h1> No Post Available</h1>
    )
}
        </section>
    )
}

export default Feed