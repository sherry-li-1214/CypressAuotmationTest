import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import RegistrationCheckPage from '../pages/RegistrationCheckPage';
import CheckResultPage  from "../pages/CheckResultPage";

const registrationCheckPage = new RegistrationCheckPage();
const checkResultPage = new CheckResultPage();
let expectedRegistratedStatus;
Given('I am in the vehicle registration check page',()=>{

    cy.visit('');

})

When('I click Get Started',()=>{
    registrationCheckPage.clickOnGetStartedBtnBtn()
})
 
Then('I fill in vechile information from data file with status {string}',(status)=>{
    //console.log(filename)
    console.log(status)
    expectedRegistratedStatus=status
    registrationCheckPage.fillInVehicleDetails(status)
})

Then('I continute to check my registration',()=>{
    registrationCheckPage.clickOnContinueButton()
})

Then('I should be able to get my registration information as expected',()=>{
    checkResultPage.verifyRegisterInformation(expectedRegistratedStatus)
})