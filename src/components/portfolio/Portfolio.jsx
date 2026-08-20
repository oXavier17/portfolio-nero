import './Portfolio.css';
import { portfolioCategories } from '../../data/portfolioData';

export default function Portfolio() {
  const getEmbedData = (url) => {
    if (!url) return { type: 'video', platform: 'mp4', src: '' };

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('/shorts/')) {
        videoId = url.split('/shorts/')[1]?.split('?')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else {
        videoId = url.split('v=')[1]?.split('&')[0];
      }
      return {
        type: 'iframe',
        platform: 'youtube',
        src: `https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&controls=0`
      };
    }

    // TikTok
    if (url.includes('tiktok.com')) {
      const videoId = url.split('/video/')[1]?.split('?')[0];
      return {
        type: 'iframe',
        platform: 'tiktok',
        src: `https://www.tiktok.com/embed/v2/${videoId}`
      };
    }

    // Instagram
    if (url.includes('instagram.com')) {
      let cleanUrl = url.split('?')[0].replace('/reels/', '/reel/');
      if (!cleanUrl.endsWith('/')) cleanUrl += '/';
      return {
        type: 'iframe',
        platform: 'instagram',
        src: `${cleanUrl}embed/`
      };
    }

    // Drive
    if (url.includes('drive.google.com')) {
      let videoId = '';
      if (url.includes('/file/d/')) {
        videoId = url.split('/file/d/')[1]?.split('/')[0];
      } else if (url.includes('id=')) {
        videoId = url.split('id=')[1]?.split('&')[0];
      }

      return {
        type: 'iframe',
        platform: 'drive',
        src: `https://drive.google.com/file/d/${videoId}/preview`
      };
    }

    // MP4 Direto
    return { type: 'video', platform: 'mp4', src: url };
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="page-container portfolio-container">
        
        <div className="sect-title">
          <h2>Portfólio</h2>
          <p className="mono">UMA AMOSTRA DA VARIEDADE DE NICHOS QUE JÁ ATENDI</p>
        </div>

        {portfolioCategories.map((category, catIndex) => (
          <div key={catIndex} className="category-block">
            <div className="cat-label">{category.label}</div>
            
            <div className="video-grid">
              {category.videos.map((video, videoIndex) => {
                const { type, platform, src } = getEmbedData(video.videoUrl);

                return (
                  <div 
                    key={videoIndex} 
                    className={`video-card ${platform === 'tiktok' || platform === 'instagram' ? 'embed-card' : ''}`}
                  >
                    {type === 'iframe' ? (
                      <iframe
                        src={src}
                        title={`Video ${videoIndex}`}
                        className="video-player"
                        frameBorder="0"
                        scrolling="no"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <video 
                        src={src}
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="video-player"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}