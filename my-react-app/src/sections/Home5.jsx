import React from 'react';
import './Home5.scss';
import { useLanguage } from '../i18n/LanguageContext';

const streamChars = '01=TVXL33457:.-';
const dataColumns = Array.from({ length: 40 }, (_, columnIndex) => (
  Array.from({ length: 42 }, (_, charIndex) => {
    const char = streamChars[(columnIndex * 7 + charIndex * 5) % streamChars.length];
    const isGap = (columnIndex + charIndex) % 7 === 0;
    return isGap ? ' ' : char;
  })
));

export default function Home5() {
  const { isChinese } = useLanguage();

  return (
    <section className="home5-container">
      <div className="data-stream-bg" aria-hidden="true">
        {dataColumns.map((column, index) => (
          <div className={`data-column column-${index + 1}`} key={`data-column-${index}`}>
            <span className="stream-set">
              {column.map((char, charIndex) => (
                <i key={`${char}-${charIndex}`}>{char}</i>
              ))}
            </span>
            <span className="stream-set">
              {column.map((char, charIndex) => (
                <i key={`${char}-${charIndex}-repeat`}>{char}</i>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="content-wrapper">
        <p className="subtitle">
          {isChinese ? '我們的服務方式' : 'HOW WE WORK'}
        </p>
        <h2 className="main-title">
          {isChinese ? (
            <>
              將複雜需求，化為可落地的實際方案
            </>
          ) : (
            <>
              Turning Complex Requirements<br />
              Into <span>Practical Solutions</span>
            </>
          )}
        </h2>
        <p className="work-copy">
          {isChinese
            ? '從需求釐清、資源整合到方案執行，協助企業將想法真正落地。'
            : 'We clarify needs, align resources, and turn ideas into executable business solutions.'}
        </p>
      </div>
    </section>
  );
}
