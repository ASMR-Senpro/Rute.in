import React from "react"
import SocialBtn from "./SocialBtn"

export default function SocialBtnBox() {
  return (
    <div>
      <div className="flex gap-3 p-2">
        <SocialBtn href="#" icon="mdi:twitter" />
        <SocialBtn href="#" icon="ic:baseline-facebook" />
        <SocialBtn href="#" icon="mdi:instagram" />
      </div>
    </div>
  )
}
