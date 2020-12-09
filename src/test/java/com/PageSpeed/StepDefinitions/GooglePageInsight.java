package com.PageSpeed.StepDefinitions;

import java.io.IOException;

import org.junit.runner.RunWith;
import com.PageSpeed.Generics.Baseclass;
import com.PageSpeed.PageObjects.PageSpeedInsightObject;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class GooglePageInsight extends Baseclass {
	
	public static PageSpeedInsightObject speed;

	@Given("^Enter the URL \"([^\"]*)\"$")
	public void enter_the_URL(String URL) throws Throwable {
		driver.get(URL);
	}

	@When("^Enter the Web page URl \"([^\"]*)\"$")
	public void enter_the_Web_page_URl(String url) throws Throwable {
		speed = new PageSpeedInsightObject(driver);
		speed.enterTheURL(url);
	}

	@Then("^Click on Anazlyse$")
	public void click_on_Anazlyse() throws Throwable {
		speed = new PageSpeedInsightObject(driver);
		speed.clickOnAnalyze();
	}

	@And("^wait for few minutes$")
	public void wait_for_few_minutes() throws Throwable {
		speed = new PageSpeedInsightObject(driver);
		speed.verifymobileText(driver);
		Thread.sleep(3000);
	}
	
	 @And("^get the pageSpeedDatas \"([^\"]*)\"$")
	    public void get_the_pagespeeddatas_something(int pagespeeddata) throws IOException, InterruptedException   {
		 speed = new PageSpeedInsightObject(driver);
		 speed.getdata(driver, pagespeeddata);
	    }
}
