'use client'

import React, { useState, useRef, useEffect } from 'react'
import RightIcon from '@/assets/Right'
import OffersMobile from './OffersMobile'

const slides = [
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

export default function BestOffersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animatingSlide, setAnimatingSlide] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)
  const [leftVisible] = useState(true) // ← показываем сразу
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dragStartX = useRef<number | null>(null)
  const dragEndX = useRef<number | null>(null)

  const totalSlides = slides.length

  const goToSlide = (newIndex: number, direction: 'left' | 'right') => {
    if (animatingSlide || newIndex === currentSlide) return
    setSlideDirection(direction)
    setAnimatingSlide(true)
    setTimeout(() => {
      setCurrentSlide(newIndex)
      setAnimatingSlide(false)
    }, 400)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides, 'left')
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides, 'right')
  }

  const onDragStart = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
  }

  const onDragEnd = (e: React.MouseEvent) => {
    dragEndX.current = e.clientX
    handleSwipe()
  }

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    dragEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    if (dragStartX.current !== null && dragEndX.current !== null) {
      const diff = dragStartX.current - dragEndX.current
      const threshold = 50
      if (diff > threshold) nextSlide()
      else if (diff < -threshold) prevSlide()
    }
    dragStartX.current = null
    dragEndX.current = null
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* ПК версия */}
      <section
        className="hidden md:flex m-[70px_20px] bg-[#d8e7ef] rounded-[40px] w-[1395px] h-[665px] mx-auto overflow-hidden select-none relative"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ cursor: 'grab' }}
      >
        <div
          key={currentSlide}
          className={`w-full h-full flex items-stretch transition-all duration-500 ${
            animatingSlide
              ? slideDirection === 'left'
                ? 'slide-anim-left'
                : 'slide-anim-right'
              : ''
          }`}
        >
          {/* Левая половина */}
          <div
            className={`w-1/2 flex flex-col justify-between pl-[160px] pt-[100px] pr-[50px] pb-[115px] transition-opacity duration-500 ${
              leftVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            onClick={nextSlide}
          >
            <span className="text-[#001F3F] text-xs font-semibold tracking-widest uppercase">
              {slides[currentSlide].title}
            </span>

            <div className="flex flex-col items-start mt-3 mb-8">
              <div className="flex items-end space-x-1">
                <span className="text-3xl font-bold text-[#001f3f] leading-none relative -top-1">
                  {currentSlide + 1}
                </span>
                <span className="text-lg text-[#001f3f] opacity-70 relative -top-3">
                  /{totalSlides}
                </span>
              </div>
              <div className="mt-2 w-[30px] h-[2px] bg-second"></div>
            </div>

            <h2 className="text-5xl font-bold text-[#001F3F] mt-6 mb-4">
              {slides[currentSlide].heading}
            </h2>

            <div className="text-lg text-[#001f3f] max-w-md leading-relaxed mb-10 w-[315px]">
              <p className="font-bold">{slides[currentSlide].subtitle}</p>
              <p>{slides[currentSlide].content}</p>
            </div>

            <button
              className="group md:-ml-12 flex w-fit items-center"
              onClick={(e) => {
                e.stopPropagation()
                openModal()
              }}
            >
              <div
                className="hidden md:flex size-14 min-w-14 bg-second rounded-full items-center justify-center
                opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="1.5rem" height="1.5rem" />
              </div>
              <span className="bg-second text-white px-10 md:px-8 py-5 md:py-3 rounded-full text-3xl md:text-lg">
                Use Coupon
              </span>
              <div
                className="flex size-20 min-w-20 md:size-14 md:min-w-14 bg-second rounded-full items-center justify-center
                opacity-100 translate-x-0 group-hover:-mr-12 group-hover:opacity-0 group-hover:-translate-x-4
                transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="1.5rem" height="1.5rem" />
              </div>
            </button>
          </div>

          {/* Правая половина */}
          <div className="w-1/2 flex items-center justify-center p-5">
            <img
              src={`/img/OffersBlock/content-${currentSlide + 1}.jpg`}
              alt={`Slide ${currentSlide + 1}`}
              className="w-[647px] h-[625px] rounded-[30px] object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Модалка */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[550px] h-[780px] rounded-[40px] p-8 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="text-center text-3xl font-bold text-[#001f3f] mb-8">Use a coupon</h2>

            <div className="flex flex-col items-center">
              <select className="w-[440px] h-[62px] border-[1px] border-[#ddd] rounded-[10px] px-4 mb-4">
                <option>Select service</option>
                <option>Repair</option>
                <option>Installation</option>
                <option>Maintenance</option>
                <option>Commercial</option>
              </select>

              <select className="w-[440px] h-[62px] border-[1px] border-[#ddd] rounded-[10px] px-4 mb-4">
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
                className="w-[440px] h-[62px] border-[1px] border-[#ddd] rounded-[10px] px-4 mb-4"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-[440px] h-[62px] border-[1px] border-[#ddd] rounded-[10px] px-4 mb-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-[440px] h-[62px] border-[1px] border-[#ddd] rounded-[10px] px-4 mb-4"
              />

              <textarea
                placeholder="Comments (questions or additional details)"
                className="w-[440px] h-[120px] border-[1px] border-[#ddd] rounded-[10px] px-4 py-3 mb-4 resize-y"
              />
            </div>

            <p className="text-base text-left text-[#999999] mb-6 px-6">
              By continuing, you are agreeing to{' '}
              <a href="#" className="text-[#505050] underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#505050] underline">
                Privacy Policy
              </a>
            </p>

            <div className="flex justify-center">
              <button
                className="w-[120px] h-[60px] bg-accent text-white rounded-[30px] text-lg hover:bg-[#001a35] transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <OffersMobile />
      </div>
    </>
  )
}