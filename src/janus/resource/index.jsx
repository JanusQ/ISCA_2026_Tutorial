import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Tag } from 'antd'
import { paperData } from '../home/data'
import { FileOutlined, FilePdfOutlined } from '@ant-design/icons'
import { downloadPdf, downloadPdfWithProgress } from '@/utils/utils'

export default function Resources() {
  const slides = [
    // {
    //   title: '0. Prolouge',
    //   pdf: 'slide/0_Prolouge',
    //   download_name: '0_Prolouge',
    // },
    {
      title: '1. Introduction',
      pdf: 'slide/1_Introduction',
      download_name: '1_Introduction',
    },
    {
      title: '2. QuCT',
      pdf: 'slide/2_QuCT',
      download_name: '2_QuCT',
    },
    {
      title: '3. MorphQPV',
      pdf: 'slide/3_MorphQPV',
      download_name: '3_MorphQPV',
    },
    {
      title: '4. QuFEM',
      pdf: 'slide/4_QuFEM',
      download_name: '4_QuFEM',
    },
    // {
    //   title: '5. HyQSAT',
    //   pdf: 'slide/5_HyQSAT',
    //   download_name: '5_HyQSAT',
    // },
    {
      title: '5. Choco-Q',
      pdf: 'slide/5_Choco-Q',
      download_name: '5_Choco-Q',
    },
  ]
  // const videos = [
  //   {
  //     title: 'video title',
  //     link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
  //   },
  //   {
  //     title: 'video title',
  //     link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
  //   },
  //   {
  //     title: 'video title',
  //     link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
  //   },
  //   {
  //     title: 'video title',
  //     link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
  //   },
  //   {
  //     title: 'video title',
  //     link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
  //   },
  // ]
  return (
    <div className={styles.root}>
      <Row justify="center">
        <Col span={18} offset={1}>
          <div className="resource_container">
            <div className="publication">
              <div className="title">Publication</div>
              {paperData.map((item, index) => (
                <div className="publication_item" key={index}>
                  <div className="paper_title">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                  <div className="paper_team">{item.team}</div>
                  <div className="link">
                    {/* <div className="link_boder">
                      <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                        <FileOutlined
                          className="paper_icon"
                          style={{ marginRight: 10 }}
                        />
                        Preview
                      </Link>
                    </div> */}
                    <div
                      className="link_boder"
                      onClick={() => downloadPdfWithProgress(item.pdf, item.download_name)}
                    >
                      <FilePdfOutlined style={{ marginRight: 10 }} />
                      Download PDF
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slide">
              <div className="title">Slide</div>
              <div className="slide_content">
                {slides.map((item, index) => (
                  <div className="slide_item" key={index}>
                    <div className="pdf_title">{item.title}</div>
                    <div className="link">
                      {/* <div className="link_boder">
                        <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                          <FileOutlined
                            className="paper_icon"
                            style={{ marginRight: 10 }}
                          />
                          Preview
                        </Link>
                      </div> */}
                      <div
                        className="link_boder"
                        onClick={() => {downloadPdfWithProgress(item.pdf, item.download_name)}
                        }
                      >
                        <FilePdfOutlined style={{ marginRight: 10 }} />
                        Download PDF
                      </div>
                    </div>
                    {/* <div className="operate">
                      <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                        <Tag color={'green'}>Preview</Tag>
                      </Link>
                      <Tag
                        color={'blue'}
                        style={{ cursor: 'pointer' }}
                        onClick={() => downloadPdf(item.pdf, item.title)}
                      >
                        Download
                      </Tag>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="video">
              <div className="video_title title">Video</div>
              <div className="video_content">
                {videos.map((item, index) => (
                  <div className="video_item" key={index}>
                    <iframe
                      src={item.link}
                      scrolling="no"
                      border="0"
                      frameborder="no"
                      framespacing="0"
                      allowFullScreen={true}
                    ></iframe>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}
