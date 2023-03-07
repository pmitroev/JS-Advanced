async function solution() {
   
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}