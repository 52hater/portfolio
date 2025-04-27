const blogPosts = [
    {
        id: 'post1',
        title: 'Cubase12 시작하기',
        date: '2025-04-01',
        categories: ['sequence', 'mix'],
        summary: 'Cubase12의 기초와 녹음 및 믹싱 방법에 대해 알아봅니다.',
        content: `
# Cubase12 시작하기

Cubase12는 전문적인 녹음 및 믹싱을 직관적인 사용자 인터페이스로 구축한 시퀀스 프로그램입니다.

## 컴포넌트 생성하기

React의 핵심은 컴포넌트입니다. 컴포넌트는 UI의 독립적이고 재사용 가능한 부분입니다.

함수형 컴포넌트는 다음과 같이 작성할 수 있습니다:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

## JSX 사용하기

JSX는 JavaScript의 확장 문법으로, React 엘리먼트를 생성하는 데 사용됩니다.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

JSX를 사용하면 HTML과 유사한 문법으로 UI를 정의할 수 있습니다.
`
    },
    {
        id: 'post2',
        title: 'CSS Grid 활용법',
        date: '2025-03-25',
        categories: ['CSS', 'Design'],
        summary: 'CSS Grid를 활용한 레이아웃 구성에 대해 알아봅니다.',
        content: `
# CSS Grid 활용법

CSS Grid는 웹 페이지의 레이아웃을 2차원적으로 구성할 수 있는 강력한 도구입니다.

## 기본 사용법

CSS Grid는 컨테이너에 \`display: grid\`를 적용하는 것으로 시작합니다.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
\`\`\`

## 그리드 템플릿 영역

그리드 템플릿 영역을 사용하면 레이아웃을 시각적으로 정의할 수 있습니다.

\`\`\`css
.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 10px;
}
\`\`\`

이 방식으로 복잡한 레이아웃도 직관적으로 구성할 수 있습니다.
`
    },
    {
        id: 'post3',
        title: 'JavaScript 비동기 프로그래밍',
        date: '2025-03-10',
        categories: ['JavaScript', 'Programming'],
        summary: 'Promise, async/await를 활용한 비동기 프로그래밍에 대해 알아봅니다.',
        content: `
# JavaScript 비동기 프로그래밍

JavaScript에서 비동기 작업을 처리하는 방법은 계속 발전해왔습니다.

## Promise

Promise는 비동기 작업의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체입니다.

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('결과 데이터');
  }, 1000);
});

promise.then(data => {
  console.log(data); // "결과 데이터"
});
\`\`\`

## Async/Await

async/await는 Promise를 더 쉽게 사용할 수 있는 문법적 설탕입니다.

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

async/await를 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있어 가독성이 좋아집니다.
`
    }
];

export default blogPosts;