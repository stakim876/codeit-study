const users = [
  {
    username: 'yuna',
    profile: {
      bio: '새벽에 뜁니다.',
      link: {
        url: 'yuna.run',
        label: '러닝 기록'
      }
    },
  },
  {
    username: 'dahye',
    profile: {
      bio: '밤 산책러'
    }
  },
  {
    username: 'minji'
  }
];

for (const user of users) {
  // ?. 없으면 profile/link가 없을 때 에러
  const url = user.profile?.link?.url ?? '링크 없음';
  console.log(`${user.username}: ${url}`);
}
