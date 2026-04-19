import { IconText } from "@/utils/types"

const flower: IconText = {
  icon: (
    <svg viewBox="0 0 24 24">
      <g fill="#F06292">
        <ellipse cx="12" cy="5" rx="2.6" ry="4.2" />
        <ellipse cx="12" cy="19" rx="2.6" ry="4.2" />
        <ellipse cx="5" cy="12" rx="4.2" ry="2.6" />
        <ellipse cx="19" cy="12" rx="4.2" ry="2.6" />
        <ellipse
          cx="7.05"
          cy="7.05"
          rx="2.6"
          ry="4.2"
          transform="rotate(-45 7.05 7.05)"
        />
        <ellipse
          cx="16.95"
          cy="16.95"
          rx="2.6"
          ry="4.2"
          transform="rotate(-45 16.95 16.95)"
        />
        <ellipse
          cx="7.05"
          cy="16.95"
          rx="2.6"
          ry="4.2"
          transform="rotate(45 7.05 16.95)"
        />
        <ellipse
          cx="16.95"
          cy="7.05"
          rx="2.6"
          ry="4.2"
          transform="rotate(45 16.95 7.05)"
        />
      </g>
      <circle cx="12" cy="12" r="2.8" fill="#FFC107" />
    </svg>
  ),
  text: "Flower",
}

export default flower
