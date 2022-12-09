import './index.css'

const Post = () => {

    return(
        <div className='post'>
            <div className='profile-container'>
                <img src="https://res.cloudinary.com/sireesha30/image/upload/v1656604224/cld-sample.jpg" alt="joshi" className='profile-img'/>
                <h1>Joshith</h1>
            </div>
            <div className='post-details-container'>
                <h1>Post 1</h1>
                <p>content</p>
            </div>
        </div>
    )
   
}

export default Post