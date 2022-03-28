abstract class Page {

    visit(url: string = '') {
        cy.visit(`/${url}`)
        return this;
    }

    getUrl() {
        return cy.url();
    }

    protected normalizeText(text: string) {
        return text.replace(/\n+\t+/g, '');
    }

    protected normalizePrice(dollarStringPrice: string): number {
        return parseFloat(dollarStringPrice.replace("$", ""));
    }

    protected normalizeDiscount(discountValue: string): number {
        return parseFloat(discountValue.replace("%", "").replace("-", "")) / 100;
    }

    protected calculatePriceAfterDiscount(originalPrice: number, discountValue: number): number {
        return parseFloat((originalPrice - (originalPrice * discountValue)).toFixed(2));
    }
}
export default Page;