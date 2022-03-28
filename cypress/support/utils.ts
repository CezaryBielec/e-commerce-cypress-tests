export const idSelector = (id: string): string => {
    return `[id='${id}']`
}

export const classSelector = (className: string): string => {
    return `[class='${className}']`;
}

export const normalizePrice = (dollarStringPrice: string): number => {
    return parseFloat(dollarStringPrice.replace("$", ""));
}

export const normalizeDiscount = (discountValue: string): number => {
    return parseFloat(discountValue.replace("%", "").replace("-", "")) / 100;
}

export const calculatePriceAfterDiscount = (originalPrice: number, discountValue: number): number => {
    return parseFloat((originalPrice - (originalPrice * discountValue)).toFixed(2));
}