Feature: Google Search functionality

Background:
 Given Open the browser and enter the URL "https://www.google.com/" 

@GoogleSearch_TC01
Scenario Outline: Test case 1 : Check response on enter a word/Sentence in the search text box
	When Enter a "<word/sentence>" in the search box 
	Then Click on search button
	And Verify sytem should redirect to search page
	And Verify Actual and Expected result
	Examples: 
		| word/sentence   |                
        | happy   |   
        |what is the meaning of goal |
				
@GoogleSearch_TC02
Scenario Outline: Test case 2 : Check response on press enter from the text box
	When Enter a "<word>" in the search box 
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	
	Examples: 
		| word         |                
        | Automation   |  

@GoogleSearch_TC03
Scenario Outline: Test case 3 : Check response on entering max length of search keyword.
	When Enter a "<Text>" in the search box 
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	
	Examples: 
		| Text                                                            |                
        |which is the amazing country in the world and why is it important|

@GoogleSearch_TC04
Scenario Outline: Test case 4 : Check response on entering invalid value in the search field
	When Enter a "<Invalid>" in the search box 
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	And Verify Actual and Expected result for Test Case 5
	
	Examples: 
		| Invalid   |                
        | @@@@@@@   | 
        | ######    |
        
@GoogleSearch_TC05
Scenario: Test case 5 : Check response on entering invalid value in the search field
	When Enter a "" in the search box 
	Then Press enter from the text box

@GoogleSearch_TC06
Scenario: Test case 6 : Check response on auto-suggestion while enter a word
	When Enter a "Automation" in the search box 
	Then list out the auto suggestions
	And  select second one
	
@GoogleSearch_TC07
Scenario: Test case 7 : Verify that the suggestion provided by Google are sorted by most popular/relevant suggestions
	When Enter a "Elon musk" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	
@GoogleSearch_TC08
Scenario Outline:Test case 8 :Verify that user can make search corresponding to different categories
	When Enter a "<categories>" in the search box
	Then Press enter from the text box
	And On header click categories
	And Verify sytem should redirect to search page
	
	Examples: 
		| categories   |                
        | Covid        |
        | Beloved      |
        
@GoogleSearch_TC09
Scenario:  Test case 9 :Verify that misspelled keyword in google search text box 
	When Enter a "Fabook" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	
@GoogleSearch_TC10
Scenario:  Test case 10 :Verify that multi word misspelled keywords
	When Enter a "Amrican coege" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page

@GoogleSearch_TC11
Scenario:  Test case 11 :Verify the performance of search check if the time taken to fetch the response
	When Enter a "India" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	And check response time taken for results
	
@GoogleSearch_TC12
Scenario: Test case 12 :Verify that total number of results fetched for a keyword
	When Enter a "Apple" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	And Verify that total number of results

@GoogleSearch_TC13
Scenario: Test case 13 : Verify Google calculator service make any arithmetic request
	When Enter a "50+90=" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	And check addition value is "140"	
	
@GoogleSearch_TC14
Scenario:  Test case 14 :Verify from google result to navigate to home page and search something
	When Enter a "Tim cook" in the search box
	Then Press enter from the text box
	And Verify sytem should redirect to search page
	And Go back to home page
    And Go forward to existing page
			
		
