import './Background.css';
import video from '../../assets/video.mp4';
import image0 from '../../assets/image0.jpg';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image0} alt="image0" className='background fade-in' />;
  } else if (heroCount === 1) {
    return <img src={image1} alt="image2" className='background fade-in' />;
  } else if (heroCount === 2) {
    return <img src={image2} alt="image3" className='background fade-in' />;
  } else if (heroCount === 3) {
    return <img src={image3} alt="image4" className='background fade-in' />;
  }  else {
    return null; // fallback
  }
};

export default Background;
