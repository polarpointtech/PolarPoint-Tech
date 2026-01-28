import React, { useLayoutEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

export default function RobotModelObj(props) {
  const meshRef = useRef();

  // 1. 載入模型
  const obj = useLoader(OBJLoader, '/models/robot.obj');

  // 2. 設定啞光灰色材質
  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        // 使用標準物理材質
        child.material = new THREE.MeshStandardMaterial({
          // 🎨 顏色：中性的工業灰色 (類似您參考圖的色調)
          color: new THREE.Color('#a1a1a1'), 
          
          // --- 🌟 關鍵修改：讓它不反光 ---

          // 粗糙度 (0=鏡面, 1=完全磨砂)
          // 設為 0.75 讓表面非常粗糙，光線打上去會散開，不會有亮點
          roughness: 0.75,  
          
          // 金屬感 (0=塑膠/石膏, 1=純金屬)
          // 設低一點 (0.3)，讓它看起來有點硬度，但不是高光金屬
          metalness: 0.3,

          // 環境光反射強度
          // 降低這個值，減少周圍環境映照在模型表面的程度
          envMapIntensity: 0.5, 

          side: THREE.DoubleSide, // 雙面渲染
        });

        // 開啟陰影，這對於啞光物體展現立體感非常重要
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [obj]);

  // 自動旋轉
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={obj} 
      scale={2.5} 
      position={[0, -3.5, 0]} 
      {...props} 
    />
  );
}