import React, { useState } from 'react';
import './ContactUs.scss';
import contactHero from '../assets/home1-1.png';
import { useLanguage } from '../i18n/LanguageContext';

const services = [
  {
    id: 'manufacturing',
    name: { en: 'Manufacturing', zh: '製造服務' },
    note: {
      en: 'Tell us about your machining, OEM production, fabrication, or industrial supply needs.',
      zh: '請簡單說明您的製造加工、零件、治具或 OEM/ODM 需求。',
    },
  },
  {
    id: 'digital',
    name: { en: 'Digital Services', zh: '數位服務' },
    note: {
      en: 'Tell us about your website, digital workflow, or custom system requirements.',
      zh: '請簡單說明您的網站、數位工具或自動化系統需求。',
    },
  },
  {
    id: 'construction',
    name: { en: 'Construction', zh: '建材工程' },
    note: {
      en: 'Tell us about your construction project, material sourcing, or site support requirements.',
      zh: '請簡單說明您的建材工程、石材採購或專案需求。',
    },
  },
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.4 16.5c1.7-3.1 3.7-6.5 5.1-8.1.7-.8 1.5-.3 1.1.7l-2.3 6.1c-.3.9.5 1.4 1.2.8l2.6-2.5c.7-.6 1.6-.2 1.3.7l-.4 1.2c-.3.8.4 1.4 1.1.8l1.5-1.2" />
    </svg>
  );
}

export default function ContactUs() {
  const { isChinese } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const selectedServiceName = selectedService?.name.en || '';

  return (
    <main className={`contact-page ${isChinese ? 'contact-page-zh' : ''}`}>
      <section className="contact-hero" style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="contact-hero-content">
          <p className="caption">{isChinese ? '商務洽詢' : 'GET IN TOUCH'}</p>
          <h1>{isChinese ? '讓我們了解您的需求' : 'Contact Us'}</h1>
          <p className="hero-copy">
            {isChinese
              ? '無論您需要製造加工、材料採購、建築石材，或數位服務，我們都能協助您將需求落地。歡迎留下需求資訊，我們將盡快與您聯繫。'
              : 'Whether you need manufacturing, sourcing, construction materials, or digital solutions, our team is ready to help bring your ideas into reality. Share your requirements with us and we will get in touch shortly.'}
          </p>

          <div className="service-pills" aria-label="Contact service categories">
            {services.map((service) => (
              <button
                className={selectedService?.id === service.id ? 'active' : ''}
                type="button"
                key={service.id}
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
              >
                {!isChinese && <ServiceIcon />}
                {isChinese ? service.name.zh : service.name.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <form className="figma-contact-form">
          <p className={`form-note ${selectedService ? '' : 'empty'}`}>
            {selectedService
              ? (isChinese ? selectedService.note.zh : selectedService.note.en)
              : 'Inquiry category note'}
          </p>
          <input type="hidden" name="inquiryType" value={selectedServiceName} />

          <div className="form-row two">
            <label>
              <span>{isChinese ? '聯絡人姓名' : 'Contact Person'}</span>
              <input type="text" name="contactPerson" placeholder={isChinese ? '請輸入姓名' : 'Your Name'} />
            </label>
            <label>
              <span>{isChinese ? '公司名稱' : 'Company Name'}</span>
              <input type="text" name="companyName" placeholder={isChinese ? '請輸入公司名稱' : 'Your Company Name'} />
            </label>
          </div>

          <div className="form-row two">
            <label className="email-field">
              <span>{isChinese ? '電子郵件' : 'Email'}</span>
              <input type="email" name="email" placeholder={isChinese ? '請輸入 Email' : 'Your Email Address'} />
            </label>
            <label className="phone-field">
              <span>{isChinese ? '聯絡電話' : 'Phone / Mobile'}</span>
              <input type="tel" name="phone" placeholder={isChinese ? '請輸入手機或市話' : 'Phone or mobile number'} />
            </label>
          </div>

          <label className="message-field">
            <span>{isChinese ? '需求說明' : 'Message'}</span>
            <textarea
              name="message"
              rows="4"
              placeholder={isChinese
                ? '請簡單描述您的需求、產品規格或專案內容。'
                : 'Tell us about your project, product requirements, or service needs.'}
            />
          </label>

          <div className="consent-row">
            <label>
              <input type="checkbox" />
              <span>
                {isChinese ? (
                  <>我同意隱私權政策，並同意接受聯繫。</>
                ) : (
                  <>I agree to the <a href="#">Privacy Policy</a> and consent to being contacted.</>
                )}
              </span>
            </label>
            <label>
              <input type="checkbox" />
              <span>{isChinese ? '我願意接收服務與商務資訊。' : 'I would like to receive service and business updates.'}</span>
            </label>
          </div>

          <button className="submit-btn" type="button">{isChinese ? '送出需求' : 'Send Inquiry'}</button>
          <p className="response-note">
            {isChinese ? '我們通常會於 1-2 個工作天內回覆。' : 'We typically respond within 1-2 business days.'}
          </p>
        </form>
      </section>
    </main>
  );
}
