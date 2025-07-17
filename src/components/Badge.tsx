import { BADGES } from '@/consts/BADGEs'
import { css } from '@emotion/react'

export interface IBadgeProps {
  name: string
}

export default function Badge({ name }: IBadgeProps) {
  if (!BADGES[name]) return null

  return (
    <div
      css={[
        badgeStyle,
        {
          backgroundColor: BADGES[name].backgroundColor,
          color: BADGES[name].color,
          border: `2px solid ${BADGES[name].border}`,
        },
      ]}
    >
      <div>{BADGES[name].icon}</div>
      <span>{BADGES[name].name}</span>
    </div>
  )
}

const badgeStyle = css({
  height: '32px',
  padding: '2px 8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '32px',
})
