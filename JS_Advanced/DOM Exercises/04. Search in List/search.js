function search() {
   let match = document.getElementById('searchText').value;
   let cities = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let count = 0;

   for (const city of cities) {
      if(city.textContent.includes(match) && match !== '') {
         count++;
         city.style.fontWeight = 'bold';
         city.style.textDecoration = 'underline';
      } else {
         city.style.fontWeight = 'normal';
         city.style.textDecoration = 'none';
      }
   }

   result.textContent = `${count} matches found`;
}
