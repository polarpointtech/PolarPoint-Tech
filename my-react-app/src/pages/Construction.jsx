import React from 'react';

// 引入各個區塊
import Construction1 from '../sections/Construction1';
import Construction2 from '../sections/Construction2'; // ✅ 這裡要改名為 Construction2

export default function Construction() {
  return (
    <div className="construction-page">
      {/* 第一區：材料輪播 */}
      <Construction1 />

      {/* 第二區：互動循環球體 */}
      <Construction2 />
      
    </div>
  );
}