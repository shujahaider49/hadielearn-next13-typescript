"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import Mission from './mission'
import Vision from './vision'


const MissionVision = () => {
  
  return (
    <>
    <div className="md:flex justify-center">
      <Tabs defaultValue="mission" className="max-w-fit justify-center">
        <TabsList className='flex justify-end bg-transparent md:-mb-3 gap-x-2'>
            <TabsTrigger value="mission" className='rounded-t-lg text-white bg-slate-600 py-3 px-7 text-md ' >
              Mission
            </TabsTrigger>
            <TabsTrigger value="vision" className='rounded-t-lg text-white bg-slate-600 py-3 px-7 text-md '>
              Vision
            </TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Mission />
        </TabsContent>
        <TabsContent value="vision">
          <Vision />
        </TabsContent>
      </Tabs>
      </div>
    </>
  )
}

export default MissionVision
