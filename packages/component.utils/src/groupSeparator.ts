export default function groupSeparator(
	value: string | number,
	groupSeparator: string = ',',
) {
	if (!value) {
		return value;
	}

	const val = String(value);

	const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);

	if (!cells) {
		return value;
	}

	let int = cells[2] || '0';
	let n = cells[3] || '';
	return int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator) + n;
}
