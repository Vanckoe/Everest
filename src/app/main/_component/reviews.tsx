'use client'
import React from 'react'
import GoogleLogo from '@/assets/google'
import StarIcon from '@/assets/Star'

const reviewsData = [
  {
    id: 1,
    name: 'Jane Doe',
    time: '5 months ago',
    text: 'Super quick and professional service. Will definitely use again!',
  },
  {
    id: 2,
    name: 'John Smith',
    time: '3 months ago',
    text: 'Reliable and friendly technician. Fixed my washer same day.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    time: '1 month ago',
    text: 'Outstanding support and communication. Highly recommended!',
  },
]

const ReviewCard = ({ review }: { review: typeof reviewsData[0] }) => {
  return (
    <div className="w-[18.3125rem] h-[14.4375rem] bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between mr-6 flex-shrink-0">
      {/* Верхняя часть */}
      <div className="flex justify-between items-start">
        {/* Логотип Google вместо аватара и имя + время */}
        <div className="flex gap-3 items-center">
          <GoogleLogo width="2.5rem" height="2.5rem" />
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-gray-900">{review.name}</p>
            <p className="text-xs text-gray-500">{review.time}</p>
          </div>
        </div>

        {/* Google логотип справа сверху */}
        <GoogleLogo width="4.5rem" height="1.25rem" />
      </div>

      {/* Звёзды и галочка (галочка заменена на GoogleLogo) */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color="#fbbf24" width="1rem" height="1rem" />
          ))}
        </div>
        <GoogleLogo width="1.25rem" height="1.25rem" />
      </div>

      {/* Текст отзыва */}
      <p className="text-sm text-gray-700 mt-2">
        {review.text}
      </p>
    </div>
  )
}

const reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-50">
      <h2 className="text-xl font-bold mb-2">EXCELLENT</h2>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color="#fbbf24" width="1.875rem" height="1.875rem" />
        ))}
      </div>
      <p className="text-sm text-gray-800 mb-6">
        Based on <span className="font-bold">22 reviews</span>
      </p>
      <div className="mb-12">
        <GoogleLogo width="6.875rem" height="2.1875rem" />
      </div>

      {/* Горизонтальный скролл с отзывами */}
      <div className="flex overflow-x-auto pb-6 px-4 max-w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default reviews
