import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import Socials from './Socials'
import BackButton from './BackButton'
type CardProps = {
  children: React.ReactNode
  cardTitle: string
  backButtonLabel: string
  backButtonHref: string 
  showSocials: boolean
}
const AuthCard = ({children, cardTitle,backButtonLabel, backButtonHref, showSocials}:CardProps) => {
  return (
    <Card className='mx-auto'>
      <CardHeader>{cardTitle}</CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials/>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel}/>
      </CardFooter>
    </Card>
  )
}

export default AuthCard