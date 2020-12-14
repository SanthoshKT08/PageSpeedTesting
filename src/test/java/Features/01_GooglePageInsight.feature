@GooglepageInsight-PageSpeedTesting 
Feature: Page Speed on Testing Google page insight - For Homepage, Career pages and Program pages.

@HomePage-Imarticus
Scenario Outline: Tester testing on imarticus home page - page speed testing in Google page insight
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/" 
	When Enter the Web page URl "http://imarticus.org/" 
	Then Click on Anazlyse 
	And wait for few minutes 
	And get the pageSpeedDatas "<PageSpeedData>" 
	
	Examples: 
		|PageSpeedData|
		|2            |
		
@CareerPages-Imarticus	
Scenario Outline: : Tester testing on imarticus Career pages - page speed testing in Google page insight
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/" 
	When Enter the Web page URl "<careerURL>" 
	Then Click on Anazlyse
	And wait for few minutes
	And get the pageSpeedDatas "<PageSpeedData>"
	
	Examples: 
		| careerURL                                     |    PageSpeedData  |                 
		|https://www.imarticus.org/careers/             |        3          |
		|https://www.imarticus.org/placement/           |        4          |
		|https://www.imarticus.org/mentorship/          |        5          |
		|https://www.imarticus.org/hackathon/           |        6          |
		|https://www.imarticus.org/imarticus-networking/|        7          |
		|https://www.imarticus.org/alumni-network/      |        8          |
		|https://www.imarticus.org/testimonials/        |        9          |
		|https://www.imarticus.org/data-science-club/   |        10         | 
		|https://www.imarticus.org/scholarship/         |        11         |
		
@ProgramPages-Imarticus		
Scenario Outline: : Tester testing on imarticus Program pages - page speed testing in Google page insight
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
		
		
