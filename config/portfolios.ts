import { url } from "inspector";

export type Portfolio = {
  title: string;
  skills: string[];
  descriptions: string[];
  image?: string;
  url?: string;
};

export const Portfolios = [
  {
    title: "VoIP 인터넷 전화 클라이언트",
    skills: ["C++"],
    descriptions: [
      "H.323 / SIP 지원 Windows용 인터넷 전화 소프트웨어",
      "음성통화, 화상통화, 텍스트 채팅, 화이트보드, 에스코티드 브라우저, 화면 공유 기능",
    ],
    image: "",
  },
  {
    title: "SBC 서버",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 서버",
      "NAT Traversal, TURN, RTP(UDP) 중계 기능",
    ],
    image: "",
  },
  {
    title: "SS7 ISUP 서버",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 서버",
      "SS7 프로토콜 중 ISUP Q.931 <--> 변환 중계 기능",
    ],
    image: "",
  },
  {
    title: "PSTN Trunk Gateway",
    skills: ["C++"],
    descriptions: [
      "Linux / Unix(Solaris) 용 장비",
      "PSTN/IP변환 중계 기능, RTP 처리 기능",
    ],
    image: "",
  },
  {
    title: "네이트온폰",
    skills: ["C++"],
    descriptions: [
      "네이트온 메신저의 부가서비스로 실행되는 인터넷 전화 소프트웨어.클라이언트 개발",
    ],
    image: "",
    url: "https://blogstation.tistory.com/14",
  },

  {
    title: "네이트온 음성, 화상 대화",
    skills: ["C++"],
    descriptions: ["네이트온 메신저의 부가서비스로 실행되는 영상회의 서비스"],
    image: "",
  },
  {
    title: "네이트온 통신중계 서비스",
    skills: ["C++"],
    descriptions: [
      "네이트온 메신저의 부가서비스로 실행되는 서비스로 영상통화 및 채팅으로 언어, 청각장애인들과 상대방 사이에서 통신중계사가 의사 소통할 수 있도록 도와주는 서비스.",
    ],
    image: "",
    url: "https://www.inews24.com/view/449083",
  },
  {
    title: "토크온",
    skills: ["C++"],
    descriptions: [
      "최대 16명까지 음성회의를 할 수 있는 서비스. 네이트온 메신저의 위상이 떨어져서 현재는 상대적으로 사용자 수가 네이트온 메신저의 절반에 육박. 2013년쯤 동시 접속자가 10만명 정도",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
  {
    title: "기업용 메신저 네이트온비즈",
    skills: ["C++", "C#"],
    descriptions: [
      "기업용 메신저. SK그룹 계열사에 쓰기 위한 용도로 개발이 되었고 SK 계열사에서 아직도 사용 중.",
      "서버 5종류를 개발했었고 클라이언트 일부 개발.",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
  {
    title: "㈜네오위즈게임즈 “피망” 메신저",
    skills: ["C++"],
    descriptions: [
      "㈜네오위즈게임즈에서 서비스했던 게임포털 “피망”의 게임 유저용 메신저",
      "게임을 하면서 동시에 최대 64명까지 음성 채팅 기능 포함",
    ],
    image: "",
    url: "http://talkon.nate.com/",
  },
  {
    title: "Lib.Proxy - 외부 접속용 웹 프록시 서버",
    skills: ["C++"],
    descriptions: [
      "각 대학이나 정부 기관은 내부에서 해외DB나 저널서비스에 접속하여 Full-Text를 열람하거나 다운로드 받을 수 있는 서비스를 쓰고 있는데 문제는 구성원들이 외부에서 쓸 수 없다는 것인데, 외부에서도 내부에서 쓰고 있는 것 같이 해주는 서버.",
      "일반적으로 웹 프록시 서버라 함은 웹브라우저의 설정을 변경해서 접속을 하는 Forward 방식인데 이 경우는 이용자가 직접 웹브라우저 설정을 직접 변경해야 하는 부담이 있는 관계로 각 기관에서는 설정 변경 없이 쓸 수 있는 Reverse 방식의 프록시를 필요로 해서 나온 서비스 서버",
      "국내에 단 2개 업체만 이 서비스를 하고 있으며 당사 서버는 ㈜다몬미디어에서 판매 및 유지보수를 하고 있는데 시장 점유율 70% 정도.",
    ],
    image: "",
    url: "http://www.damonmedia.co.kr/bus_vn.htm",
  },
  {
    title: "KT 100번 시스템 - 고객센터 통신장비 ",
    skills: ["C++"],
    descriptions: [
      "KT 고객센터인 100번으로 전화를 걸면 신호가 여러 장비를 거쳐서 고객센터와 전화연결이 됨. 그 중간에 위치한 장비이며 현재 고객센터로 걸려오는 50%의 전화통화가 이 장비를 거쳐가고 있음. SS7 M3UA 프로토콜을 받아서 SIP 프로토콜로 변환해서 전달해 주는 역할을 하는 장비.",
      "Linux용 서버, M3UA 프로토콜 구현",
    ],
    image: "",
  },
  {
    title: "아크로메이트 HomeServer",
    skills: ["C++"],
    descriptions: [
      "Embeded Linux 서버",
      "가정용 홈 네트워킹 목적으로 개발. 인터넷 공유, 동영상 스트리밍, 인터넷 전화, 파일 서버등의 기능",
      "NAT(공유기), DNLA, SoftSwitch(인터넷전화서버), File Server 기능",
    ],
    image: "",
  },
  {
    title: "TR Gateway (10Gigabit Network)",
    skills: ["C++"],
    descriptions: [
      "Linux용 서버",
      "KT망 내에서 타 이통사와의 대용량 RTP(UDP) 중계 서버.",
      " 10Gigabit Network 상에서 Linux TCP/IP stack으로 UDP송수신 능력이 안 되는 문제를 해결하기 위해 PF-Ring 솔루션으로 개발, 이더넷 어댑터 드라이버 수정",
    ],
    image: "",
  },
  {
    title: "아크로메이트 UC(통합 메신저)",
    skills: ["C++", "java", "Objective-C"],
    descriptions: [
      "메신저, 영상통화, PC to Phone 전화가 되는 통합 커뮤니케이션 메신저",
      "PC, android, iOS 버전",
    ],
    image: "",
    url: "https://www.acromate.com/",
  },
  {
    title: "(주) 숲소리SMART TOY APP",
    skills: ["Unity", "C#"],
    descriptions: ["Mobile App (android / iOS)"],
    image: "",
    url: "https://www.google.com/search?newwindow=1&sca_esv=be81b04602fdf0ed&sca_upv=1&q=%EC%88%B2%EC%86%8C%EB%A6%AC+%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%86%A0%EC%9D%B4%EC%95%B1&uds=AMwkrPtf40cQEE8x2HwLs_wcbJ5sMSt1HGyIFAXuFGLCz57KGmH8Z00On-rnNDudP7ZcQPzIDkuRfHmlVAdh8t2-HS0TRUjJh47MVWFHJfpjqMtJdR5N99ho8aABDPZv_v8pCDuCm1gKz43ixeIiLdS-pNcibk223oP1curH7LyuXjoeOF99vHHonGWmwotQHGlPVE7Y53nXVEhcB56H8pu8AlKf3Z5p-T4fVhlD8GCDhBSJEQIaUeKGNpI4PML__MPpt47rvlvcLo0xblFQ1Flc94oFwobq2lCPNcd-rkg0vixCK3SsNFI&udm=2&prmd=sivnbmtz&sa=X&ved=2ahUKEwjD5a6vuMuFAxVjrlYBHbscADQQtKgLegQIChAB&biw=1682&bih=915&dpr=1",
  },
  {
    title: "(주) 숲소리쇼핑몰",
    skills: ["PHP"],
    descriptions: ["홈페이지 웹 제작"],
    image: "",
    url: "https://www.soopsori.co.kr/",
  },
  {
    title: "(주) 스마트미디어콘텐츠님들",
    skills: ["Ruby"],
    descriptions: ["MBC 자회사 프로젝트"],
    image: "",
    url: "https://blog.naver.com/nimdle_official/221047986285",
  },
  {
    title: "㈜파인사이니지 디지털 사이니지 플랫폼",
    skills: ["C++", "Java"],
    descriptions: [
      "디지털 메뉴보드 및 비디오월용 서버 및 플레이어",
      "Front-End, 컨텐츠 관리 웹사이트, android용 플레이어",
    ],
    image: "",
  },
  {
    title: "KT유선전화 부가서비스 발신정보 알리미",
    skills: ["C++", "Java"],
    descriptions: [
      "KT 발신정보알리미 서비스의 고객센터용 웹사이트",
      "JAVA Spring boot 기반으로 개발",
    ],
    image: "",
    url: "https://enterprise.kt.com/pd/P_PD_CC_TE_006.do",
  },
  {
    title: "(주) 코바다재난안전망지령장치및철도용하드웨어개발",
    skills: ["C++", "C#", "Firmware", "Windows", "Linux", "Hardware"],
    descriptions: ["OS & 플랫폼 개발"],
    image: "",
    url: "http://www.covada.co.kr/",
  },
  {
    title: "(주) 넥스트지시각장애인용마이원",
    skills: ["Jave", "C++", "Android", "Web"],
    descriptions: [
      "시각장애인 전용 스마트폰 앱 마이원, 듣는 홈페이지 서버 (Web to ARS전화)",
    ],
    image: "",
    url: "https://mbnmoney.mbn.co.kr/news/view?news_no=MM1004583665",
  },
  {
    title: "(주) 넥스트지시각장애인용마이원",
    skills: ["Jave", "C++", "Android", "Web"],
    descriptions: [
      "시각장애인 전용 스마트폰 앱 마이원, 듣는 홈페이지 서버 (Web to ARS전화)",
    ],
    image: "",
    url: "https://mbnmoney.mbn.co.kr/news/view?news_no=MM1004583665",
  },
];
