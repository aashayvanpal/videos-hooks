import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar.js'
import youtube from '../apis/youtube'
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onFormSubmit('batman')
    }, [])


    const onFormSubmit = async (term) => {
        console.log(term)

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        console.log(response)
        console.log(response.data.items)
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }


    return (
        <div className='ui container'>
            <h1>Welcome to my video app!</h1>
            <SearchBar onFormSubmit={onFormSubmit} />

            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={videos}
                            onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

