const products = ["노트북", "무선 키보드", "마우스", "모니터"];

products.forEach(function (product) {
    console.log("전체 상품:", product);
});

const upperProducts = products.map(function (product) {
    return product + " 구매하기";
});

console.log(upperProducts);
