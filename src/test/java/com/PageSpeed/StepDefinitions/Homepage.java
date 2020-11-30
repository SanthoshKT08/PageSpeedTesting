package com.PageSpeed.StepDefinitions;

import java.util.ArrayList;

import org.junit.runner.RunWith;

import com.PageSpeed.Generics.Baseclass;
import com.PageSpeed.Generics.FileUtilities;
import com.PageSpeed.PageObjects.pagespeedPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class Homepage extends Baseclass {
	public static pagespeedPage speed;

	@Given("^Enter the URL \"([^\"]*)\"$")
	public void enter_the_URL(String URL) throws Throwable {
		driver.get(URL);
	}

	@When("^Click on Enter the Web page URL$")
	public void click_on_Enter_the_Web_page_URL() throws Throwable {
		speed = new pagespeedPage(driver);
		speed.clickOnURL();
	}

	@When("^Enter the Web page URl \"([^\"]*)\"$")
	public void enter_the_Web_page_URl(String url) throws Throwable {
		speed = new pagespeedPage(driver);
		speed.enterTheURL(url);
	}

	@Then("^Click on Anazlyse$")
	public void click_on_Anazlyse() throws Throwable {
		speed = new pagespeedPage(driver);
		speed.clickOnAnalyze();
	}

	@And("^wait for few minutes$")
	public void wait_for_few_minutes() throws Throwable {
		speed = new pagespeedPage(driver);
		speed.verifymobileText(driver);
		Thread.sleep(3000);
		speed.viewScore(driver);
		speed.view(driver);
		Thread.sleep(2000);
		speed.viewTime(driver);

	}

	@And("^get the value to ExcelSheet \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_value_to_excelsheet_something_and_something(int row, int cell) throws Throwable {
		speed = new pagespeedPage(driver);
		ArrayList<String> go = speed.viewScore(driver);
		for (String well : go) {
			FileUtilities.getscoreValue(row, cell, well);
		}
		
	}

}
