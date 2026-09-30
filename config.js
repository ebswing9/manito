// 설정 파일: index.html과 같은 폴더에 두세요. (이 파일만 한 번 채우면 돼요)
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 값을 그대로 붙여넣으세요.
const FB = {
  apiKey: "AIzaSyCEE5CpxX-hAshpp7f3St-n-TP1Q59QpIk",
  authDomain: "manito-28859.firebaseapp.com",
  databaseURL: "https://manito-28859-default-rtdb.firebaseio.com",
  projectId: "manito-28859",
  appId: "1:804247876321:web:2d2f6d27025af47d3afda0"
};

// 관리자 비밀번호
const ADMIN_PW = "sugar";

// 글자 수 제한
const MIN_MISSION = 10;    // 미션 최소 글자 수
const MAX_MISSION = 500;   // 미션 최대 글자 수
const MIN_REFL = 30;       // 소감 최소 글자 수
const MAX_REFL = 1500;     // 소감 최대 글자 수
