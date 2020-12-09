@careerPages 
Feature: Page Speed Testing - Career Pages 

	Testing imarticus career pages

Scenario Outline: : user navigates to the Application 
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
	