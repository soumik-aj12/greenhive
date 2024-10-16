"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BackButton = ({href, label}:{href:string, label: string}) => {
  return (
    <Button asChild variant="default">
        <Link aria-label={label} href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton