'use client'
import React from 'react'
import StarIcon from '@/assets/Star'
import VerifiedIcon from '@/assets/verified'
import GoogleLogo from '@/assets/google'
import GoogleIcon from '@/assets/google-icon'

const reviewsData = [
  {
    id: 1,
    name: 'Doc Halliday',
    time: '6 months ago',
    avatar: '/img/icons/user-1.png',
    text: 'Fair prices, good service, speedy response. Beats the competitors.',
  },
  {
    id: 2,
    name: 'David Cartwright',
    time: '6 months ago',
    avatar: '/img/icons/user.png',
    text: 'Askar was very professional, courteous and quickly diagnosed and fixed our stove. Highly recommend Midwest Standards for appliance repair.',
  },
  {
    id: 3,
    name: 'Allison Benton',
    time: '7 months ago',
    avatar: '/img/icons/user-2.png',
    text: 'Knowledgeable and professional',
  },
  {
    id: 4,
    name: 'Steph Muralles',
    time: '7 months ago',
    avatar: '/img/icons/user-8.png',
    text: 'Askar was our technician and he was very helpful and knowledgeable! He knew exactly what the problem was and fixed it right away. Definitely recommend this company!',
  },
  {
    id: 5,
    name: 'Micah Pegman',
    time: '7 months ago',
    avatar: '/img/icons/user-3.png',
    text: 'Askar was extremely professional and helpful in diagnosing and repairing our stove in working condition in short order. Would be willing to request his assistance on further repairs.',
  },
  {
    id: 6,
    name: 'Sandro Tombesi',
    time: '7 months ago',
    avatar: '/img/icons/user-4.png',
    text: 'Responded quickly and completed the work satisfactorily.',
  },
  {
    id: 7,
    name: 'Chong Lee',
    time: '7 months ago',
    avatar: '/img/icons/user-5.png',
    text: 'Askar the technician was fantastic. He went above and beyond what he needed to do to solve the problem, and got it fixed.',
  },
  {
    id: 8,
    name: 'Chris Mansour',
    time: '7 months ago',
    avatar: '/img/icons/user-6.png',
    text: 'Askar the technician was fantastic. He went above and beyond what he needed to do to solve the problem, and got it fixed.',
  },
  {
    id: 9,
    name: 'AROMARK',
    time: '8 months ago',
    avatar: '/img/icons/user-7.png',
    text: 'I recommend these guys, they fixed my refrigerator quickly and efficiently!Thank you!',
  },
]

const CARD_WIDTH_REM = 20
const CARD_HEIGHT_REM = 13.75

const ReviewCard = ({
  review,
}: {
  review: typeof reviewsData[0]
}) => {
  return (
    <div
      className="bg-[#f4f4f4] rounded-[0.25rem] p-8 flex flex-col justify-start flex-shrink-0 relative"
      style={{
        width: `${CARD_WIDTH_REM}rem`,
        height: `${CARD_HEIGHT_REM}rem`,
        scrollSnapAlign: 'start',
        overflow: 'visible',
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center flex-1 overflow-hidden text-left">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-18 h-18 rounded-full object-cover"
          />
          <div className="flex flex-col justify-center overflow-hidden">
            <p className="font-semibold text-2xl text-gray-900 truncate">{review.name}</p>
            <p className="text-xl text-gray-500">{review.time}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 mb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color="#fbbf24" width="2rem" height="2rem" />
          ))}
        </div>
        <div className="ml-2">
          <VerifiedIcon width="2rem" height="2rem" />
        </div>
      </div>

      <div className="text-2xl text-black relative" style={{ whiteSpace: 'normal' }}>
        <p>{review.text}</p>
      </div>
    </div>
  )
}

export default function ReviewsMobileSwipe() {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
      <h2 className="text-[3rem] font-bold mb-2">EXCELLENT</h2>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color="#fbbf24" width="3.5rem" height="3.5rem" />
        ))}
      </div>
      <p className="text-2xl text-gray-800 mb-6">
        Based on <span className="font-bold">22 reviews</span>
      </p>
      <div className="mb-4">
        <GoogleLogo width="6.875rem" height="2.1875rem" />
      </div>

      <div
        className="overflow-x-auto no-scrollbar"
        style={{
          width: `${CARD_WIDTH_REM}rem`,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="flex flex-nowrap"
          style={{
            gap: '1rem',
          }}
        >
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}