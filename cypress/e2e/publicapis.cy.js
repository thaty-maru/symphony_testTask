describe('API Test', () => {
    it('Get PublicAPIs', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.publicapis.org/entries'
        }).as('publicAPIs')
        cy.get('@publicAPIs')
        .should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.count).to.equal(1427)
            expect(response.body.entries).to.have.length(1427)
        })
        .then((response) =>{
            let array = response.body.entries
            let entries = array.filter(entry => entry.Category.indexOf('Authentication & Authorization') !== -1)
            expect(Cypress._.every(entries, ['Category', 'Authentication & Authorization'])).to.deep.equal(true)
            console.log(entries.length)
            console.log(entries)
        })
    })
})