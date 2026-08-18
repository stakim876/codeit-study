const productPrice = 89000;
const quantity = 2;

const shippingFee = 3000;
const discountRate = 0.1;

// 상품 전체 금액
const productTotal = productPrice * quantity;

// 할인 금액
const discountAmont = 
    productTotal * discountRate;

// 할인 적용 금액
const discountedPrice = 
    productTotal - discountAmont;

// 최종 결제 금액
const finalPrice = 
    discountedPrice + shippingFee;
    
    console.log("상품 금액:", productTotal);
    console.log("할인 금액:", discountAmont);
    console.log("배송비:", shippingFee);
    console.log("최종 금액:", finalPrice);

// 비교 연산자 
const isFeeShippingLimit = 50000;

const isFeeShipping = 
    discountedPrice >= freeShippingLimit;

console.log("무료 배송:", isFeeShipping);

//로그인 여부
const isLoggedIn = true;
const hasStock = true;

// 논리 AND 연산자
const canOrer = 
    isLoggedIn && hasStock;

console.log("주문 가능:", canOrder);

// 논리 OR 연산자
const copon = null;
const prouctDescription = 5000;

const appliedDiscount = 
    coupon || defaultDiscount;

// 증가 연산자
let cartCount = 1;

cartCount++;

console.log("장바구니", cartCount);

// 복합 할당 연산자
let point = 1000;

point += 500;
point -= 200;

console.log("현재 포안트", point);