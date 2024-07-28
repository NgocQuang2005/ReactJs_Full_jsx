export let Formats = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // hien thi so o sau bao nhieu so 0
    maximumFractionDigits: 0, // làm tròn
});