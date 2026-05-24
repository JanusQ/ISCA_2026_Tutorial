import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IpynbRenderer } from 'react-ipynb-renderer'
import 'react-ipynb-renderer/dist/styles/default.css'
import styles from './index.module.scss'
export default function IpynbPreview() {
  const {
    state: { name },
  } = useLocation()
  const [ipy, setipy] = useState('')
  const loadipynb = async (name) => {
    const response = await fetch(`/ISCA_2026_Tutorial/demo/ipynb/${name}.ipynb`)
    const ipynbBlob = await response.blob()
    const reader = new FileReader()
    reader.onload = function () {
      try {
        // 将读取到的文本内容解析为 JSON

        if (reader.result) {
          const ipynbJSON = JSON.parse(reader.result)
          console.log(ipynbJSON)
          // 打印 JSON 内容

          setipy(ipynbJSON)
        } else {
          const nodata = {
            cells: [
              {
                cell_type: 'markdown',
                metadata: {},
                source: ['# 暂无内容'],
              },
            ],
          }
          setipy(nodata)
        }

        // console.log(reader.result, 88)
      } catch (error) {
        console.error('Failed to parse JSON:', error)
      }
    }
    reader.readAsText(ipynbBlob)
    // setipy(response)
  }

  useEffect(() => {
    if (name) {
      loadipynb(name)
    } else {
      loadipynb('1-1.install_janusq')
    }
  }, [])
  useEffect(() => {
    // Reset scroll position to top when component unmounts
    window.scrollTo({ top: 0, behavior: 'auto' })
    return () => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])
  return (
    <div className={styles.root}>
      {/* <div className="title">888</div> */}
      <IpynbRenderer
        syntaxTheme={'darcula'}
        onLoad={() => {
          console.log('loaded')
        }}
        ipynb={ipy}
      />
    </div>
  )
}
