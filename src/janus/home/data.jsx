import wuweitian from "@/assets/image/janus_swiper/wuweitian.png"

const topicStyle = {
  fontWeight: 800,
  fontFamily: "PingFang_HEAVY",
}

const detailStyle = {
  marginTop: 6,
  fontSize: "0.95rem",
  lineHeight: "1.35rem",
}

const topic = (title, details = []) => (
  <div>
    <div style={topicStyle}>{title}</div>
    {details.length > 0 && (
      <div style={detailStyle}>
        {details.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    )}
  </div>
)

const time = (value) => <div style={topicStyle}>{value}</div>

const pendingResource = <span style={{ color: "#666" }}>To be posted</span>

export const columns = [
  {
    title: <div style={topicStyle}>Time (EDT)</div>,
    dataIndex: "Time",
    key: "Time",
  },
  {
    title: <div style={topicStyle}>Agenda</div>,
    dataIndex: "Agenda",
    key: "Agenda",
  },
  {
    title: <div style={topicStyle}>Presenter</div>,
    dataIndex: "Presenter",
    key: "Presenter",
  },
  {
    title: <div style={topicStyle}>Resource</div>,
    dataIndex: "Resource",
    key: "Resource",
  },
]

export const dataSource = [
  {
    key: "1",
    Time: time("8:00am - 8:30am"),
    Agenda: topic("1. Introduction of Janus Quantum Cloud Platform"),
    Presenter: "Chenning Tao",
    Resource: pendingResource,
  },
  {
    key: "2",
    Time: time("8:30am - 9:00am"),
    Agenda: topic("2. Qtenon Details", [
      "Introduction of hardware design",
      "Qtenon overview",
    ]),
    Presenter: "Chenning Tao",
    Resource: pendingResource,
  },
  {
    key: "3",
    Time: time("9:00am - 9:30am"),
    Agenda: topic("3. AdaptDQC Details", [
      "Introduction of DQC compilation",
      "AdaptDQC overview",
    ]),
    Presenter: "Debin Xiang",
    Resource: pendingResource,
  },
  {
    key: "4",
    Time: time("9:30am - 10:00am"),
    Agenda: topic("4. EXP-QRAM Details", [
      "Introduction of QRAM",
      "Realization of QRAM on superconducting chip",
      "Experimental analysis of noise propagation in QRAM",
    ]),
    Presenter: "Debin Xiang",
    Resource: pendingResource,
  },
  {
    key: "5",
    Time: time("10:00am - 10:30am"),
    Agenda: topic("Coffee Break"),
    Presenter: "",
    Resource: "",
  },
  {
    key: "6",
    Time: time("10:30am - 11:00am"),
    Agenda: topic("5. ARTERY Details", [
      "Introduction of quantum feedback",
      "ARTERY overview",
    ]),
    Presenter: "Wuwei Tian",
    Resource: pendingResource,
  },
  {
    key: "7",
    Time: time("11:00am - 11:30am"),
    Agenda: topic("6. Choco-Q Details", [
      "Introduction of constrained binary optimization problems",
      "Choco-Q overview",
      "Achieving speedup on real-world problems",
    ]),
    Presenter: "Chenning Tao",
    Resource: pendingResource,
  },
  {
    key: "8",
    Time: time("11:30am - 12:00pm"),
    Agenda: topic("7. Q & A"),
    Presenter: "All organizers",
    Resource: "",
  },
]

export const paperData = [
  {
    title: `[ISCA 2025] Qtenon: Towards Low-Latency Architecture Integration for Accelerating Hybrid Quantum-Classical Computing`,
    team: `Chenning Tao, Liqiang Lu, Size Zheng, Li-Wen Chang, Minghua Shen, Hanyu Zhang, Fangxin Liu, Kaiwen Zhou, and Jianwei Yin`,
    link: "https://doi.org/10.1145/3695053.3731087",
    pdf: "paper/ISCA_2025_Qtenon",
    download_name: "ISCA_2025_Qtenon",
  },
  {
    title: `[TC 2025] AdaptDQC: Adaptive Distributed Quantum Computing with Quantitative Performance Analysis`,
    team: `Debin Xiang, Liqiang Lu, Siwei Tan, Xinghui Jia, Zhe Zhou, Guangyu Sun, Mingshuai Chen, and Jianwei Yin`,
    link: "https://doi.org/10.1109/TC.2025.3586027",
    pdf: "paper/TC_2025_AdaptDQC",
    download_name: "TC_2025_AdaptDQC",
  },
  {
    title: `[Nature Physics] EXP-QRAM: Experimental realization of the bucket-brigade quantum random access memory`,
    team: `Janus Quantum team`,
  },
  {
    title: `[ISCA 2025] ARTERY: Fast Quantum Feedback using Branch Prediction`,
    team: `Wuwei Tian, Liqiang Lu, Siwei Tan, Yun Liang, Tingting Li, Kaiwen Zhou, Xinghui Jia, and Jianwei Yin`,
    link: "https://doi.org/10.1145/3695053.3731086",
    pdf: "paper/ISCA_2025_ARTERY",
    download_name: "ISCA_2025_ARTERY",
  },
  {
    title: `[HPCA 2025] Choco-Q: Commute Hamiltonian-based QAOA for Constrained Binary Optimization`,
    team: `Debin Xiang, Qifan Jiang, Liqiang Lu, Siwei Tan, and Jianwei Yin`,
    link: "https://hpca-conf.org/2025/main-program",
    pdf: "paper/HPCA_2025_Choco-Q",
    download_name: "HPCA_2025_Choco-Q",
  },
]

export const speakerData = [
  {
    name: "Chenning Tao",
    topic: "Topics 1, 2, and 6",
    initials: "CT",
    introduce:
      "Chenning Tao is a third-year PhD student at Zhejiang University. His research focuses on quantum-classical architecture integration and low-latency support for hybrid quantum-classical workloads.",
  },
  {
    name: "Debin Xiang",
    topic: "Topics 3 and 4",
    initials: "DX",
    introduce:
      "Debin Xiang is a second-year PhD student at Zhejiang University. His research interests include distributed quantum computing, quantum applications, and quantum system optimization.",
  },
  {
    name: "Wuwei Tian",
    topic: "Topic 5",
    photo: wuweitian,
    introduce:
      "Wuwei Tian is an assistant professor at Zhejiang University. His research interests include quantum control systems and software-hardware codesign. He has published around 10 papers in venues including ISCA, MICRO, and ICCAD.",
  },
]

export const participantData = [
  "Siwei Tan",
  "Xinghui Jia",
  "Hanyu Zhang",
  "Kaiwen Zhou",
  "Tingting Li",
  "Yifan Guo",
  "Congliang Lang",
]
