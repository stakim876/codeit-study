const productName = "MacBook Pro";
// 문자열 데이터

const ProductPrice = 2490000;
// 숫자 데이터

let prouctDescription;
// 아직 값이 할당하지 않은 상태

const discountCoupon = null;

const productTags = [
    "노트북",
    "Apple",
    "MacBook",
];

// 객체 데이터
const product = {
    id: 101,
    name: productName,
    price: ProductPrice,
    soldOut: isSoldOut,
};

console.log("상품명:", typeof productName);
console.log("가격:", typeof productPrice);
console.log("품절:", typeof isSoldOut);
console.log("설명:", typeof prouctDescription);
console.log("쿠폰:", typeof discountCoupon);

// 배열과 객체 확인
console.log("태그:", productTags);
console.log("상품:", product);

// 배열과 객체 확인
console.log("태그:", productTags);
console.log("상품:", product);

// 배열의 객체 확인
console.log("태그:", productTags);
console.log("상품:", product);

// 배열의 특정 데이터 접근
console.log("첫 번째 태그:", productTags[0]);
console.log("두 번째 테그:", productTags[1]);

// 문자열을 숫자로 변환
const quantityText = "2";
const quantity = Number(quantityText);

console.log("수량:", quantity);
console.log("수량 터입:", typeof quantity);

// 숫자를 문자열로 변환
const priceText = String(productPrice);

console.log("가격:", priceText);
console.log("가격 타입:", typeof priceText);

// 불리언으로 변환
const hasProduct = Boolean(product);

console.log("상품 존재 여부:", hasProduct);

// 구매 가능 여부
const canPurchase = !isSoldOut;

console.log("구매 가능:", canPurchase);

