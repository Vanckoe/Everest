'use client'

import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import RightIcon from '@/assets/Right'

interface Slide {
  title: string
  heading: string
  subtitle: string
  content: string
}

interface OffersMobileProps {
  initialSlideIndex?: number
  slides?: Slide[]
}

const defaultSlides: Slide[] = [
  {
    title: "//   06 - BEST OFFERS",
    heading: "$30off",
    subtitle: "New customers discount",
    content: "Book a repair service day online and get $30 welcome discount for your first service call",
  },
  {
    title: "//   06 - BEST OFFERS",
    heading: "$15off",
    subtitle: "Second slide subtitle",
    content: "Second offer content goes here...",
  },
  {
    title: "//   06 - BEST OFFERS",
    heading: "$30off",
    subtitle: "Third slide subtitle",
    content: "Third offer content goes here...",
  },
]

const OffersMobile: React.FC<OffersMobileProps> = ({
  initialSlideIndex = 0,
  slides = defaultSlides,
}) => {
  const totalSlides = slides.length
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex)
  const [animate, setAnimate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSlideIndex((prev) => (prev + 1) % totalSlides)
      setAnimate(true)
    },
    onSwipedRight: () => {
      setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
      setAnimate(true)
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  } as any)

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 350)
      return () => clearTimeout(timer)
    }
  }, [animate])

  const slide = slides[slideIndex]

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section
        {...handlers}
        className="bg-[#d8e7ef] mt-18 rounded-[40px] mx-auto flex flex-col select-none"
        style={{ width: 335, height: 688 }}
      >
        <div
          key={slideIndex}
          className={`flex flex-col w-full select-none transition-transform duration-700 ease-in-out ${
            animate ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
          }`}
          style={{ transformOrigin: 'bottom', willChange: 'transform, opacity' }}
        >
          {/* Верхний текст */}
          <div className="mt-20 mb-12 w-full flex justify-start px-10">
            <span className="text-[#001F3F] text-xl font-semibold tracking-widest uppercase">
              {slide.title}
            </span>
          </div>

          {/* Номер слайда */}
          <div className="mt-4 mb-15 w-full flex flex-col items-start px-10">
            <div className="flex items-baseline space-x-1">
              <span className="text-5xl font-bold text-[#001F3F] leading-none">{slideIndex + 1}</span>
              <span className="text-2xl text-[#001F3F] relative -top-5">/{totalSlides}</span>
            </div>
            <div className="mt-1 w-[30px] h-[2px] bg-second rounded" />
          </div>

          {/* Заголовок */}
          <h2 className="text-6xl font-bold text-[#001F3F] mb-10 px-10">
            {slide.heading}
          </h2>

          {/* Подзаголовок и описание */}
          <div className="text-3xl text-[#001F3F] leading-snug mb-8 w-full px-10">
            <p className="font-bold mb-1">{slide.subtitle}</p>
            <p>{slide.content}</p>
          </div>
          <div className="w-full flex justify-start mb-8">
            <button
              onClick={openModal}
              className="group flex items-center select-none"
            >
              <div
                className="flex size-14 min-w-14 bg-second rounded-full items-center justify-center
                opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="1.5rem" height="1.5rem" />
              </div>

              <span
                className="bg-second text-white text-3xl rounded-full flex items-center justify-center"
                style={{ width: '16rem', height: '6rem' }}
              >
                Use Coupon
              </span>

              <div
                className="flex size-25 min-w-25 bg-second rounded-full items-center justify-center
                opacity-100 translate-x-0 group-hover:-mr-12 group-hover:opacity-0 group-hover:-translate-x-4
                transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="2rem" height="3rem" />
              </div>
            </button>
          </div>
        </div>

        {/* Фото внизу */}
        <div className="mt-auto mb-8 px-6">
          <img
            src={`/img/OffersBlock/content-${slideIndex + 1}.jpg`}
            alt={`Slide ${slideIndex + 1}`}
            className="rounded-[30px]"
            style={{ width: 295, height: 196, objectFit: 'cover' }}
            draggable={false}
          />
        </div>
      </section>

        {isModalOpen && (
        <div
            className="fixed inset-0 z-50 w-screen h-screen bg-white overflow-y-auto"
            onClick={closeModal}
        >
            <div
            className="relative w-full h-full flex flex-col px-6 py-10"
            onClick={(e) => e.stopPropagation()}
            >
            {/* Кнопка закрытия */}
            <button
                className="absolute top-6 right-6 text-4xl text-gray-500 hover:text-gray-800"
                onClick={closeModal}
                aria-label="Close modal"
            >
                ✕
            </button>

            {/* Заголовок */}
            <h2 className="text-5xl font-bold text-[#001f3f] text-center mb-8 mt-6">
                Use a coupon
            </h2>

            {/* Форма */}
            <div className="flex flex-col gap-5 text-lg px-10">
                <select className="w-full h-20 border border-gray-300 rounded-xl px-5 text-2xl">
                <option>Select service</option>
                <option>Repair</option>
                <option>Installation</option>
                <option>Maintenance</option>
                <option>Commercial</option>
                </select>

                <select className="w-full h-20 border border-gray-300 rounded-xl px-5 text-2xl">
                <option>Select appliance</option>
                <option>Refrigerator</option>
                <option>Freezer</option>
                <option>Oven</option>
                <option>Cooktop</option>
                <option>Microwave Oven</option>
                <option>Dishwasher</option>
                <option>Washing Machine</option>
                <option>Dryer</option>
                <option>Wine Storage</option>
                </select>

                <input
                type="text"
                placeholder="Your Name"
                className="w-full h-20 border border-gray-300 rounded-xl px-5 text-2xl"
                />
                <input
                type="tel"
                placeholder="Phone"
                className="w-full h-20 border border-gray-300 rounded-xl px-5 text-2xl"
                />
                <input
                type="email"
                placeholder="Email"
                className="w-full h-20 border border-gray-300 rounded-xl px-5 text-2xl"
                />
                <textarea
                placeholder="Comments (questions or additional details)"
                className="w-full min-h-[120px] border border-gray-300 rounded-xl px-5 py-4 resize-y text-2xl"
                />
            </div>

            {/* Подвал */}
            <p className="text-xl text-[#666] mt-8 mb-6 text-center px-4">
                By continuing, you are agreeing to{' '}
                <a href="#" className="text-[#505050] underline">
                Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#505050] underline">
                Privacy Policy
                </a>
            </p>

            {/* Кнопка отправки */}
            <div className="flex justify-center mt-auto">
                <button className="w-full max-w-md h-16 bg-accent text-white rounded-full text-xl font-semibold hover:bg-[#001a35] transition">
                Send
                </button>
            </div>
            </div>
        </div>
        )}
    </>
  )
}

export default OffersMobile