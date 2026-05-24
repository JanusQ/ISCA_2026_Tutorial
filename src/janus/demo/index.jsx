import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Tree, Affix } from 'antd'
import { IpynbRenderer } from 'react-ipynb-renderer'
import 'react-ipynb-renderer/dist/styles/default.css'
import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from '@ant-design/icons'
import JanusHeader from '../layout/components/header'
import NProgress from '@/components/Nprogress'
export default function Demonstrations() {
  const navigate = useNavigate()
  let { fileName } = useParams()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(fileName)
  const treeData = [
    {
      title: 'Getting Started',
      key: '1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Install JanusQ',
          key: '1_1_install_janusq',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Submit to cloud',
          key: '1_2_submit_to_cloud',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'QuCT',
      key: '2',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Vectorization model of QuCT',
          key: '2_1_vectorization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of QuCT on quantum simulators',
          key: '2_2_fidelity_prediction_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity prediction of QuCT on real quantum devices',
          key: '2_3_fidelity_prediction_realqc',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Fidelity optimization based on QuCT',
          key: '2_4_fidelity_optimization',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Unitary decomposition based on QuCT',
          key: '2_5_unitary_decomposition',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Extending framework for bug identification',
          key: '2_6_extend_framework_bug_identification',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'MorphQPV',
      key: '3',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Verify Quantum Program',
          key: '3_1_verify_quantum_program',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    {
      title: 'QuFEM',
      key: '4',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Readout calibration of QuFEM on quantum simulators',
          key: '4_1_readout_calibration_simulator',
          icon: <CarryOutOutlined />,
        },
        {
          title: 'Readout calibration of QuFEM on real quantum devices',
          key: '4_2_readout_calibration_realqc',
          icon: <CarryOutOutlined />,
        },
      ],
    },
    // {
    //   title: 'HyQSAT',
    //   key: '5',
    //   icon: <CarryOutOutlined />,
    //   children: [
    //     {
    //       title: 'Hybrid quantum-classical SAT solver',
    //       key: '5_1_solve_sat_domain_problem',
    //       icon: <CarryOutOutlined />,
    //     },
    //   ],
    // },
    {
      title: 'Choco-Q',
      key: '5',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'Constained binary optimization with QAOA',
          key: '5_1_constrained_binary_optimization',
          icon: <CarryOutOutlined />,
        },
      ],
    },
  ]
  const [showIpynb, setShowIpynb] = useState('')
  const loadipynb = async (name) => {
    NProgress.start()
    const response = await fetch(`/ISCA_2026_Tutorial/demo/ipynb/${name}.ipynb`)
    const ipynbBlob = await response.blob()
    const reader = new FileReader()
    reader.onload = function () {
      try {
        // resolve the read text to JSON
        // console.log(99, reader.result, 88)
        if (reader.result) {
          const ipynbJSON = JSON.parse(reader.result)
          // print JSON content
          // console.log(ipynbJSON)
          setShowIpynb(ipynbJSON)
          NProgress.done()
        } else {
          const nodata = {
            cells: [
              {
                cell_type: 'markdown',
                metadata: {},
                source: ['TBD'],
              },
            ],
          }
          setShowIpynb(nodata)
          NProgress.done()
        }
        // console.log(reader.result, 88)
      } catch (error) {
        console.error('Failed to parse JSON:', error)
      }
    }
    reader.readAsText(ipynbBlob)
    // setipy(response)
  }
  const onSelect = (selectedKeys, info) => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    // console.log('selected', selectedKeys, info)
    navigate(`/demo/${selectedKeys[0]}`)
    setDefaultSelectedKeys()
    // loadipynb(selectedKeys[0])
  }
  useEffect(() => {
    if (fileName) {
      loadipynb(fileName)
    } else {
      navigate('/demo/1_1_install_janusq')
    }
  }, [fileName])
  return (
    <div className={styles.root}>
      <JanusHeader />
      <div className="placeholder" style={{ height: 60 }}></div>
      <div className="demonstrations">
        <div className="left_menu">
          <Affix offsetTop={80}>
            <Tree
              defaultSelectedKeys={[defaultSelectedKeys]}
              showLine={true}
              onSelect={onSelect}
              treeData={treeData}
              defaultExpandAll={true}
            />
          </Affix>
        </div>
        {showIpynb ? (
          <div className="IpynbRenderer_content">
            <IpynbRenderer
              syntaxTheme={'darcula'}
              onLoad={() => {
                console.log('loaded')
              }}
              ipynb={showIpynb}
            />
          </div>
        ) : (
          ""        
        )}
      </div>
    </div>
  )
}
