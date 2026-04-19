import styles from "./concept-chip.module.scss"

type Color = "purple" | "navy" | "pink" | "blue" | "green" | "orange"

type Props = {
  label: string
  color?: Color
}

const ConceptChip = ({ label, color = "purple" }: Props) => {
  return <span className={`${styles.chip} ${styles[color]}`}>{label}</span>
}

type ChipListProps = {
  labels: string[]
  color?: Color
}

export const ConceptChipList = ({ labels, color = "purple" }: ChipListProps) => {
  return (
    <ul className={styles.list}>
      {labels.map((label) => (
        <li key={label}>
          <ConceptChip label={label} color={color} />
        </li>
      ))}
    </ul>
  )
}

export default ConceptChip
