import './Page.css';
import image from '../../assets/image.png';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <div className='mt-32'>
        <div class='section-header section-header-center' q:key='TG_4' q:id='r'>
          <a href='/About/angel-round/' class='section-header-badge' q:key='TG_1'>
            <span class='section-header-badge-text'>Team Da Vinci</span>
          </a>
          <h1 class='section-header-title section-header-title-h1' q:key='TG_2'>
            <div class='section-header-title-desktop'>
              <span q:key='Zenith is the new'>Achieve Your Aspirations </span>
              <span q:key='<b>standard for collaboration</b>'>
                <b>with Intentional Consumption</b>
              </span>
            </div>
            <div class='section-header-title-mobile'>
              <span q:key='Zenith is'>Achieve your</span>
              <span q:key='the new standard'>Aspirations with</span>
              <span q:key='<b>for collaboration</b>'>
                <b>Intentional Consumption</b>
              </span>
            </div>
          </h1>
          <p class='section-header-description' q:key='TG_3' q:id='t'>
            Align your online activities with your aspirations through insightful tracking and
            analysis
          </p>
        </div>
        <div className='flex mt-10 opacity-60 hover:opacity-100 transition-opacity'>
          <Link to='/login' className='button px-5 text-lg header-nav-action mx-auto'>
            Login / Sign Up
          </Link>
        </div>
      </div>
      <div className='cards'>
        <div className='card example-2'>
          <div className='inner'>
            <img alt='A preview of Zenith app.' src={image} />
          </div>
        </div>
      </div>
    </>
  );
}
