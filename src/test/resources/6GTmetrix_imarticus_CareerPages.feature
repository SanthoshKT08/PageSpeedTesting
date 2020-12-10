@HomePage-GTmetix
Feature: Page Speed Testing GTmetrix - Home Page

	Testing imarticus home page

Scenario Outline:user navigates to the Application 
	Given Enter the URL "https://gtmetrix.com/"
	When Click on Login in
	When Enter the Email "santhosh@codewave.in" and password "1@santhosh"
	When Click on login
	When Enter the page URL "<ProgramURL>"
	When Click on GTmetrix Anazlyse
	Then get the getGTmetixData "<RowValue>"
	
	Examples: 
	    | ProgramURL                                                                               |   RowValue    |
	    |https://www.imarticus.org/careers/                                                        |      3        |
		|https://www.imarticus.org/placement/                                                      |      4        |
		|https://www.imarticus.org/mentorship/                                                     |      5        |
		|https://www.imarticus.org/hackathon/                                                      |      6        |
		|https://www.imarticus.org/imarticus-networking/                                           |      7        |
		|https://www.imarticus.org/alumni-network/                                                 |      8        |
		|https://www.imarticus.org/testimonials/                                                   |      9        |
		|https://www.imarticus.org/data-science-club/                                              |      10       | 
		|https://www.imarticus.org/scholarship/                                                    |      11       |