import type { ReactNode } from 'react'
import { Button } from '../ui/button'

export const AlternativeAuthButton = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <>
      <Button variant="outline" className="h-11 border-gray-200 hover:bg-gray-50 cursor-pointer">
        {icon}
        {text}
      </Button>
    </>
  )
}
