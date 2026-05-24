import styles from './index.module.scss'
import { Row, Col } from 'antd'
import { paperData } from '../home/data'
import { FilePdfOutlined } from '@ant-design/icons'
import { downloadPdfWithProgress } from '@/utils/utils'

export default function Resources() {
  const slides = [
    {
      title: '1. Introduction of Janus Quantum Cloud Platform',
    },
    {
      title: '2. Qtenon Details',
    },
    {
      title: '3. ARTERY Details',
    },
    {
      title: '4. AdaptDQC Details',
    },
    {
      title: '5. Choco-Q Details',
    },
    {
      title: '6. EXP-QRAM Details',
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
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
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
                    {item.pdf ? (
                      <div
                        className="link_boder"
                        onClick={() => downloadPdfWithProgress(item.pdf, item.download_name)}
                      >
                        <FilePdfOutlined style={{ marginRight: 10 }} />
                        Download PDF
                      </div>
                    ) : (
                      <div className="link_text">Reference forthcoming</div>
                    )}
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
                      {item.pdf ? (
                        <div
                          className="link_boder"
                          onClick={() => {downloadPdfWithProgress(item.pdf, item.download_name)}
                          }
                        >
                          <FilePdfOutlined style={{ marginRight: 10 }} />
                          Download PDF
                        </div>
                      ) : (
                        <div className="link_text">To be posted</div>
                      )}
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
