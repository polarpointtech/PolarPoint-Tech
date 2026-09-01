import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const SITE_URL = 'https://polar-point-tech.vercel.app';
const OG_IMAGE = `${SITE_URL}/og-image.png?v=20260525`;

const routeMeta = {
  '/': {
    en: {
      title: 'PolarPoint Tech | Manufacturing, Digital Systems, and Construction Support',
      description: 'PolarPoint Tech helps businesses turn complex requirements into practical solutions across manufacturing support, custom digital systems, and construction project services.',
      keywords: 'PolarPoint Tech, manufacturing support, digital systems, construction support, business solutions',
    },
    zh: {
      title: 'PolarPoint Tech 極點科技｜製造、數位系統與營建支援',
      description: 'PolarPoint Tech 極點科技協助企業整合製造支援、客製化數位系統與營建專案需求，將複雜需求轉化為可執行的商業解決方案。',
      keywords: 'PolarPoint Tech, 極點科技, 製造支援, 數位系統, 營建支援, 企業解決方案',
    },
  },
  '/manufacturing': {
    en: {
      title: 'Manufacturing Services | 3D Printing and Prototyping | PolarPoint Tech',
      description: 'Manufacturing support for 3D printing, rapid prototyping, low-volume production, functional models, and product validation.',
      keywords: '3D printing service, rapid prototyping, low-volume production, product validation, manufacturing support',
    },
    zh: {
      title: '製造服務｜3D列印、快速打樣與小量生產｜極點科技 PolarPoint Tech',
      description: '提供 3D 列印、快速打樣、小量生產、功能模型與產品驗證等製造支援，協助產品從概念進入可執行階段。',
      keywords: '3D列印服務, 快速打樣, 小量生產, 產品原型製作, 功能模型, 製造支援',
    },
  },
  '/technology': {
    en: {
      title: 'Digital Services | Web Design, UI/UX, and Custom Systems | PolarPoint Tech',
      description: 'Custom digital experiences, web design, UI/UX, and digital systems that help teams improve operations, branding, and customer workflows.',
      keywords: 'web design, UI UX design, custom digital systems, digital experience, business automation',
    },
    zh: {
      title: '數位服務｜網站設計、UI/UX 與客製化系統｜極點科技 PolarPoint Tech',
      description: '提供網站設計、UI/UX、客製化數位體驗與企業系統規劃，協助品牌提升效率、流程與數位呈現。',
      keywords: '網站設計, UI/UX設計, 客製化系統, 數位體驗, 企業自動化',
    },
  },
  '/construction': {
    en: {
      title: 'Construction Support | Materials and Site Project Services | PolarPoint Tech',
      description: 'Construction support for material sourcing, site requirements, project coordination, and practical building-related service needs.',
      keywords: 'construction support, material sourcing, site project support, building materials, construction services',
    },
    zh: {
      title: '營建支援｜建材、現場需求與工程協助｜極點科技 PolarPoint Tech',
      description: '協助營建與工程專案處理建材需求、現場支援、材料媒合與專案協調，讓工程需求更有效率地落地。',
      keywords: '營建支援, 建材媒合, 工程協助, 現場支援, 建築材料',
    },
  },
  '/contact': {
    en: {
      title: 'Contact PolarPoint Tech | Project Inquiry and Business Support',
      description: 'Contact PolarPoint Tech for manufacturing, digital service, and construction support inquiries. Email polarpointtech@gmail.com for urgent requests.',
      keywords: 'contact PolarPoint Tech, project inquiry, manufacturing inquiry, digital services inquiry, construction inquiry',
    },
    zh: {
      title: '聯絡極點科技 PolarPoint Tech｜專案諮詢與服務需求',
      description: '聯絡 PolarPoint Tech 極點科技，洽詢製造、數位服務與營建支援需求。急件可直接寄信至 polarpointtech@gmail.com。',
      keywords: '聯絡極點科技, 專案諮詢, 製造需求, 數位服務諮詢, 營建支援',
    },
  },
};

const normalizePath = (pathname) => {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return routeMeta[pathname] ? pathname : '/';
};

const languageUrl = (path, language) => {
  const basePath = path === '/' ? '' : path;
  return language === 'zh' ? `${SITE_URL}${basePath}?lang=zh` : `${SITE_URL}${basePath}`;
};

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const setLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

export default function SEO() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const path = normalizePath(location.pathname);
    const meta = routeMeta[path][language];
    const canonical = languageUrl(path, language);
    const alternateEn = languageUrl(path, 'en');
    const alternateZh = languageUrl(path, 'zh');

    document.documentElement.setAttribute('lang', language === 'zh' ? 'zh-Hant' : 'en');
    document.title = meta.title;

    setMeta('meta[name="description"]', { name: 'description', content: meta.description });
    setMeta('meta[name="keywords"]', { name: 'keywords', content: meta.keywords });
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE });
    setMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    setMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PolarPoint Tech logo' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'PolarPoint Tech' });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: language === 'zh' ? 'zh_TW' : 'en_US' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE });

    setLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
    setLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: alternateEn });
    setLink('link[rel="alternate"][hreflang="zh-Hant"]', { rel: 'alternate', hreflang: 'zh-Hant', href: alternateZh });
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: alternateEn });

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'PolarPoint Tech',
      alternateName: ['極點科技', 'PolarPointTech'],
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png?v=penguin-round`,
      email: 'polarpointtech@gmail.com',
      contactPoint: [{
        '@type': 'ContactPoint',
        email: 'polarpointtech@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['English', 'Traditional Chinese'],
      }],
    };

    let script = document.head.querySelector('script[data-seo-schema="organization"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'organization';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [language, location.pathname]);

  return null;
}
