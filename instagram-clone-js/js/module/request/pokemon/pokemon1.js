// ===== 상수 선언 ==== //
const DISABLED = 'disabled';

// ===== DOM 캐싱 ===== //
const pokeContainer = document.querySelector('.pokemon-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const loadingSpinner = document.querySelector('#loading');

// ===== 전역 변수 선언 =====//
const url = 'https://pokeapi.co/api/v2/pokemon';

let offset = 0; // 시작 위치
let limit = 45; // 가져올 개수

let pokeCount; // 총 포켓몬 수

// 로딩 스피너의 토글 플래그
let isLoading = false;

// ===== 함수 정의 ===== //

// 목록만 받으면 이름·url뿐이라, 각자 url을 동시에 다시 요청해서 이미지까지 받음
const renderPokemonList = async (pokemonList) => {

  pokeContainer.innerHTML = '';

  const detailList = await Promise.all(
    pokemonList.map(pokeData =>
      fetch(pokeData.url).then(res => res.json()))
  );

    
  for (const pokemon of detailList) {

    // 각 포켓몬의 상세정보를 다시 서버에 재요청
    const imgSrc = pokemon.sprites.front_default;

    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    newDiv.innerHTML = `
      <img src="${imgSrc}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
    `;

    pokeContainer.append(newDiv);
  }
};

// 포켓몬 목록을 서버에서 불러오는 함수
async function getPokemon() {


// 로딩 스피너를 활성화
isLoading = true;
loadingSpinner.computedStyleMap.opacity = '1';

const res = await fetch(`${url}/?offset=${offset}&limit=${limit}`);
const { count, results } = await res.json();
pokeConunt = count;

// 화면에 포켓몬 그리기
renderPokemonList(results);

isLoading = false;
loadingSpinner.style.opacity = '0';
}

// ===== 이벤트 핸들러 바이딩 ===== //

// 다음 버튼 클릭시
nextBtn.addEventListener('click', event => {

    if (isLoading) return;

    // 이전버튼을 활성화
    prevBtn.removeAttribute(DISABLED);
    // offset을 조정
    offset += limit;
    if (offset > pokeCount) {
      pokeContainer.textContent = '다음 포켓몬 데이터가 없습니다.';
      nextBtn.setAttribute(DISABLED, true);
      return;  
    }
    getPokemon();
});

// 이전: offset을 limit만큼 당기고 다시 요청
prevBtn.addEventListener('click', event => {

    if (isLoading) return;

    nextBtn.removeAttribute(DISABLED);
    // offset을 조정
    offset -= limit;
    if (offset < 0) {
      offset = 0;
      pokeContainer.textContent = '이전 포켓몬 데이터가 없습니다.';
      prevBtn.setAttribute(DISABLED, true);
      return;  
    }
    getPokemon();
});


// 시작하자마자 첫 페이지 요청
getPokemon();
