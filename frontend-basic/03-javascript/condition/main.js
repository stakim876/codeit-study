let age = 25;
/* 사용자 나이 저장함. */

if (age >= 20) {
    console.log("성인입니다.");
}

let isLogin = true;
/* 로그인 상태 저장함. */

if (isLogin === true) {
    console.log("로그인되었습니다.");
} else {
    console.log("로그인이 필요합니다.");
}

let score = 85;

if (score >= 90) {
    console.log("A등급"); 
} else if (score >= 80) {
    console.log("B등급");
} else if (score >= 70) {
    console.log("C등급");
} else {
    console.log("재시험")
}

let userAge = 34;
let isMember = true;

if (userAge >= 20 && isMember === true) {
    console.log("회원 서비스를 이용할 수 있습니다.");
}

/* 조건문 병수에 저장 */

let price = 50000;
let freeShippingprice = 30000;

let isFreeShipping = price >= freeShippingprice;

console.log("무료 배송 여부:", isFreeShipping);

if (isFreeShipping) {
    console.log("무료 배송입니다.");
} else {
    console.log("배송비가 추가됩니다.");
}

/* 여러 조건을 사용 할 수 있다 */

let userAge = 19;
let isLogin2 = true;
let isAult = userAge2 >= 20;

if (isLogin2 && isAult) {
    console.log("성인 회원입니다.");
} else if (isLogin2 && !isAdult) {
    console.log("미성년 회원입니다.");
} else {
    console.log("로그인이 필요합니다.");
}



