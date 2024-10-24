'use client'

import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { CustomerReviews } from '@/Data/about'


export default function TestimonialCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {CustomerReviews.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
            <Card className="bg-[#e0f2f1] border-none rounded-xl overflow-hidden h-full">
              <CardContent className="p-6">
                <p className="text-sm mb-4 line-clamp-4">{testimonial.review}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      {/* <AvatarImage src={testimonial.avatar} alt={testimonial.name} /> */}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground">{testimonial.work}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{testimonial.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious variant="link" className='h-14 w-14 rounded-full absolute opacity-20 hover:opacity-100'/>
        <CarouselNext variant="link" className='h-14 w-14 rounded-full absolute opacity-20 hover:opacity-100'/>
      </div>
    </Carousel>
  )
}