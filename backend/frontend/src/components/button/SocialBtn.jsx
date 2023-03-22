import React from "react"
import { Icon } from "@iconify/react"

export default function SocialBtn({ icon, href }) {
  return (
    <div className="h-9 w-9 bg-white shadow-2xl rounded-full flex justify-center items-center">
      <a
        href={href}
        type="button"
        className="h-full w-full rounded-full flex justify-center items-center"
      >
        <Icon
          icon={icon}
          className="w-3/4 h-3/4 text-cyan-700 text-h-sm font-bold"
        />
      </a>
    </div>
  )
}

SocialBtn.defaultProps = {
  icon: "ic:baseline-facebook",
  href: "#",
}
