'use client'
import React, { useState } from 'react'
import StarIcon from '@/assets/Star'
import VerifiedIcon from '@/assets/verified'
import GoogleLogo from '@/assets/google'

const reviewsData = [
  {
    id: 1,
    name: 'Matt Streicher',
    time: '6 months ago',
    avatar: '/img/icons/user-1.png',
    text: 'They responded quickly and was able to diagnose my problem easily. They were honest that it would cost more to fix it than it would be to buy a new washer, and only charged me the small call out fee, even came out a second time free of charge just to verify they could not fix it.',
  },
  {
    id: 2,
    name: 'Golden Soul_17',
    time: '6 months ago',
    avatar: '/img/icons/user.png',
    text: 'Dan came to our apt and fixed our dryer. He did everything in a proper way and now our dryer looks new. He has little English speaking barriers but he good enough to explain everything. Most importantly, I can tell he speaks very well on appliance’s language and fixed our dryer the same day!',
  },
  {
    id: 3,
    name: 'Tair Mansur',
    time: '1 months ago',
    avatar: '/img/icons/user-2.png',
    text: 'Excellent service from start to finish. Archie came to fix our Viking built-in oven and did an amazing job. He’s only 18 but was very polite, professional, and knew exactly what he was doing. He explained the problem clearly and fixed it quickly. Very impressed with his work. Highly recommend EVEREST!',
  },
  {
    id: 4,
    name: 'Lanz Torres',
    time: '1 months ago',
    avatar: '/img/icons/user-8.png',
    text: 'I called Everest for our oven repair and they came out the same day and fixed our built in Wolf oven at reasonable price. Tech showed up on time and cleaned up after himself. Recommend!',
  },
  {
    id: 5,
    name: 'jason dummeldinger',
    time: '1 months ago',
    avatar: '/img/icons/user-3.png',
    text: 'Absal provided excellent service. He took care of our dishwasher issue asap. He was on time, friendly, informative and professional. Would highly recommend.',
  },
  {
    id: 6,
    name: 'Edward Petka',
    time: '3 months ago',
    avatar: '/img/icons/user-4.png',
    text: 'Abzal was so kind to come to our home the same day we called. He was friendly and thorough, showing us the procedures he had used to investigate the status of our washer. We feel very confident in recommending this company to others who need appliances work.',
  },
  {
    id: 7,
    name: 'Julie Feldman',
    time: '3 days ago',
    avatar: '/img/icons/user-5.png',
    text: 'I panicked because of water leaking from my French Door Refrigerator and contracted Everest Appliance Repair. They were very professional and knew immediately the problem. Removing the freezer compartment and clearing out all the ice that encrusted the freezer then entering the panel to actually repair the problem was no easy task. I was very impressed and figured this would be very expensive but surprise, surprise the cost was very reasonable. I highly recommend them to anyone that has appliance issues. They took the time and patience to explain everything they did.  I am going to have them check out my dryer.',
  },
  {
    id: 8,
    name: 'Natasha Singh',
    time: '2 months ago',
    avatar: '/img/icons/user-6.png',
    text: 'Our 17 year old GE fridge (came with our condo) full of fresh food / groceries stopped cooling randomly on a Sunday. We reached out to Abzal who came to our place the same day and diagnosed the problem, ordered the replacement motherboard and installed it by the next day. We had a few issues thereafter (not directly related to the initial problem) and Abzal came back 2-3 more times to address all of them. He was very professional, polite and responsive over text as well. We would definitely recommend his services to anyone needing them and will use him in the future ourselves!',
  },
  {
    id: 9,
    name: 'Jenny King',
    time: '1 months ago',
    avatar: '/img/icons/user-7.png',
    text: 'Dan did a great job. They were fast and courteous too. Fixed my stove in 15 minutes. Thank you!',
  },
]

const ReviewCard = ({
  review,
  expanded,
  onToggle,
}: {
  review: typeof reviewsData[0]
  expanded: boolean
  onToggle: () => void
}) => {
  const maxChars = 140
  const isLong = review.text.length > maxChars

  return (
    <div
      className="bg-[#f4f4f4] rounded-[0.25rem] px-8 py-6 flex flex-col justify-start flex-shrink-0 relative w-full min-h-[11.875rem]"
      style={{
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
            <p className="font-inter-semibold text-2xl text-color truncate">{review.name}</p>
            <p className="text-xl font-inter text-gray-500">{review.time}</p>
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
          <VerifiedIcon width="1.5rem" height="1.5rem" />
        </div>
      </div>

      <div className="text-2xl text-color font-inter relative whitespace-normal">
        <p className={expanded ? '' : 'line-clamp-3'}>{review.text}</p>
      </div>

      {isLong && (
        <button
          onClick={onToggle}
          className="mt-2 text-black opacity-60 hover:underline text-xl font-medium text-left w-full"
        >
          {expanded ? 'Hide' : 'Read more'}
        </button>
      )}
    </div>
  )
}

export default function ReviewsMobileSwipe() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col items-center px-10 py-[5.5rem] justify-center bg-gray-50">
      <h2 className="text-5xl tracking-widest font-gloock text-color mb-2">EXCELLENT</h2>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color="#fbbf24" width="3rem" height="3rem" />
        ))}
      </div>
      <p className="text-2xl text-color mb-6">
        Based on <span className="font-inter-bold">22 reviews</span>
      </p>
      <div className="mb-4">
        <GoogleLogo width="110px" height="35px" />
      </div>

      <div
        className="overflow-x-auto no-scrollbar w-full px-4"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex flex-nowrap gap-4">
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              expanded={expandedId === review.id}
              onToggle={() => toggleExpanded(review.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
