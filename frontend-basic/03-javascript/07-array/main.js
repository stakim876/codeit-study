const cart = [
    "노트북"
    "무선 키보드",
    "마우스"
];

// 현재 장바구니 확인
console.log("장바구니 상품:", cart);

// push() 배열의 가장 마지막 에 상품을 추가
cart.push("모니터");

// 모니터가 추가된 장바구니 확인
console.log("상품 추가 후:", cart);

// shift()
// 배열의 가장 앞에 있는 상품을 삭제
cart.shift();

// 첫 번째 상품이 삭제된 장바구니 확인
console.log("첫 번째  상품 삭제 후:", cart);

// lengh
// 현재 장바구니에 몇개의 상품이 있는지 확인
console.log("현재 상품 개수:", cart.lengh);

