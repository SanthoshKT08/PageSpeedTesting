@ProgramPages
Feature: Page Speed Testing - Program Pages

	Testing imarticus program pages

Scenario Outline:: user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/"
	When Click on Enter the Web page URL
	When Enter the Web page URl "<ProgramURL>" 
	Then Click on Anazlyse
	And wait for few minutes
	
	Examples: 
	| ProgramURL |
	|https://www.imarticus.org/certified-investment-banking-operations-program/|
	|https://www.imarticus.org/banking-and-wealth-management-bootcamp/|
	|https://www.imarticus.org/Professional-Certificate-Course-FinTech/|
	|https://www.imarticus.org/financial-analysis-prodegree/|
	|https://www.imarticus.org/credit-risk-underwriting-prodegree/|
	|https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/|
	|https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/|
	|https://www.imarticus.org/data-science-prodegree/|
	|https://www.imarticus.org/machine-learning-prodegree/|
	|https://www.imarticus.org/post-graduate-program-in-data-analytics/|
	|https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/|
	|https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/|
	|https://www.imarticus.org/Digital-Marketing-Prodegree/|
	|https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/|
	
	