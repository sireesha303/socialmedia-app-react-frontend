import './index.css'
import Header from '../Header'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const Home = () =>{

    useEffect(()=>{

        async function fetchPosts (){
            const jwtToken = Cookies.get('social-media-app-token');
            const url = 'https://social-media-app.up.railway.app/posts/'
            const options = {
                method:'GET',
                headers: {
                      Authorization: `Bearer ${jwtToken}`,
                },        
            }

            const response = await fetch(url,options);
            const data = await response.json()

            if(response.ok){
                console.log('testing')
            }
        };

        fetchPosts();
    
    },[])

    
    return(
        <>
            <Header/>
            <div className='home-bg-container'>
                <div className='posts-container'>
                    
                </div>
               
            </div>
        </>  
    )
    
}


export default Home