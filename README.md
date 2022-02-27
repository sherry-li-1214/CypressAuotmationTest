Contents:

1. Purpose of the project
2. Framework Introduction
3. Framework structure
4. Installation and Usage. 

## Purpose of the project
 
The purpose for this project is to serve a technical implementation guideline for automation testing.This framework created as a part of the challenge to facilitate the UI test,but it also could be used as API test framework. 

The project also consider most important factors during automation test:
- Separtate test data from test iself
- Logging and Reporting functionalities
- Screenshots taken for failed test cases , as well as generate  video during the test
- Use POM to manage pages and page elements. which can increase maintenability.

## Framework Introduction
 
### why cypress and BDD
Cypress is a next generation api and front end testing tool built for the modern web. Cypress is very easy to use and you can quickly setup your test autoamtion environment to start your E2E testing .Cypress also integrates huge of functionalites which can benefit your testing.  

With the help for POM and BDD implementation this framework not only helps to reuse the code but also helps to set standard for test scripts.This framework created as a part of the challenge to facilitate the UI test,but it also could be used as API test framework..

### Framework structure
 
There are different folder for different purpose here.
1. **config**      :- This will be used to set configuration for UI & API test individually.

		apiconfig.json - all required configurations for api automation are added under this file. 
		uiconfig.json  - all required configurations for ui automation are added under this file.
3. **fixtures**    :- This will be used to add required test data files.
4. **Reports**     :- After execution of UI test, report will get generate under Report -> UIReports respectively. There will be one file with ExecutionReport.html to see result in HTML format. It generates from result json data.
4. **screenshots** :- All failure screenshots will get generated here.
5. **support**     :- This folder will be used to set global configuration and great place to put behavior that modifies Cypress under support/index.js
6. **test**        :- All test will be taken care from this location.  uitest folder for adding ui test cases in BDD way.
    - test/uitest/features: - All feature files  will be kept here.
    - test/uitest/pages: - All page files  will be kept here.Page file is used to organize the page elements and their behaviors. POM is used to implement this.
    - test/uitest/stepDefinitions: - All step definition  files  will be kept here.Step definition file is used to implement  the specific steps inside feature files. It is recommended that step definition file use the same file name with feature file.
7.  **Videos**      :- All feature execution vidoes gets generated here if Vidoes flag set to true in config/uiconfig.json.  
  
## Installation and execution
 
### Installation
1. Install node from https://nodejs.org/en/download/.

2. Use `npm` package manager and install required dependency.

		npm install

### execution

To run existed UI Test which is under cypress/test/uitest.
		
	npm run ui-test
	
	For Headless Mode, use below command.
	npm run ui-test:headless

	Run using tags, use below command.{node.js}
	npm run ui-test:withTags
### How to add new tests

To add new tests ,follow the below steps:
1. create a feature file inside test/uitest/features:
2. create a step definition file inside test/uitest/stepDefinitions
3. create an page file inside test/uitest/pages, use the example page file to organize the page element and do actions on them  

### Future enhancements and improvements

The framewok should be continuously improved. There are some items should do:
1. separate common steps into an individual file for improving Maintainability
3. Design the wait mechanism for the project even if cypress does provide the wait on elements, however, a customized wait will be better
4. design a hook file to define necessary steps before tests and after tests.
