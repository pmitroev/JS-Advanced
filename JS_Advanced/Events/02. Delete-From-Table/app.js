function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArr = Array.from(rows);

    let deleted = false;

    for (const row of rowsArr) {
        const col = row.children[1];
 
        if (col.textContent == input) {
            row.remove();
            deleted = true;
            
        } 
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.'

}