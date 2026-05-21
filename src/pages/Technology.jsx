import React from 'react';

// 引入 Technology 的各個區塊
import Technology1 from '../sections/Technology1';
import Technology2 from '../sections/Technology2';

export default function Technology() {
  return (
    <div className="technology-page">
      {/* 第一區：資訊服務與玻璃擬態卡片 */}
      <Technology1 />

      {/* 第二區：(您即將製作的) */}
      <Technology2 />
    </div>
  );
}