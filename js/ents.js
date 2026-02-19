
//------------------------------------------------------------------------
// Entity List Table
//------------------------------------------------------------------------
const entlist = document.getElementById('entlist_body');

//------------------------------------------------------------------------
// Filter
//------------------------------------------------------------------------
const entlist_filter_game = document.getElementById('entlist_filter_game');
const entlist_filter_status = document.getElementById('entlist_filter_status');

function FilterTable()
{
	//entlist.style.display = 'none';
	
	// Hide rows that don't match the filters, show rows that do
	for (const row of entlist.rows)
	{
		if (entlist_filter_game.value != "any")
		{
			if (row.dataset.game == entlist_filter_game.value)
			{
				row.style.display = 'table-row';
			}
			else
			{
				row.style.display = 'none';
				continue;
			}
		}
		else
			row.style.display = 'table-row';
        
		if (entlist_filter_status.value != "any")
		{
			if (row.cells[1].textContent == entlist_filter_status.value)
			{
				row.style.display = 'table-row';
			}
			else
			{
				row.style.display = 'none';
				continue;
			}
		}
    }
	
	//entlist.style.display = 'block';
}

//------------------------------------------------------------------------
// Sort
//------------------------------------------------------------------------
var ascendColumns = [true, true, true];

const compareRowsDefault = function(n, bAscend) {
	return (a,b) => {
		// Should these rows switch place?
		if (bAscend)
		{
			if (a.cells[n].textContent > b.cells[n].textContent)
			{
				return 1;
			}
		}
		else
		{
			if (a.cells[n].textContent < b.cells[n].textContent)
			{
				return 1;
			}
		}
		return 0;
	};
};

function SortTableByColumn(n, compareFunc = compareRowsDefault)
{
	//entlist.style.display = 'none';
	
	var bAscend = ascendColumns[n];
	var rows = Array.from(entlist.rows);
	
	rows.sort(compareFunc(n, bAscend));
	
	const fragment = document.createDocumentFragment();
	rows.forEach(function(row) {
        fragment.appendChild(row);
    });
	
	entlist.replaceChildren(fragment);
	
	// Descend next time
	ascendColumns[n] = !ascendColumns[n];
	
	//entlist.style.display = 'block';
}

function SortTableClassname()
{
	SortTableByColumn(0);
}

function SortTableStatus()
{
	const compareStatus = function(n, bAscend) {
		return (a,b) => {
			// Should these rows switch place?
			const statusArray = [
				'N',		// New
				'P',		// Ported
				'R',		// Replicated/Restored
				'C',		// Changed
				'A',		// Affected
				'O',		// Obsolete
				'S',		// Stock
			]
			if (bAscend)
			{
				if (statusArray.indexOf(a.cells[n].textContent[0]) > statusArray.indexOf(b.cells[n].textContent[0]))
				{
					return 1;
				}
			}
			else
			{
				if (statusArray.indexOf(a.cells[n].textContent[0]) < statusArray.indexOf(b.cells[n].textContent[0]))
				{
					return 1;
				}
			}
			return 0;
		};
	};

	SortTableByColumn(1, compareStatus);
}

function SortTableSummary()
{
	SortTableByColumn(2);
}

//------------------------------------------------------------------------
