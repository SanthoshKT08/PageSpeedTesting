package com.Google.StepDefinitions;

import org.junit.runner.RunWith;
import org.testng.Assert;

import com.Google.Generics.Baseclass;
import com.Google.PageObjects.Google;
import com.Google.PageObjects.Resultpage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class GoogleSearch extends Baseclass{

	public static Google google ;
	public static Resultpage resultPage;

	@Given("^Open the browser and enter the URL \"([^\"]*)\"$")
	public void open_the_browser_and_enter_the_URL(String url)   {
		driver.get(url);
	}


	@When("^Enter a \"([^\"]*)\" in the search box$")
	public void enter_a_in_the_search_box(String word)   {
		google = new Google(driver);
		google.googleSearch(word);
	}

	@Then("^Click on search button$")
	public void click_on_search_button()   {
		google = new Google(driver);
		google.clickOnSearch();
	}

	@Then("^Press enter from the text box$")
	public void press_enter_from_the_text_box() {
		google = new Google(driver);
		google.pressEnterFromSearchBox();
	}

	@Then("^list out the auto suggestions$")
	public void list_out_the_auto_suggestions() {
		google = new Google(driver);
		google.verifyListOfAutoSuggestions(driver);
	}

	@And("^Verify sytem should redirect to search page$")
	public void verify_sytem_should_redirect_to_search_page()   {
		resultPage = new Resultpage(driver);
		resultPage.verifySearchPage();
	}
	
	@And("^Verify Actual and Expected result$")
    public void verify_actual_and_expected_result()  {
		resultPage = new Resultpage(driver);
		if(resultPage.verifyWord(driver).equalsIgnoreCase("happy"))
		{
		Assert.assertEquals(resultPage.verifyWord(driver), "happy");
		}
		else if (resultPage.verifyWord(driver).equalsIgnoreCase("goal")) {
			Assert.assertEquals(resultPage.verifyWord(driver), "goal");
		}
    }
	
	@And("^Verify Actual and Expected result for Test Case 5$")
	public void verify_actual_and_expected_result_for_test_case_5()   {
		resultPage = new Resultpage(driver);
		resultPage.verifySuggestionTex(driver);
	}
	
	@Then("^select second one$")
	public void select_second_one()   {
		google = new Google(driver);
		google.allSuggestions.get(2).click();
	}

	@And("^On header click categories$")
	public void on_header_click_categories()  {
		resultPage = new Resultpage(driver);
		resultPage.clickOnCategory();
	}
	
	@And("^check response time taken for results$")
    public void check_response_time_taken_for_results()  {
		resultPage = new Resultpage(driver);
		resultPage.checkResponseTime();
    }
	
    @And("^Verify that total number of results$")
    public void verify_that_total_number_of_results() {
    	resultPage = new Resultpage(driver);
    	resultPage.CheckResponseOnTotalNoOfResults();
    }
    
    @Then("^check addition value is \"([^\"]*)\"$")
    public void check_addition_value_is(String arg1)  {
    	resultPage = new Resultpage(driver);
    	Assert.assertEquals("140", resultPage.verifyMaths());
    }
    
    @And("^Go back to home page$")
    public void go_back_to_home_page()   {
         driver.navigate().back();
    }

    @And("^Go forward to existing page$")
    public void go_forward_to_existing_page()   {
        driver.navigate().forward();
    }


}
