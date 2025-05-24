import { City } from '@/types';

export const cities: City[] = [
  // 서울특별시
  { name: '서울시', fullName: '서울특별시', province: '서울특별시', coordinates: { lat: 37.5665, lng: 126.9780 } },
  
  // 부산광역시
  { name: '부산시', fullName: '부산광역시', province: '부산광역시', coordinates: { lat: 35.1796, lng: 129.0756 } },
  
  // 대구광역시
  { name: '대구시', fullName: '대구광역시', province: '대구광역시', coordinates: { lat: 35.8714, lng: 128.6014 } },
  
  // 인천광역시
  { name: '인천시', fullName: '인천광역시', province: '인천광역시', coordinates: { lat: 37.4563, lng: 126.7052 } },
  
  // 광주광역시
  { name: '광주시', fullName: '광주광역시', province: '광주광역시', coordinates: { lat: 35.1595, lng: 126.8526 } },
  
  // 대전광역시
  { name: '대전시', fullName: '대전광역시', province: '대전광역시', coordinates: { lat: 36.3504, lng: 127.3845 } },
  
  // 울산광역시
  { name: '울산시', fullName: '울산광역시', province: '울산광역시', coordinates: { lat: 35.5384, lng: 129.3114 } },
  
  // 세종특별자치시
  { name: '세종시', fullName: '세종특별자치시', province: '세종특별자치시', coordinates: { lat: 36.4800, lng: 127.2890 } },
  
  // 경기도
  { name: '수원시', fullName: '경기도 수원시', province: '경기도', coordinates: { lat: 37.2636, lng: 127.0286 } },
  { name: '성남시', fullName: '경기도 성남시', province: '경기도', coordinates: { lat: 37.4449, lng: 127.1388 } },
  { name: '안양시', fullName: '경기도 안양시', province: '경기도', coordinates: { lat: 37.3943, lng: 126.9568 } },
  { name: '안산시', fullName: '경기도 안산시', province: '경기도', coordinates: { lat: 37.3236, lng: 126.8219 } },
  { name: '고양시', fullName: '경기도 고양시', province: '경기도', coordinates: { lat: 37.6584, lng: 126.8320 } },
  { name: '용인시', fullName: '경기도 용인시', province: '경기도', coordinates: { lat: 37.2411, lng: 127.1776 } },
  { name: '부천시', fullName: '경기도 부천시', province: '경기도', coordinates: { lat: 37.5035, lng: 126.7660 } },
  { name: '화성시', fullName: '경기도 화성시', province: '경기도', coordinates: { lat: 37.1999, lng: 126.8312 } },
  { name: '남양주시', fullName: '경기도 남양주시', province: '경기도', coordinates: { lat: 37.6369, lng: 127.2165 } },
  { name: '시흥시', fullName: '경기도 시흥시', province: '경기도', coordinates: { lat: 37.3798, lng: 126.8028 } },
  { name: '평택시', fullName: '경기도 평택시', province: '경기도', coordinates: { lat: 36.9923, lng: 127.1127 } },
  
  // 강원도
  { name: '춘천시', fullName: '강원도 춘천시', province: '강원도', coordinates: { lat: 37.8813, lng: 127.7298 } },
  { name: '원주시', fullName: '강원도 원주시', province: '강원도', coordinates: { lat: 37.3422, lng: 127.9202 } },
  { name: '강릉시', fullName: '강원도 강릉시', province: '강원도', coordinates: { lat: 37.7519, lng: 128.8761 } },
  { name: '동해시', fullName: '강원도 동해시', province: '강원도', coordinates: { lat: 37.5244, lng: 129.1144 } },
  { name: '태백시', fullName: '강원도 태백시', province: '강원도', coordinates: { lat: 37.1640, lng: 128.9856 } },
  { name: '속초시', fullName: '강원도 속초시', province: '강원도', coordinates: { lat: 38.2070, lng: 128.5918 } },
  { name: '삼척시', fullName: '강원도 삼척시', province: '강원도', coordinates: { lat: 37.4496, lng: 129.1658 } },
  
  // 충청북도
  { name: '청주시', fullName: '충청북도 청주시', province: '충청북도', coordinates: { lat: 36.6424, lng: 127.4890 } },
  { name: '충주시', fullName: '충청북도 충주시', province: '충청북도', coordinates: { lat: 36.9710, lng: 127.9259 } },
  { name: '제천시', fullName: '충청북도 제천시', province: '충청북도', coordinates: { lat: 37.1326, lng: 128.1910 } },
  
  // 충청남도
  { name: '천안시', fullName: '충청남도 천안시', province: '충청남도', coordinates: { lat: 36.8151, lng: 127.1139 } },
  { name: '공주시', fullName: '충청남도 공주시', province: '충청남도', coordinates: { lat: 36.4465, lng: 127.1188 } },
  { name: '보령시', fullName: '충청남도 보령시', province: '충청남도', coordinates: { lat: 36.3334, lng: 126.6129 } },
  { name: '아산시', fullName: '충청남도 아산시', province: '충청남도', coordinates: { lat: 36.7898, lng: 127.0020 } },
  { name: '서산시', fullName: '충청남도 서산시', province: '충청남도', coordinates: { lat: 36.7848, lng: 126.4503 } },
  { name: '논산시', fullName: '충청남도 논산시', province: '충청남도', coordinates: { lat: 36.1873, lng: 127.0986 } },
  { name: '계룡시', fullName: '충청남도 계룡시', province: '충청남도', coordinates: { lat: 36.2742, lng: 127.2486 } },
  { name: '당진시', fullName: '충청남도 당진시', province: '충청남도', coordinates: { lat: 36.8935, lng: 126.6279 } },
  
  // 전라북도
  { name: '전주시', fullName: '전라북도 전주시', province: '전라북도', coordinates: { lat: 35.8242, lng: 127.1478 } },
  { name: '군산시', fullName: '전라북도 군산시', province: '전라북도', coordinates: { lat: 35.9678, lng: 126.7368 } },
  { name: '익산시', fullName: '전라북도 익산시', province: '전라북도', coordinates: { lat: 35.9483, lng: 126.9576 } },
  { name: '정읍시', fullName: '전라북도 정읍시', province: '전라북도', coordinates: { lat: 35.5697, lng: 126.8560 } },
  { name: '남원시', fullName: '전라북도 남원시', province: '전라북도', coordinates: { lat: 35.4164, lng: 127.3901 } },
  { name: '김제시', fullName: '전라북도 김제시', province: '전라북도', coordinates: { lat: 35.8038, lng: 126.8808 } },
  
  // 전라남도
  { name: '목포시', fullName: '전라남도 목포시', province: '전라남도', coordinates: { lat: 34.8118, lng: 126.3922 } },
  { name: '여수시', fullName: '전라남도 여수시', province: '전라남도', coordinates: { lat: 34.7604, lng: 127.6622 } },
  { name: '순천시', fullName: '전라남도 순천시', province: '전라남도', coordinates: { lat: 34.9507, lng: 127.4872 } },
  { name: '나주시', fullName: '전라남도 나주시', province: '전라남도', coordinates: { lat: 35.0160, lng: 126.7107 } },
  { name: '광양시', fullName: '전라남도 광양시', province: '전라남도', coordinates: { lat: 34.9407, lng: 127.7000 } },
  
  // 경상북도
  { name: '포항시', fullName: '경상북도 포항시', province: '경상북도', coordinates: { lat: 36.0190, lng: 129.3435 } },
  { name: '경주시', fullName: '경상북도 경주시', province: '경상북도', coordinates: { lat: 35.8562, lng: 129.2247 } },
  { name: '김천시', fullName: '경상북도 김천시', province: '경상북도', coordinates: { lat: 36.1396, lng: 128.1134 } },
  { name: '안동시', fullName: '경상북도 안동시', province: '경상북도', coordinates: { lat: 36.5684, lng: 128.7294 } },
  { name: '구미시', fullName: '경상북도 구미시', province: '경상북도', coordinates: { lat: 36.1195, lng: 128.3445 } },
  { name: '영주시', fullName: '경상북도 영주시', province: '경상북도', coordinates: { lat: 36.8058, lng: 128.6238 } },
  { name: '영천시', fullName: '경상북도 영천시', province: '경상북도', coordinates: { lat: 35.9733, lng: 128.9387 } },
  { name: '상주시', fullName: '경상북도 상주시', province: '경상북도', coordinates: { lat: 36.4109, lng: 128.1590 } },
  { name: '문경시', fullName: '경상북도 문경시', province: '경상북도', coordinates: { lat: 36.5867, lng: 128.1867 } },
  { name: '경산시', fullName: '경상북도 경산시', province: '경상북도', coordinates: { lat: 35.8250, lng: 128.7417 } },
  
  // 경상남도
  { name: '창원시', fullName: '경상남도 창원시', province: '경상남도', coordinates: { lat: 35.2280, lng: 128.6811 } },
  { name: '진주시', fullName: '경상남도 진주시', province: '경상남도', coordinates: { lat: 35.1800, lng: 128.1076 } },
  { name: '통영시', fullName: '경상남도 통영시', province: '경상남도', coordinates: { lat: 34.8544, lng: 128.4332 } },
  { name: '사천시', fullName: '경상남도 사천시', province: '경상남도', coordinates: { lat: 35.0036, lng: 128.0644 } },
  { name: '김해시', fullName: '경상남도 김해시', province: '경상남도', coordinates: { lat: 35.2286, lng: 128.8894 } },
  { name: '밀양시', fullName: '경상남도 밀양시', province: '경상남도', coordinates: { lat: 35.5040, lng: 128.7467 } },
  { name: '거제시', fullName: '경상남도 거제시', province: '경상남도', coordinates: { lat: 34.8806, lng: 128.6217 } },
  { name: '양산시', fullName: '경상남도 양산시', province: '경상남도', coordinates: { lat: 35.3350, lng: 129.0372 } },
  
  // 제주특별자치도
  { name: '제주시', fullName: '제주특별자치도 제주시', province: '제주특별자치도', coordinates: { lat: 33.4996, lng: 126.5312 } },
  { name: '서귀포시', fullName: '제주특별자치도 서귀포시', province: '제주특별자치도', coordinates: { lat: 33.2541, lng: 126.5600 } },
];

export const getRandomCity = (): City => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}; 