@HomePage-GTmetix
Feature: Page Speed Testing GTmetrix - Home Page

	Testing imarticus home page

Scenario Outline:user navigates to the Application 
	Given Enter the URL "https://gtmetrix.com/"
	When Click on Login in
	When Enter the Email "santhosh@codewave.in" and password "1@santhosh"
	When Click on login
	When Select the region
	When Enter the page URL "<ProgramURL>"
	When Click on GTmetrix Anazlyse
	Then get the getGTmetixData "<RowValue>"
	
	Examples: 
	    | ProgramURL                                    |   RowValue    |
	    |http://imarticus.org/                          |      2        |