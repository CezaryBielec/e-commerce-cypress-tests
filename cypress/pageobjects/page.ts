abstract class Page {
    
    visit(url: string = '') {
        cy.visit(`/${url}`)
        return this;
    }

    getUrl() {
        return cy.url();
    }
}
export default Page;