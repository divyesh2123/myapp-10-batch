"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function SettingPage() {
  const router = useRouter()
  return (
    <button type="button"
     onClick={() => router.push('/about')}>
    Dashboard
  </button>
  )
}
