import React from 'react';
import { ReactTypical } from '@deadcoder0904/react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/kelvinadityan/'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='https://www.linkedin.com/'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='https://www.instagram.com/kelvinadityanouval/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://www.linkedin.com/in/kelvin-aditya-nouval-0b04381a0/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {''}
              Hello, I'M{' '}
              <span className='highligted-text'>Kelvin Aditya Nouval</span>
            </span>
          </div>
          <div className='profile-detail-name'>
            <span className='primary-test'>
              {''}
              <h1>
                <ReactTypical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev ',
                    2000,
                    'Front End Developer',
                    2000,
                    'Cross Platform',
                    2000,
                    'React/React Native Dev',
                    2000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building application with front end operations.
              </span>
            </span>
          </div>
          <div className='profile-option'>
            <button className='btn primary-btn'>
              {''}
              Hire Me{''}
            </button>
            <a
              href='CV Kelvin Aditya Nouval.pdf'
              download='CV Kelvin Aditya Nouval.pdf'
            >
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
