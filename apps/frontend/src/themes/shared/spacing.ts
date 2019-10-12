function calculateSpacing(multiplier?: number | Array<number>) {
    if (Array.isArray(multiplier)) {
        return multiplier.map((number) => `${number * 1}em`).join(' ');
    }

    return `${(multiplier || 1) * 1}em`;
}

export default {
    spacing: (multiplier?: number) => calculateSpacing(multiplier),
};
