import React from 'react';
import './Home6.scss';
import { useLanguage } from '../i18n/LanguageContext';

const avatarUrl = (id) => `https://i.pravatar.cc/150?img=${id}`;

const testimonialRows = [
  [
    {
      id: 'r1-01', type: 'long', rating: 5,
      text: 'Their team helped us source the right mechanical components quickly and kept every detail organized from quote to delivery.',
      textZh: '他們協助我們快速找到合適的機構零件，從報價到交付都整理得很清楚。',
      name: 'Sophie Moore', role: 'Operations Director', roleZh: '營運總監', avatar: avatarUrl(1),
    },
    {
      id: 'r1-02', type: 'short', rating: 4.5,
      text: 'Reliable communication, clear timelines, and solid production support throughout the entire project.',
      textZh: '溝通穩定、時程清楚，整個專案的生產支援都很扎實。',
      name: 'Adam Carter', role: 'Founder', roleZh: '創辦人', avatar: avatarUrl(2),
    },
    {
      id: 'r1-03', type: 'long', rating: 4,
      text: 'We needed custom fabrication with tight tolerances, and the final parts matched our expectations without unnecessary back and forth.',
      textZh: '我們需要高精度客製加工，最後成品符合預期，也省下很多反覆確認的時間。',
      name: "Michel O'Neil", role: 'Procurement Lead', roleZh: '採購主管', avatar: avatarUrl(3),
    },
    {
      id: 'r1-04', type: 'short', rating: 5,
      text: 'A practical partner for OEM work. The process felt structured, responsive, and professional.',
      textZh: '很適合 OEM 合作，流程有條理，回覆也很專業。',
      name: 'Annie Daway', role: 'Product Designer', roleZh: '產品設計師', avatar: avatarUrl(4),
    },
    {
      id: 'r1-05', type: 'long', rating: 4.5,
      text: 'They helped compare material options, clarify supplier details, and keep our purchasing decisions aligned with budget and lead time.',
      textZh: '他們協助比較材料選項與供應細節，讓採購決策能兼顧預算與交期。',
      name: 'John Carter', role: 'Project Manager', roleZh: '專案經理', avatar: avatarUrl(5),
    },
    {
      id: 'r1-06', type: 'short', rating: 3.5,
      text: 'Good support and steady follow-up. A few details took longer, but the final result was dependable.',
      textZh: '支援和追蹤都穩定，部分細節花了較多時間，但結果可靠。',
      name: 'Jane Smith', role: 'Retail Owner', roleZh: '零售業主', avatar: avatarUrl(6),
    },
    {
      id: 'r1-07', type: 'long', rating: 5,
      text: 'The tooling advice helped us avoid a production issue before it became expensive to fix.',
      textZh: '治具方面的建議幫我們提前避開生產問題，避免後續成本變高。',
      name: 'Victor Chen', role: 'Plant Supervisor', roleZh: '廠務主管', avatar: avatarUrl(19),
    },
    {
      id: 'r1-08', type: 'short', rating: 4,
      text: 'They were direct about feasibility and gave us a realistic production path.',
      textZh: '他們會直接說明可行性，也提供很實際的製作方向。',
      name: 'Elaine Roberts', role: 'Product Lead', roleZh: '產品主管', avatar: avatarUrl(20),
    },
    {
      id: 'r1-09', type: 'long', rating: 4.5,
      text: 'The sample review was detailed, and the team explained every material tradeoff before we committed.',
      textZh: '樣品評估很仔細，在確認前也把材料取捨說明得很完整。',
      name: 'Marco Lin', role: 'Hardware Buyer', roleZh: '五金採購', avatar: avatarUrl(21),
    },
    {
      id: 'r1-10', type: 'short', rating: 5,
      text: 'Clear quotes, practical suggestions, and no unnecessary complexity.',
      textZh: '報價清楚、建議實用，不會把流程弄得太複雜。',
      name: 'Alicia Ford', role: 'Office Manager', roleZh: '辦公室經理', avatar: avatarUrl(22),
    },
    {
      id: 'r1-11', type: 'long', rating: 4,
      text: 'Their manufacturing coordination helped us keep multiple suppliers aligned on one schedule.',
      textZh: '他們的製造協調讓多家供應商能跟上同一個時程。',
      name: 'Derek Wang', role: 'Supply Planner', roleZh: '供應規劃', avatar: avatarUrl(23),
    },
    {
      id: 'r1-12', type: 'short', rating: 4.5,
      text: 'Professional handling of revisions and very clean documentation.',
      textZh: '修改處理專業，文件也整理得很乾淨。',
      name: 'Sarah Miller', role: 'Account Manager', roleZh: '客戶經理', avatar: avatarUrl(24),
    },
  ],
  [
    {
      id: 'r2-01', type: 'long', rating: 5,
      text: 'The website redesign gave our brand a cleaner presentation and made it much easier for customers to understand our services.',
      textZh: '網站改版後品牌呈現更清楚，客戶也更容易理解我們的服務。',
      name: 'Lucas Chen', role: 'General Manager', roleZh: '總經理', avatar: avatarUrl(7),
    },
    {
      id: 'r2-02', type: 'short', rating: 4,
      text: 'Fast sourcing, fair recommendations, and no overcomplicated process.',
      textZh: '採購速度快，建議也中肯，流程不會過度複雜。',
      name: 'Rachel Lin', role: 'Purchasing Manager', roleZh: '採購經理', avatar: avatarUrl(8),
    },
    {
      id: 'r2-03', type: 'long', rating: 4.5,
      text: 'For our stone feature wall project, they understood the look we wanted and helped us narrow down materials with confidence.',
      textZh: '石材造型牆專案中，他們很快掌握我們要的風格，也協助篩選材料。',
      name: 'Ethan Brooks', role: 'Interior Contractor', roleZh: '室內工程承包商', avatar: avatarUrl(9),
    },
    {
      id: 'r2-04', type: 'short', rating: 5,
      text: 'Clear, direct, and easy to work with. The delivery matched the approved specifications.',
      textZh: '清楚、直接、很好合作，交付內容符合確認規格。',
      name: 'Nora Williams', role: 'Studio Lead', roleZh: '設計工作室負責人', avatar: avatarUrl(10),
    },
    {
      id: 'r2-05', type: 'long', rating: 4,
      text: 'Their technical suggestions helped us simplify the fixture design while keeping the production goal intact.',
      textZh: '技術建議幫我們簡化治具設計，同時保留原本的生產目標。',
      name: 'Ryan Patel', role: 'Manufacturing Engineer', roleZh: '製造工程師', avatar: avatarUrl(11),
    },
    {
      id: 'r2-06', type: 'short', rating: 4.5,
      text: 'The automation workflow saved our team time on repeated manual tasks.',
      textZh: '自動化流程節省了團隊處理重複作業的時間。',
      name: 'Mia Johnson', role: 'Admin Manager', roleZh: '行政經理', avatar: avatarUrl(12),
    },
    {
      id: 'r2-07', type: 'long', rating: 5,
      text: 'They translated a messy internal process into a simple digital workflow our team actually uses.',
      textZh: '他們把混亂的內部流程整理成簡單的數位工具，團隊真的有在使用。',
      name: 'Ivan Brooks', role: 'Business Analyst', roleZh: '商務分析師', avatar: avatarUrl(25),
    },
    {
      id: 'r2-08', type: 'short', rating: 3.5,
      text: 'The process took some patience, but the final system solved the main issue.',
      textZh: '過程需要一點耐心，但最後系統確實解決了主要問題。',
      name: 'Tina Morgan', role: 'Clinic Owner', roleZh: '診所負責人', avatar: avatarUrl(26),
    },
    {
      id: 'r2-09', type: 'long', rating: 4.5,
      text: 'Their UI direction made the service flow easier to explain during client meetings.',
      textZh: '介面規劃讓我們在客戶會議中更容易說明服務流程。',
      name: 'Ben Hsu', role: 'Sales Director', roleZh: '業務總監', avatar: avatarUrl(27),
    },
    {
      id: 'r2-10', type: 'short', rating: 4,
      text: 'Good balance between visual design and practical business needs.',
      textZh: '視覺設計和商務需求之間拿捏得不錯。',
      name: 'Olivia Grant', role: 'Design Consultant', roleZh: '設計顧問', avatar: avatarUrl(28),
    },
    {
      id: 'r2-11', type: 'long', rating: 5,
      text: 'They kept the site professional without making it feel like a generic template.',
      textZh: '網站保有專業感，但不會像套版頁面，這點很加分。',
      name: 'Howard Lee', role: 'Managing Partner', roleZh: '合夥人', avatar: avatarUrl(29),
    },
    {
      id: 'r2-12', type: 'short', rating: 4.5,
      text: 'Smooth communication from the first meeting to launch.',
      textZh: '從第一次會議到上線，溝通都很順。',
      name: 'Grace Turner', role: 'Project Coordinator', roleZh: '專案協調', avatar: avatarUrl(30),
    },
  ],
  [
    {
      id: 'r3-01', type: 'long', rating: 5,
      text: 'From samples to final coordination, the team stayed detail-focused and made the whole sourcing process feel controlled.',
      textZh: '從樣品到最後協調，團隊都很重視細節，整個採購流程讓人安心。',
      name: 'Daniel Wu', role: 'Business Owner', roleZh: '企業負責人', avatar: avatarUrl(13),
    },
    {
      id: 'r3-02', type: 'short', rating: 3.5,
      text: 'Helpful team and good final quality. The best part was how clearly they explained tradeoffs.',
      textZh: '團隊很願意協助，成品品質也不錯，最加分的是取捨說明清楚。',
      name: 'Chloe Martin', role: 'Design Consultant', roleZh: '設計顧問', avatar: avatarUrl(14),
    },
    {
      id: 'r3-03', type: 'long', rating: 4.5,
      text: 'They connected our digital needs with practical business operations instead of just making something that looked nice.',
      textZh: '他們不是只做漂亮畫面，而是把數位需求和實際營運連在一起。',
      name: 'Kevin Huang', role: 'Managing Partner', roleZh: '管理合夥人', avatar: avatarUrl(15),
    },
    {
      id: 'r3-04', type: 'short', rating: 4,
      text: 'Professional revisions and clean documentation made approvals easier.',
      textZh: '修改專業、文件清楚，內部審核容易很多。',
      name: 'Lena Walker', role: 'Account Manager', roleZh: '客戶經理', avatar: avatarUrl(16),
    },
    {
      id: 'r3-05', type: 'long', rating: 5,
      text: 'We appreciated their ability to coordinate manufacturing details, supplier options, and project communication in one place.',
      textZh: '他們能把製造細節、供應商選項和專案溝通整合在一起，這點很有幫助。',
      name: 'Marcus Lee', role: 'Supply Chain Manager', roleZh: '供應鏈經理', avatar: avatarUrl(17),
    },
    {
      id: 'r3-06', type: 'short', rating: 4.5,
      text: 'A smooth experience from the first consultation to final delivery.',
      textZh: '從初步諮詢到最後交付，整體都很順。',
      name: 'Emily Stone', role: 'Project Coordinator', roleZh: '專案協調', avatar: avatarUrl(18),
    },
    {
      id: 'r3-07', type: 'long', rating: 4,
      text: 'The stone selection process was much easier with their guidance on finish, size, and installation concerns.',
      textZh: '有他們協助判斷表面處理、尺寸和施工注意事項，選材變得簡單很多。',
      name: 'Hannah Park', role: 'Interior Designer', roleZh: '室內設計師', avatar: avatarUrl(31),
    },
    {
      id: 'r3-08', type: 'short', rating: 5,
      text: 'They understood the premium look we wanted without overcomplicating the project.',
      textZh: '他們理解我們要的高級感，也沒有把專案弄得太複雜。',
      name: 'Noah Spencer', role: 'Developer', roleZh: '建案開發', avatar: avatarUrl(32),
    },
    {
      id: 'r3-09', type: 'long', rating: 4.5,
      text: 'Their construction material recommendations were practical and matched the budget better than our first plan.',
      textZh: '建材建議很務實，也比我們原本方案更符合預算。',
      name: 'Irene Chang', role: 'Project Owner', roleZh: '專案業主', avatar: avatarUrl(33),
    },
    {
      id: 'r3-10', type: 'short', rating: 4,
      text: 'Good eye for material matching and reliable follow-up after selection.',
      textZh: '材料搭配眼光不錯，選定後的追蹤也可靠。',
      name: 'Peter Young', role: 'Contractor', roleZh: '工程承包商', avatar: avatarUrl(34),
    },
    {
      id: 'r3-11', type: 'long', rating: 5,
      text: 'They helped us compare stone options without pushing the most expensive choice.',
      textZh: '他們協助比較石材選項，不會一味推薦最貴的材料。',
      name: 'Vera Scott', role: 'Architect', roleZh: '建築師', avatar: avatarUrl(35),
    },
    {
      id: 'r3-12', type: 'short', rating: 4.5,
      text: 'The final wall material looked refined and matched the space perfectly.',
      textZh: '最後牆面材料質感很好，和空間搭配得很完整。',
      name: 'Oscar Tan', role: 'Hotel Manager', roleZh: '飯店經理', avatar: avatarUrl(36),
    },
  ],
];

const renderStars = (rating) => (
  Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    const state = rating >= value ? 'full' : rating >= value - 0.5 ? 'half' : 'empty';

    return <span key={value} className={`star ${state}`} aria-hidden="true" />;
  })
);

const TestimonialCard = ({ data }) => (
  <div className={`testimonial-card ${data.type === 'long' ? 'card-long' : 'card-short'}`}>
    <div className="stars" aria-label={`${data.rating} out of 5 stars`}>
      {renderStars(data.rating)}
    </div>
    <p className="review-text">{data.text}</p>
    <div className="user-info">
      <div className="left">
        <img src={data.avatar} alt={data.name} className="avatar" />
        <span className="name">{data.name}</span>
      </div>
      <span className="role">{data.role}</span>
    </div>
  </div>
);

const localizeRows = (rows, isChinese) => (
  rows.map((row) => row.map((item) => ({
    ...item,
    text: isChinese ? item.textZh : item.text,
    role: isChinese ? item.roleZh : item.role,
  })))
);

export default function Home6() {
  const { isChinese } = useLanguage();
  const [rowOneBase, rowTwoBase, rowThreeBase] = localizeRows(testimonialRows, isChinese);
  const rowOne = [...rowOneBase, ...rowOneBase];
  const rowTwo = [...rowTwoBase, ...rowTwoBase];
  const rowThree = [...rowThreeBase, ...rowThreeBase];

  return (
    <section className="home6-container">
      <div className="header-content">
        <div className="tag">{isChinese ? '客戶長期信賴' : 'TRUSTED BY OUR CLIENTS'}</div>
        <h2 className="main-title">
          {isChinese ? (
            <>
              以信任為基礎，<br />
              <span>以成果建立口碑</span>
            </>
          ) : (
            <>
              Built on Trust,<br />
              <span>Backed by Results</span>
            </>
          )}
        </h2>
        <p className="subtitle">
          {isChinese
            ? '透過穩定可靠的服務與長期合作，協助企業持續成長與成功。'
            : 'We take pride in delivering reliable solutions that help businesses succeed through long-term partnerships.'}
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-row scroll-left row-one">
          <div className="track">
            {rowOne.map((item, idx) => (
              <TestimonialCard key={`r1-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>

        <div className="marquee-row scroll-right row-two">
          <div className="track">
            {rowTwo.map((item, idx) => (
              <TestimonialCard key={`r2-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>

        <div className="marquee-row scroll-left row-three">
          <div className="track">
            {rowThree.map((item, idx) => (
              <TestimonialCard key={`r3-${item.id}-${idx}`} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
