@careerPages 
Feature: Page Speed Testing - Career Pages 

	Testing imarticus career pages

Scenario Outline: : user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/" 
	When Click on Enter the Web page URL 
	When Enter the Web page URl "<careerURL>" 
	Then Click on Anazlyse 
	Then Click on Anazlyse 
	And wait for few minutes 
	And get the page score value "<Row>" and "<Cell>" 
	And get the page Time value "<Row1>" and "<Cell1>" 
	
	Examples: 
		| careerURL                        |  Row |Cell|Row1|Cell1|                        
		|https://www.imarticus.org/careers/|  3 |   3|   3|  4|
		|https://www.imarticus.org/placement/| 4 |   3|   4|  4|
		|https://www.imarticus.org/mentorship/| 5 |   3|   5|  4|
		|https://www.imarticus.org/hackathon/| 6 |   3|   6|  4|
		|https://www.imarticus.org/imarticus-networking/| 7 |   3|   7|  4|
		|https://www.imarticus.org/alumni-network/| 8 |   3|   8|  4|
		|https://www.imarticus.org/testimonials/| 9 |   3|   9|  4|
		|https://www.imarticus.org/data-science-club/| 10 |   3|   10|  4|
		|https://www.imarticus.org/scholarship/| 11 |   3|   11|  4|
	