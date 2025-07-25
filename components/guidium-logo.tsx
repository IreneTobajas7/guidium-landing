"use client"

import Image from "next/image"

export function GuidiumLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src="/guidium-logo.png" alt="GUIDIUM" width={90} height={90} className="w-[90px] h-[90px]" />
    </div>
  )
}
