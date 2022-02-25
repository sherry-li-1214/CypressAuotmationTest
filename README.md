Contents:

1. Purpose of the project
2. Introduction of Cypress and its framework
3. Framework structure
4. Installation and Usage

Purpose of the project
------------------------
The purpose for this project is to serve a technical implementation guideline for automation testing. With the help from BDD implementation this framework not only helps to reuse the code but also helps to set standard for test scripts.This framework created as a part of the challenge to facilitate the UI test,but it also could be used as API test framework. 

The project also consider most important factors during automation test:
1.Separtate test data from test iself
2.Logging and Reporting functionalities
3.Screenshots taken for failed test cases , as well as generate  video during the test
4.Use POM to manage pages and page elements. which can increase maintenability.

Framework Introduction
------------------------
* why cypress
Cypress is a next generation api and front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress. 

With the help for POM and BDD implementation this framework not only helps to reuse the code but also helps to set standard for test scripts.This framework created as a part of the challenge to facilitate the UI test,but it also could be used as API test framework..



* Framework structure
-------------------
There are different folder for different purpose here.
1. **config**      :- This will be used to set configuration for UI & API test individually.

		apiconfig.json - all required configurations for api automation are added under this file. 
		uiconfig.json  - all required configurations for ui automation are added under this file.
3. **fixtures**    :- This will be used to add required test data files.
4. **Reports**     :- After execution of UI test, report will get generate under Report -> UIReports respectively. There will be one file with ExecutionReport.html to see result in HTML format. It generates from result json data.
4. **screenshots** :- All failure screenshots will get generated here.
5. **support**     :- This folder will be used to set global configuration and great place to put behavior that modifies Cypress under support/index.js
6. **test**        :- All test will be taken care from this location.  uitest folder for adding ui test cases in BDD way.
7. ""test\unitest\feature"
7. **Videos**      :- All feature execution vidoes gets generated here if Vidoes flag set to true in config/apiconfig.json or config/uiconfig.json. 



Installation and usage
------------------------

* Installation
1. Install node from https://nodejs.org/en/download/.

2. Use `npm` package manager and install required dependency.

		npm install

* Usage
-----
To run UI Test which is under cypress/test/uitest.
		
	npm run ui-test
	
	For Headless Mode, use below command.
	npm run ui-test:headless

	Run using tags, use below command.
	npm run ui-test:withTags



