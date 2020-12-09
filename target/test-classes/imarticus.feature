@HomePage
Feature: Page Speed Testing - Home Page

	Testing imarticus home page

Scenario Outline:: user navigates to the Application 
	Given Enter the URL "https://developers.google.com/speed/pagespeed/insights/"
	When Enter the Web page URl "http://imarticus.org/"
	Then Click on Anazlyse
	And wait for few minutes
	And get the page URL and write to Excel "<RowURl>" and "<cellURL>"
	And get the page score value "<Row>" and "<Cell>"
	And get the page Time value "<Row1>" and "<Cell1>"
	And Click on Desktop to view the score and time
	And wait for few minutes
	And get the page score value for desktop "<DSRow>" and "<DScell>"
	And get the page Time value for desktop "<DTRow>" and "<DTcell>"
	
	Examples: 
	|RowURl|cellURL| Row | Cell | Row1| Cell1| DSRow|DScell|DTRow|DTcell|
	|2     |  2    | 2   |  3   |  2 |   4   | 2    | 5    | 2    | 6   |
	
