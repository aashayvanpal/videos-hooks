import react from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        // const videoSrc = `https://drive.google.com/file/d/1OSPtpstKw2pXnLOK9-db5DyqkIyHosuZ/view?usp=sharing`
        return <div>
            <div className='ui embed'>
                <iframe title="video title" allowFullScreen src={videoSrc} />
                {/* <iframe src="https://drive.google.com/file/d/1OSPtpstKw2pXnLOK9-db5DyqkIyHosuZ/preview" allowFullScreen width="640" height="480" allow="autoplay"></iframe> */}
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p className=''>{video.snippet.description}</p>
            </div>
        </div>
    }
}
export default VideoDetail 