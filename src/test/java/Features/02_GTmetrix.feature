@GTmetrix-PageSpeedTesting
Feature: Page Speed Testing on GTmetrix tool - For Homepage, Career pages and Program pages.

Scenario Outline: Tester testing on imarticus home page - page speed testing in GTmetrix tool
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
		
@CareerPages-Imarticus			
Scenario Outline: Tester testing on imarticus home page - page speed testing in GTmetrix tool
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
		
@ProgramPages-Imarticus			
Scenario Outline: Tester testing on imarticus home page - page speed testing in GTmetrix tool
	Given Enter the URL "https://gtmetrix.com/" 
	When Click on Login in 
	When Enter the Email "santhosh@codewave.in" and password "1@santhosh" 
	When Click on login 
	When Enter the page URL "<ProgramURL>" 
	When Click on GTmetrix Anazlyse 
	Then get the getGTmetixData "<RowValue>" 
	
	Examples: 
		| ProgramURL                                                                               |   RowValue    |
		|https://www.imarticus.org/banking-and-wealth-management-bootcamp/                         |      12       |
		|https://www.imarticus.org/Professional-Certificate-Course-FinTech/                        |      13       | 
		|https://www.imarticus.org/financial-analysis-prodegree/                                   |      14       |                                                   
		|https://www.imarticus.org/credit-risk-underwriting-prodegree/                             |      15       |
		|https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/                |      16       |
		|https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/       |      17       | 
		|https://www.imarticus.org/data-science-prodegree/                                         |      18       |
		|https://www.imarticus.org/machine-learning-prodegree/                                     |      19       |
		|https://www.imarticus.org/post-graduate-program-in-data-analytics/                        |      20       |
		|https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/ |      21       |
		|https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/               |      22       |
		|https://www.imarticus.org/Digital-Marketing-Prodegree/                                    |      23       |
		|https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/      |      24       |
		|https://www.imarticus.org/certified-investment-banking-operations-program/                |      25       |