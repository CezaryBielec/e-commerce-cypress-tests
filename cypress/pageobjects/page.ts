abstract class Page {
    
    visit(url: string = '') {
        cy.visit(`/${url}`)
        return this;
    }

    getUrl() {
        return cy.url();
    }

    protected getValidationText(validationSelector: string) {
        return cy.get(validationSelector).then(el => {
            return el.text().replace(/\n+\t+/g,'');
        });
    }
}
export default Page;