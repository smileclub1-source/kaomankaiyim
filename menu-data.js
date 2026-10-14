// รายการเมนูตามป้ายร้าน — แก้/เพิ่มเมนูที่ไฟล์นี้ที่เดียว (หน้าลูกค้าและหน้าหลังบ้านใช้ร่วมกัน)
// image: ใส่ที่อยู่รูปโดยไม่ต้องมีนามสกุล (ระบบลอง .jpg .png .jpeg .webp ให้เอง)
// id ต้องไม่ซ้ำและห้ามเปลี่ยนภายหลัง เพราะใช้เก็บสถานะ เปิด/ปิด เมนู
const RICE_EXTRAS = ['ข้าวน้อย', 'เพิ่มข้าว', 'ไม่เอาตับ', 'ไม่เอาเลือด', 'เพิ่มน้ำจิ้ม'];
const MENU_DATA = [
  { id: 'kmk-tom',      name: 'ข้าวมันไก่ต้ม',        emoji: '🍗', category: 'ข้าวมันไก่', image: 'Menu/1', available: true, types: [{ name: 'ธรรมดา', price: 50 }], extras: RICE_EXTRAS },
  { id: 'kmk-tom-sp',   name: 'ข้าวมันไก่ต้มพิเศษ',   emoji: '🍗', category: 'ข้าวมันไก่', image: 'Menu/2', available: true, types: [{ name: 'ธรรมดา', price: 60 }], extras: RICE_EXTRAS },
  { id: 'kmk-tod',      name: 'ข้าวมันไก่ทอด',        emoji: '🍤', category: 'ข้าวมันไก่', image: 'Menu/3', available: true, types: [{ name: 'ธรรมดา', price: 50 }], extras: RICE_EXTRAS },
  { id: 'kmk-tod-sp',   name: 'ข้าวมันไก่ทอดพิเศษ',   emoji: '🍤', category: 'ข้าวมันไก่', image: 'Menu/4', available: true, types: [{ name: 'ธรรมดา', price: 60 }], extras: RICE_EXTRAS },
  { id: 'kmk-mix',      name: 'ข้าวมันไก่ผสม',        emoji: '🍛', category: 'ข้าวมันไก่', image: 'Menu/5', available: true, types: [{ name: 'ธรรมดา', price: 60 }], extras: RICE_EXTRAS },
  { id: 'kmk-mix-sp',   name: 'ข้าวมันไก่ผสมพิเศษ',   emoji: '🍛', category: 'ข้าวมันไก่', image: 'Menu/6', available: true, types: [{ name: 'ธรรมดา', price: 70 }], extras: RICE_EXTRAS },
  { id: 'kai-tom-sub',  name: 'ไก่ต้มสับ',            emoji: '🍗', category: 'เมนูอื่นๆ',   image: 'Menu/7', available: true, types: [{ name: 'ธรรมดา', price: 80 }], extras: ['เพิ่มน้ำจิ้ม'] },
  { id: 'kai-sub-mix',  name: 'ไก่สับผสม',            emoji: '🍗', category: 'เมนูอื่นๆ',   image: 'Menu/8', available: true, types: [{ name: 'ธรรมดา', price: 80 }], extras: ['เพิ่มน้ำจิ้ม'] },
  { id: 'tub-sub',      name: 'ตับสับ',               emoji: '🥘', category: 'เมนูอื่นๆ',   image: 'Menu/9', available: true, types: [{ name: 'ธรรมดา', price: 80 }], extras: ['เพิ่มน้ำจิ้ม'] },
  { id: 'kai-tod-yam',  name: 'ข้าวไก่ทอดยำแซบ',      emoji: '🌶️', category: 'ข้าวมันไก่',   image: 'Menu/10', available: true, types: [{ name: 'ธรรมดา', price: 60 }], extras: ['ข้าวน้อย', 'เพิ่มข้าว'] },
  { id: 'kao-plao',     name: 'ข้าวมันเปล่า',         emoji: '🍚', category: 'เมนูอื่นๆ',   image: 'Menu/11', available: true, types: [{ name: 'ธรรมดา', price: 20 }], extras: [] }
];
