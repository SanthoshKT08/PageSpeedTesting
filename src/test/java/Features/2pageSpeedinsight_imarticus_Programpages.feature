@ProgramPages 
Feature: Page Speed Testing - Program Pages 

	Testing imarticus program pages

Scenario Outline: : user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/" 
	When Enter the Web page URl "<ProgramURL>" 
	Then Click on Anazlyse 
	Then Click on Anazlyse
	And wait for few minutes
	And get the pageSpeedDatas "<PageSpeedData>"
	
	Examples: 
		| ProgramURL                                                                               | PageSpeedData |
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
		
	