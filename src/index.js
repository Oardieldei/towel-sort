

module.exports = function towelSort(matrix) {
	let arr = []

	if (!matrix) return arr

	for (let i = 0; i < matrix.length; i++) {
		let newItem = []

		for (let j = 0; j < matrix[i].length; j++) {
			if (i % 2 == 0) {
				newItem.push(matrix[i][j])
			} else {
				newItem.unshift(matrix[i][j])
			}
		}

		arr = arr.concat(newItem)
	}

	return arr
}