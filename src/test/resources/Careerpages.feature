@careerPages
Feature: Page Speed Testing - Career Pages

	Testing imarticus career pages

Scenario Outline:: user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/"
	When Click on Enter the Web page URL
	When Enter the Web page URl "<careerURL>" 
	Then Click on Anazlyse
	And wait for few minutes
	
	Examples: 
	| careerURL |
	|https://www.imarticus.org/careers/|
	|https://www.imarticus.org/placement/|
	|https://www.imarticus.org/mentorship/|
	|https://www.imarticus.org/mentorship/|
	|https://www.imarticus.org/hackathon/|
	|https://www.imarticus.org/imarticus-networking/|
	|https://www.imarticus.org/alumni-network/|
	|https://www.imarticus.org/testimonials/|
	|https://www.imarticus.org/data-science-club/|
	|https://www.imarticus.org/scholarship/|
	