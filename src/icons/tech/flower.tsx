import { IconText } from "@/utils/types"

const flower: IconText = {
  icon: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="16" cy="10" rx="4" ry="7" />
        <ellipse cx="16" cy="10" rx="4" ry="7" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="10" rx="4" ry="7" transform="rotate(120 16 16)" />
        <ellipse cx="16" cy="10" rx="4" ry="7" transform="rotate(180 16 16)" />
        <ellipse cx="16" cy="10" rx="4" ry="7" transform="rotate(240 16 16)" />
        <ellipse cx="16" cy="10" rx="4" ry="7" transform="rotate(300 16 16)" />
      </g>
      <circle
        cx="16"
        cy="16"
        r="4"
        fill="var(--accent)"
        stroke="var(--bg)"
        strokeWidth="2"
      />
    </svg>
  ),
  text: "Flower",
}
export default flower
