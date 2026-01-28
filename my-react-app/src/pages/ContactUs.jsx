import React from 'react';

// 引入你剛剛寫好的 Construction1 小區塊
import Construction1 from '../sections/Construction1';

export default function Construction() {
  return (
    <div className="construction-page">
      {/* 這裡放 Construction1 */}
      <Construction1 />
      
      {/* 未來如果有 Construction2, Construction3 就繼續往下加 */}
      {/* <Construction2 /> */}
      {/* <Construction3 /> */}
    </div>
  );
}