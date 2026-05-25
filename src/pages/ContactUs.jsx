import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
    <svg className="button-mark" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M3 16.8C7.4 10.2 13.1 3.8 18.2 2.2C21.9 1.1 20.5 6.4 17.2 11.3C14.7 15.2 12.7 18.2 14.6 19.2C17.1 20.5 21.9 13.1 24 14.3C25.7 15.3 22.8 20.5 25.3 21.2C26.6 21.6 28.4 20.1 30 18.3"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactUs() {
  const { isChinese } = useLanguage();
  const formRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const selectedServiceName = selectedService?.name.en || '';

  const sendEmail = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const message = isChinese
        ? 'EmailJS 環境變數尚未設定完整，請確認 .env 檔案。'
        : 'EmailJS environment variables are missing. Please check your .env file.';
      setSubmitMessage(message);
      alert(message);
      return;
    }

    setIsSending(true);
    setSubmitMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      const message = isChinese
        ? '需求已送出，我們會盡快與您聯繫。'
        : 'Your inquiry has been sent. We will get in touch shortly.';
      setSubmitMessage(message);
      alert(message);
      formRef.current?.reset();
      setSelectedService(null);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      const message = isChinese
        ? '送出失敗，請稍後再試或直接與我們聯繫。'
        : 'Failed to send your inquiry. Please try again later or contact us directly.';
      setSubmitMessage(message);
      alert(message);
    } finally {
      setIsSending(false);
    }
  };

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
                <ServiceIcon />
                {isChinese ? service.name.zh : service.name.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <form ref={formRef} className="figma-contact-form" onSubmit={sendEmail}>
          <p className={`form-note ${selectedService ? '' : 'empty'}`}>
            {selectedService
              ? (isChinese ? selectedService.note.zh : selectedService.note.en)
              : 'Inquiry category note'}
          </p>
          <input type="hidden" name="service_type" value={selectedServiceName} />

          <div className="form-row two">
            <label>
              <span>{isChinese ? '聯絡人姓名' : 'Contact Person'}</span>
              <input type="text" name="user_name" placeholder={isChinese ? '請輸入姓名' : 'Your Name'} required />
            </label>
            <label>
              <span>{isChinese ? '公司名稱' : 'Company Name'}</span>
              <input type="text" name="company_name" placeholder={isChinese ? '請輸入公司名稱' : 'Your Company Name'} />
            </label>
          </div>

          <div className="form-row two">
            <label className="email-field">
              <span>{isChinese ? '電子郵件' : 'Email'}</span>
              <input type="email" name="user_email" placeholder={isChinese ? '請輸入 Email' : 'Your Email Address'} required />
            </label>
            <label className="phone-field">
              <span>{isChinese ? '聯絡電話' : 'Phone / Mobile'}</span>
              <input type="tel" name="phone_number" placeholder={isChinese ? '請輸入手機或市話' : 'Phone or mobile number'} />
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
              required
            />
          </label>

          <div className="consent-row">
            <label>
              <input type="checkbox" name="privacy_consent" required />
              <span>
                {isChinese ? (
                  <>我同意隱私權政策，並同意接受聯繫。</>
                ) : (
                  <>I agree to the <a href="#">Privacy Policy</a> and consent to being contacted.</>
                )}
              </span>
            </label>
            <label>
              <input type="checkbox" name="business_updates" />
              <span>{isChinese ? '我願意接收服務與商務資訊。' : 'I would like to receive service and business updates.'}</span>
            </label>
          </div>

          <button className="submit-btn" type="submit" disabled={isSending}>
            {isSending
              ? (isChinese ? '送出中...' : 'Sending...')
              : (isChinese ? '送出需求' : 'Send Inquiry')}
          </button>
          {submitMessage && <p className="submit-status">{submitMessage}</p>}
          <p className="response-note">
            {isChinese ? '我們通常會於 1-2 個工作天內回覆。' : 'We typically respond within 1-2 business days.'}
          </p>
        </form>
      </section>
    </main>
  );
}
