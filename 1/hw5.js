const chess = {
    gameContainerEl: document.getElementById('chess'),

    showMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const columns = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < columns.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === 0 && columns[col] !== 0) {
                    td.innerHTML = columns[col];
                } else if (columns[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row];
                }

                if (this.blackCellCheck(row, col)) {
                    td.style.backgroundColor = 'black';
                }
            }
        }
    },


    blackCellCheck(rowNumber, columnNumber) {
        if (rowNumber === 0 || columnNumber === 0 || rowNumber === 9 || columnNumber === 9) {
            return false;
        } else if ((rowNumber + columnNumber) % 2 === 1) {
            return true;
        }
    },
};

chess.showMap();