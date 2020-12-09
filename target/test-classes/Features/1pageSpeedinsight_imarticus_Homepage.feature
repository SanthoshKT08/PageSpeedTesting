@HomePage
Feature: Page Speed Testing - Home Page

	Testing imarticus home page

Scenario Outline: user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/"
	When Enter the Web page URl "http://imarticus.org/"
	Then Click on Anazlyse
	And wait for few minutes
	And get the pageSpeedDatas "<PageSpeedData>"

	Examples: 
	|PageSpeedData|
	|2            |
	
	
