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
          className="mt-[0.25rem] text-black opacity-60 hover:underline text-[0.75rem] font-medium text-left w-full"
        >
          Read more
        </button>
      )}

      {expanded && (
        <button
          onClick={onToggle}
          className="mt-[0.25rem] text-black opacity-60 hover:underline text-[0.75rem] font-medium text-left w-full"
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
      <h2 className="text-[1.875rem] font-bold">EXCELLENT</h2>
      <div className="flex mb-[0.25rem]">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color="#fbbf24" width="2rem" height="2rem" />
        ))}
      </div>
      <p className="text-[0.875rem] text-gray-800 mb-[0.5rem]">
        Based on <span className="font-bold">22 reviews</span>
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