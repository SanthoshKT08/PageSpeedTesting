@ProgramPages 
Feature: Page Speed Testing - Program Pages 

	Testing imarticus program pages

Scenario Outline: : user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/" 
	When Click on Enter the Web page URL 
	When Enter the Web page URl "<ProgramURL>" 
	Then Click on Anazlyse 
	And wait for few minutes 
	And get the page score value "<Row>" and "<Cell>" 
	And get the page Time value "<Row1>" and "<Cell1>" 
	
	Examples: 
		| ProgramURL |Row |Cell|Row1|Cell1|     
		|https://www.imarticus.org/banking-and-wealth-management-bootcamp/|  12 |  3  | 12 |  4 |
		|https://www.imarticus.org/Professional-Certificate-Course-FinTech/|13 |  3  | 13 |  4 |
		|https://www.imarticus.org/financial-analysis-prodegree/|14 |  3  | 14 |  4 |
		|https://www.imarticus.org/credit-risk-underwriting-prodegree/|15 |  3  | 15 |  4 |
		|https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/|16 |  3  | 16 |  4 |
		|https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/|17 |  3  | 17 |  4 |
		|https://www.imarticus.org/data-science-prodegree/|18 |  3  | 18 |  4 |
		|https://www.imarticus.org/machine-learning-prodegree/|19 |  3  | 19 |  4 |
		|https://www.imarticus.org/post-graduate-program-in-data-analytics/|20 |  3  | 20 |  4 |
		|https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/|21 |  3  | 21 |  4 |
		|https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/|22 |  3  | 22 |  4 |
		|https://www.imarticus.org/Digital-Marketing-Prodegree/|23|  3  | 23 |  4 |
		|https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/|24 |  3  | 24 |  4 |
		|https://www.imarticus.org/certified-investment-banking-operations-program/|25 |  3  | 25 |  4 |
		
	