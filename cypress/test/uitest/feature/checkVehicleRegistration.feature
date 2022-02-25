@registration

Feature: End to end registration status validation

    ####This scenario will wrok for check registration status
    @Regression @postive
    Scenario: Check Registered Vehicle registration via registration information

        Given I am in the vehicle registration check page
        When I click Get Started
        Then I fill in vechile information from data file with status "Vehicle registered"
        Then I continute to check my registration
        Then I should be able to get my registration information as expected


    @Regression @ng
    Scenario: Negative Test - Check invalid Vehicle registration via registration information

        Given I am in the vehicle registration check page
        When I click Get Started
        Then I fill in vechile information from data file with status "Registration cancelled"
        Then I continute to check my registration
        Then I should be able to get my registration information as expected