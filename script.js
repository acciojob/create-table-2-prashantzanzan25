function createTable() {
    const numRows = parseInt(prompt("Input number of rows"));
	const numCols = parseInt(prompt("Input number of columns"));
	const table = document.getElementById("myTable");

    table.innerHTML = '';
	for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
			
			cell.textContent = `Row-${i} Column-${j}`;
			
			row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

