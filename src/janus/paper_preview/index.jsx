import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PaperPreview({}) {
  const {
    state: { pdf },
  } = useLocation()
  return (
    <embed
      style={{ height: 1000 }}
      src={`/ISCA_2026_Tutorial/paper/${pdf}.pdf`}
      type="application/pdf"
      width="100%"
      height="100%"
    />
  )
}
