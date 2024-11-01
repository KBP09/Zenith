import React from 'react';
import CoreFeature from './CoreFeature.jsx';
function Features() {
  return (
    <>
      <section className='text-center m-1'>
        <CoreFeature />

        <div className='m-5'>
          <svg
            fill='none'
            height='28'
            viewBox='0 0 29 28'
            width='29'
            xmlns='http://www.w3.org/2000/svg'
            q:key='sa_0'
            className='m-auto'
          >
            <circle
              cx='17.5'
              cy='17'
              fill='#E2E8FF'
              fill-opacity='0.1'
              r='6'
              stroke='#E2E8FF'
              stroke-linejoin='round'
            ></circle>
            <circle
              cx='11.5'
              cy='17'
              fill='#E2E8FF'
              fill-opacity='0.1'
              r='6'
              stroke='#E2E8FF'
              stroke-linejoin='round'
            ></circle>
            <circle
              cx='14.5'
              cy='11'
              fill='#E2E8FF'
              fill-opacity='0.1'
              r='6'
              stroke='#E2E8FF'
              stroke-linejoin='round'
            ></circle>
            <path
              d='M11.5495 16.2257C11.7933 14.3336 12.9185 12.7176 14.5 11.8027C16.0815 12.7176 17.2067 14.3336 17.4505 16.2257C16.5793 16.7187 15.5725 17 14.5 17C13.4275 17 12.4208 16.7187 11.5495 16.2257Z'
              fill='#E2E8FF'
              fill-opacity='0.32'
            ></path>
          </svg>
          <div className='my-2'>Everything you needall in one platform.</div>
          <div className='text-gray-500 mb-20'>
            From prototyping to production - develop without switching tabs.
          </div>

          <div className=' mx-28 grid grid-cols-1 md:grid-cols-3 gap-20 text-center'>
            {/* Chat */}
            <div className='border-l border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='3q_0'
                >
                  <path
                    d='M18.125 10C18.125 5.70312 14.9653 3.125 10 3.125C5.03472 3.125 1.875 5.70312 1.875 10C1.875 11.114 2.64212 13.0046 2.76208 13.2935C2.77285 13.3194 2.78351 13.3431 2.79317 13.3694C2.87574 13.5947 3.21435 14.7939 1.875 16.569C3.68056 17.4284 5.59805 16.0156 5.59805 16.0156C6.92469 16.7164 8.5032 16.875 10 16.875C14.9653 16.875 18.125 14.2969 18.125 10Z'
                    stroke='#E2E8FF'
                    stroke-linecap='square'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                  ></path>
                  <path
                    d='M5.58334 10.0002C5.58334 10.3684 5.88182 10.6668 6.25001 10.6668C6.6182 10.6668 6.91668 10.3684 6.91668 10.0002C6.91668 9.63197 6.6182 9.3335 6.25001 9.3335C5.88182 9.3335 5.58334 9.63197 5.58334 10.0002ZM9.33334 10.0002C9.33334 10.3684 9.63182 10.6668 10 10.6668C10.3682 10.6668 10.6667 10.3684 10.6667 10.0002C10.6667 9.63197 10.3682 9.3335 10 9.3335C9.63182 9.3335 9.33334 9.63197 9.33334 10.0002ZM13.0833 10.0002C13.0833 10.3684 13.3818 10.6668 13.75 10.6668C14.1182 10.6668 14.4167 10.3684 14.4167 10.0002C14.4167 9.63197 14.1182 9.3335 13.75 9.3335C13.3818 9.3335 13.0833 9.63197 13.0833 10.0002Z'
                    fill='#E2E8FF'
                    stroke='#E2E8FF'
                    stroke-linecap='square'
                    stroke-width='0.5'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>Chat</h3>
              <p className='text-gray-400 mt-2'>
                Collaborate with team members using our powerful devtool integrations.
              </p>
            </div>

            {/* Deployments */}
            <div className='border-l border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='IV_0'
                >
                  <path
                    d='M13.75 6.6665V9.1665C13.75 9.62674 13.3769 9.99984 12.9166 9.99984H7.08331C6.62308 9.99984 6.24998 10.3729 6.24998 10.8332M6.24998 10.8332V6.6665M6.24998 10.8332V13.3332M8.54165 4.58317C8.54165 5.84882 7.51563 6.87484 6.24998 6.87484C4.98433 6.87484 3.95831 5.84882 3.95831 4.58317C3.95831 3.31752 4.98433 2.2915 6.24998 2.2915C7.51563 2.2915 8.54165 3.31752 8.54165 4.58317ZM16.0416 4.58317C16.0416 5.84882 15.0156 6.87484 13.75 6.87484C12.4843 6.87484 11.4583 5.84882 11.4583 4.58317C11.4583 3.31752 12.4843 2.2915 13.75 2.2915C15.0156 2.2915 16.0416 3.31752 16.0416 4.58317ZM8.54165 15.4165C8.54165 16.6822 7.51563 17.7082 6.24998 17.7082C4.98433 17.7082 3.95831 16.6822 3.95831 15.4165C3.95831 14.1509 4.98433 13.1248 6.24998 13.1248C7.51563 13.1248 8.54165 14.1509 8.54165 15.4165Z'
                    stroke='#E2E8FF'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>Deployments</h3>
              <p className='text-gray-400 mt-2'>
                View, manage, and deploy your applications directly from Zenith.
              </p>
            </div>

            {/* Code Explorer */}
            <div className='border-l border-r border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='2U_0'
                >
                  <path
                    d='M11.0417 3.9585H3.125C2.66476 3.9585 2.29167 4.33159 2.29167 4.79183V15.2085C2.29167 15.6687 2.66476 16.0418 3.125 16.0418H11.0417M13.5378 3.9585H16.8712C17.3314 3.9585 17.7045 4.33159 17.7045 4.79183V15.2085C17.7045 15.6687 17.3314 16.0418 16.8712 16.0418H13.5378M13.5378 3.9585V2.0835M13.5378 3.9585V16.0418M13.5378 16.0418V17.9168M7.08333 7.91683L9.16667 10.0002L7.08333 12.0835'
                    stroke='#E2E8FF'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>Code Explorer</h3>
              <p className='text-gray-400 mt-2'>
                View and edit your repository directly from Zenith.
              </p>
            </div>

            {/* Tasks */}
            <div className='border-l border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='We_0'
                >
                  <path
                    d='M9.79167 13.5417H16.875M9.79167 6.45833H16.875M3.125 7.1875L4.51389 8.125L7.29167 4.375M3.125 14.6875L4.51389 15.625L7.29167 11.875'
                    stroke='#E2E8FF'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>Tasks</h3>
              <p className='text-gray-400 mt-2'>
                View, track, and edit GitHub Issues directly from Zenith - with end-to-end sync.
              </p>
            </div>

            {/* Inbox */}
            <div className='border-l border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='Ds_0'
                >
                  <path
                    d='M3.125 10.625H6.72517C7.01771 12.1672 8.37267 13.3333 10 13.3333C11.6273 13.3333 12.9823 12.1672 13.2748 10.625L16.875 10.625M16.0417 16.875H3.95834C3.4981 16.875 3.125 16.5019 3.125 16.0417L3.12504 3.95834C3.12504 3.4981 3.49814 3.125 3.95837 3.125L16.0417 3.125C16.5019 3.125 16.875 3.4981 16.875 3.95833V16.0417C16.875 16.5019 16.5019 16.875 16.0417 16.875Z'
                    stroke='#E2E8FF'
                    stroke-linecap='square'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>Inbox</h3>
              <p className='text-gray-400 mt-2'>
                Stay up-to-date on the latest information within your organization.
              </p>
            </div>

            {/* AI */}
            <div className='border-l border-r border-gray-700 pl-6'>
              <div className='flex justify-center'>
                <svg
                  fill='none'
                  height='20'
                  viewBox='0 0 20 20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                  q:key='o1_0'
                >
                  <path
                    clip-rule='evenodd'
                    d='M10.8333 5.8335C11.1785 5.8335 11.4583 6.11332 11.4583 6.4585C11.4583 8.48 11.9049 9.79288 12.7228 10.6107C13.5406 11.4286 14.8535 11.8752 16.875 11.8752C17.2202 11.8752 17.5 12.155 17.5 12.5002C17.5 12.8453 17.2202 13.1252 16.875 13.1252C14.8535 13.1252 13.5406 13.5717 12.7228 14.3896C11.9049 15.2074 11.4583 16.5203 11.4583 18.5418C11.4583 18.887 11.1785 19.1668 10.8333 19.1668C10.4882 19.1668 10.2083 18.887 10.2083 18.5418C10.2083 16.5203 9.76176 15.2074 8.94391 14.3896C8.12606 13.5717 6.81317 13.1252 4.79167 13.1252C4.44649 13.1252 4.16667 12.8453 4.16667 12.5002C4.16667 12.155 4.44649 11.8752 4.79167 11.8752C6.81317 11.8752 8.12606 11.4286 8.94391 10.6107C9.76176 9.79288 10.2083 8.48 10.2083 6.4585C10.2083 6.11332 10.4882 5.8335 10.8333 5.8335ZM10.8333 10.0073C10.5825 10.5746 10.2506 11.0718 9.82779 11.4946C9.40494 11.9175 8.90774 12.2494 8.34049 12.5002C8.90774 12.751 9.40494 13.0829 9.82779 13.5057C10.2506 13.9286 10.5825 14.4258 10.8333 14.993C11.0841 14.4258 11.416 13.9286 11.8389 13.5057C12.2617 13.0829 12.7589 12.751 13.3262 12.5002C12.7589 12.2494 12.2617 11.9175 11.8389 11.4946C11.416 11.0718 11.0841 10.5746 10.8333 10.0073Z'
                    fill='#E2E8FF'
                    fill-rule='evenodd'
                  ></path>
                  <path
                    d='M5 4.5835C5 4.35338 4.81345 4.16683 4.58333 4.16683C4.35322 4.16683 4.16667 4.35338 4.16667 4.5835C4.16667 5.40069 3.98566 5.894 3.68975 6.18991C3.39384 6.48582 2.90053 6.66683 2.08333 6.66683C1.85322 6.66683 1.66667 6.85338 1.66667 7.0835C1.66667 7.31361 1.85322 7.50016 2.08333 7.50016C2.90053 7.50016 3.39384 7.68117 3.68975 7.97708C3.98566 8.27299 4.16667 8.7663 4.16667 9.5835C4.16667 9.81361 4.35322 10.0002 4.58333 10.0002C4.81345 10.0002 5 9.81361 5 9.5835C5 8.7663 5.18101 8.27299 5.47692 7.97708C5.77283 7.68117 6.26614 7.50016 7.08333 7.50016C7.31345 7.50016 7.5 7.31361 7.5 7.0835C7.5 6.85338 7.31345 6.66683 7.08333 6.66683C6.26614 6.66683 5.77283 6.48582 5.47692 6.18991C5.18101 5.894 5 5.40069 5 4.5835Z'
                    fill='#E2E8FF'
                  ></path>
                  <path
                    d='M9.16667 1.25016C9.16667 1.02004 8.98012 0.833496 8.75 0.833496C8.51988 0.833496 8.33333 1.02004 8.33333 1.25016C8.33333 1.778 8.21598 2.06298 8.05607 2.2229C7.89615 2.38281 7.61118 2.50016 7.08333 2.50016C6.85322 2.50016 6.66667 2.68671 6.66667 2.91683C6.66667 3.14695 6.85322 3.3335 7.08333 3.3335C7.61118 3.3335 7.89615 3.45085 8.05607 3.61076C8.21598 3.77068 8.33333 4.05566 8.33333 4.5835C8.33333 4.81361 8.51988 5.00016 8.75 5.00016C8.98012 5.00016 9.16667 4.81361 9.16667 4.5835C9.16667 4.05566 9.28402 3.77068 9.44393 3.61076C9.60385 3.45085 9.88883 3.3335 10.4167 3.3335C10.6468 3.3335 10.8333 3.14695 10.8333 2.91683C10.8333 2.68671 10.6468 2.50016 10.4167 2.50016C9.88883 2.50016 9.60385 2.38281 9.44393 2.2229C9.28402 2.06298 9.16667 1.778 9.16667 1.25016Z'
                    fill='#E2E8FF'
                  ></path>
                </svg>
              </div>
              <h3 className='mt-4 text-xl font-medium'>AI</h3>
              <p className='text-gray-400 mt-2'>
                AI to make you 10x faster on everyday workflows - baked into Zenith.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
