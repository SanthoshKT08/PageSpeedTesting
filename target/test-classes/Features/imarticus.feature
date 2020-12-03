@HomePage
Feature: Page Speed Testing - Home Page

	Testing imarticus home page

Scenario Outline:: user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/"
	When Click on Enter the Web page URL
	When Enter the Web page URl "http://imarticus.org/"
	Then Click on Anazlyse
	And wait for few minutes
	And get the page score value "<Row>" and "<Cell>"
	And get the page Time value "<Row1>" and "<Cell1>"
	
	Examples: 
	| Row | Cell | Row1| Cell1| 
	| 2   |  3   |  2 |   4   |
	

