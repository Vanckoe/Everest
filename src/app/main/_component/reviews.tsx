'use client'
import React, { useState, useRef, useEffect } from 'react'
import GoogleIcon from '@/assets/google-icon'
import StarIcon from '@/assets/Star'
import VerifiedIcon from '@/assets/verified'
import GoogleLogo from '@/assets/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReviewsMobile from './ReviewsMobile'

export default function Home() {
  return (
    <div>
      {/* ПК версия */}
      <div id='reviews' className="hidden md:block">
        <Reviews />
      </div>

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <ReviewsMobile />
      </div>
    </div>
  )
}

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
  }
  ]

const CARD_WIDTH_REM = 18.375

const ReviewCard = ({
  review,
  expanded,
  onToggle,
}: {
  review: typeof reviewsData[0]
  expanded: boolean
  onToggle: () => void
}) => {
  const maxChars = 120
  const isLong = review.text.length > maxChars

  return (
    <div
      className="w-[18.375rem] bg-[#f4f4f4] rounded-xl p-[1rem] flex flex-col justify-start mr-[0.9375rem] flex-shrink-0 transition-transform duration-300 ease-in-out relative hover:-translate-y-[0.25rem] hover:z-[30]"
      style={{ zIndex: expanded ? 30 : 10 }}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-[0.9375rem] items-center flex-1">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-[2.5rem] h-[2.5rem] rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center overflow-hidden text-left">
            <p className="font-semibold text-[0.875rem] text-gray-900 truncate">{review.name}</p>
            <p className="text-[0.75rem] text-gray-500">{review.time}</p>
          </div>
        </div>
        <GoogleIcon width="1.25rem" height="1.25rem" />
      </div>

      <div className="flex items-center mt-[0.9375rem] mb-[0.5rem]">
        <div className="flex gap-[0.0625rem]">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color="#fbbf24" width="1.25rem" height="1.25rem" />
          ))}
        </div>
        <div className="ml-[0.5rem]">
          <VerifiedIcon width="1rem" height="1rem" />
        </div>
      </div>

      <div
        className="text-[0.875rem] text-black relative"
        style={{
          maxHeight: expanded ? '62.5rem' : '5.5rem',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          whiteSpace: 'normal',
        }}
      >
        <p>{review.text}</p>
      </div>

      {isLong && !expanded && (
        <button
          onClick={onToggle}
          className="mt-[0.25rem] text-сolor opacity-60 hover:underline text-[0.75rem] font-medium text-left w-full"
        >
          Read more
        </button>
      )}

      {expanded && (
        <button
          onClick={onToggle}
          className="mt-[0.25rem] text-color opacity-60 hover:underline text-[0.75rem] font-medium text-left w-full"
        >
          Hide
        </button>
      )}
    </div>
  )
}

const Reviews = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleExpanded = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      const newScroll = containerRef.current.scrollLeft - CARD_WIDTH_REM * 16
      containerRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const newScroll = containerRef.current.scrollLeft + CARD_WIDTH_REM * 16
      containerRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
    }
  }

  const canScrollLeft = () => {
    return containerRef.current ? containerRef.current.scrollLeft > 10 : false
  }

  const canScrollRight = () => {
    if (!containerRef.current) return false
    const { scrollWidth, clientWidth, scrollLeft } = containerRef.current
    return scrollLeft + clientWidth + 10 < scrollWidth
  }

  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    const handleScroll = () => {
      forceUpdate(n => n + 1)
    }
    if (el) el.addEventListener('scroll', handleScroll)
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-[6rem] bg-gray-50">
      <h2 className="text-[1.875rem] font-Merriweather">EXCELLENT</h2>
      <div className="flex items-center gap-2 mb-[0.25rem]">
        <span className="text-[1.5rem] font-semibold text-color">4,7</span>

        {[...Array(4)].map((_, i) => (
          <StarIcon key={i} color="#fbbf24" width="2rem" height="2rem" />
        ))}

        {/* Половинчатая звезда */}
        <div className="relative w-[2rem] h-[2rem]">
          {/* Серая фоновая звезда */}
          <StarIcon color="#e5e7eb" width="2rem" height="2rem" />

          {/* Жёлтая левая половина */}
          <div className="absolute top-0 left-0 w-[1rem] h-full overflow-hidden">
            <StarIcon color="#fbbf24" width="2rem" height="2rem" />
          </div>
        </div>
      </div>
      <p className="text-[0.875rem] text-gray-800 mb-[0.5rem]">
        Based on <span className="font-bold">140 reviews</span>
      </p>
      <div className="mb-[1rem]">
        <GoogleLogo width="6.875rem" height="2.1875rem" />
      </div>

      <div className="relative w-full max-w-full flex items-center">
        {canScrollLeft() && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-[20] p-[0.5rem] bg-white rounded-full hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth pb-[1.5rem] px-8 max-w-full"
        >
          {reviewsData.map(review => (
            <ReviewCard
              key={review.id}
              review={review}
              expanded={expandedId === review.id}
              onToggle={() => toggleExpanded(review.id)}
            />
          ))}
        </div>

        {canScrollRight() && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-[20] p-[0.5rem] bg-white rounded-full shadow hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

export { Reviews }