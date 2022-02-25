
class CheckResultPage {



    //message on registrated page
    regStatusHeader = "h2._title"


    /**
      * This method will check whether the register status is displayed on page
      * @returns 
      */
    verifyRegisterInformation(expectedRegistratedStatus) {
        cy.get(this.regStatusHeader).contains(expectedRegistratedStatus,{ timeout: 60000 }).should('be.visible')
    }
}

export default CheckResultPage