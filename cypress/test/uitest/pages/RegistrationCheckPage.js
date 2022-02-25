
class RegistrationCheckPage {

    
    //organize locators
    getStartedBtn="a.cta"
    
    vechicleType="[type='radio'][name='VehicleId']"
    vehicleType_CarOrTruck="input#vehicle-type-rdo10"
    vehicleType_MotoCycle="input#vehicle-type-rdo20']"
    vehicleType_CaravanOrTrailer="input#'vehicle-type-rdo30']"

    vehicleIdentificationType="//input[@name='VehicleIdentificationType']"

    regoNumberInput="input#rego-number"
    vinNumberInput="input#vin"
    chassisNumberInput="input#chassis-number"


    continueBtn= "button[type=submit]:contains('Continue')"


    //Account & Billing Details locators
    firstnameInput = "input[name='firstname']"
    lastnameInput = "input[name='lastname']"
    countryDD = "select#input-payment-country"
    regionDD = "select#input-payment-zone"
    continueBtnASGuest = "input#button-guest[value=continue i]"
    //delivery method locators
    shippingMethod = "input[name='shipping_method']"
    continueButtonDeliveryMethod = "input#button-shipping-method[value=continue i]"
    //shipping method locators
    codRadioBtn = "input[name='payment_method'][value='cod']"
    agreeCheckBox = "input[type='checkbox'][name='agree']"
 
    //totalorder amount
    totalOrderAmount = "#collapse-checkout-confirm tfoot tr:nth-of-type(3) td:nth-of-type(2)"
    confirmOrderBtn = "#button-confirm"

    //success message on checkout page
    successHeader = "#common-success h1"
    vehicleData

    /**
     * This method will click on Guest Checkout radio button
     * @returns 
     */
     clickOnGetStartedBtnBtn() {
        cy.get(this.getStartedBtn).contains('Get started').click();
        return this;
    }
    
    /**
     * This will enter rego name under  
     * @param {*} number 
     * @returns 
     */
    enterRegistrationNumber(number) {
        cy.get(this.regoNumberInput).scrollIntoView().clear().type(number);
        return this;
    }
    

    /**
     * This will enter rego name under  
     * @param {*} number 
     * @returns 
     */
     enterVinNumber(number) {
        cy.get(this.vinNumberInput).scrollIntoView().clear().type(number);
        return this;
    }


    /**
     * This will enter rego name under  
     * @param {*} number 
     * @returns 
     */
     enterChassisNumber(number) {
        cy.get(this.chassisNumberInput).scrollIntoView().clear().type(number);
        return this;
    }

    /**
     * This will take details from test data using fixture and fill details for vehicle information
     *  data are available at fixtures/testData/RegistrationInfo.json
     * eg.,  vehicle type,    "vehicle identification","number", "registration status":
     * @param {string} userType 
     */
     fillInVehicleDetails(registrationStatus) {
        cy.fixture('testData/RegistrationInfo.json').as('vehicleDetails');

        //Use alias and identify the object which matched to the information passed from feature file
        cy.get('@vehicleDetails').then((vehicle) => {
            // find the object respective to UserType passed in
            var data = vehicle.filter(item => (item['registration status']== registrationStatus));

            //enter all required details for checking registration
           // cy.get(this.vechicleType).check(data[0]["vehicle type"])
            cy.get(this.vechicleType).check(data[0]["vehicle type value"])
            cy.xpath(this.vehicleIdentificationType).check(data[0]["vehicle identification value"])

            switch(data["vehicle identification"]){
              case 'Registration number':
                  this.enterRegistrationNumber(data[0]["number"]);
                  break;
              case 'Vehicle Identification Number':
              case 'vin':
                this.enterVinNumber(data[0]["number"]); 
                break;  
              case  'Chassis number':
                this.enterChassisNumber(data[0]["number"]);
                break;
              default:
                this.enterRegistrationNumber(data[0]["number"]);     
            }


    /*         cy.get(this.firstName).clear().type(data[0].firstName);
            cy.get(this.lastName).clear().type(data[0].lastName);

            cy.get(this.email).clear().type(e({ domain: data[0].emailDomain }));
            cy.get(this.telephone).clear().type(data[0].telephone);
            cy.get(this.password).clear().type(data[0].password, { log: false });
            cy.get(this.confirmPassword).clear().type(data[0].passwordConfirm, { log: false });

  */ 
       });


    }  
    
    
    /**
    * This method will return success message object
    * @returns 
    */
    getSuccessMessage() {
        return cy.get(this.successHeader);
    }

    /**
    * This method will return total order amount which is at bottom of check out page
    * @returns 
    */
    getTotalOrderAmount() {
        return cy.get(this.totalOrderAmount);
    }

    /**
    * This method will click on Confirm Order button which is at bottom of checkout page and it is final step of checkout process
    * @returns 
    */
    clickOnContinueButton() {
        return cy.get(this.continueBtn).click();

    }
}

export default RegistrationCheckPage