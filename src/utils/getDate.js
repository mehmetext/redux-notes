export default function getDate(dateStr) {
	const date = new Date(dateStr);

	const str = date.toLocaleString("tr-TR");

	return str;
}
