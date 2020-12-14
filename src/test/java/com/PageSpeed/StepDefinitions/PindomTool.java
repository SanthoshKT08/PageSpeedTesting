package com.PageSpeed.StepDefinitions;

import java.io.IOException;

import org.junit.runner.RunWith;

import com.PageSpeed.Generics.Baseclass;
import com.PageSpeed.PageObjects.PingdomObject;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class PindomTool extends Baseclass {

    public static PingdomObject ping;
	@When("^In pindom tool enter the page URL \"([^\"]*)\"$")
	public void in_pindom_tool_enter_the_page_url_something(String programurl) throws InterruptedException   {
      ping = new PingdomObject(driver);
      ping.enterTheURL(programurl);
	}

	@When("^Click on select the region$")
	public void click_on_select_the_region()   {
		 ping = new PingdomObject(driver);
		 ping.selectTheRegion();
	}

	@When("^click on Test Run$")
	public void click_on_test_run() throws Throwable {
		 ping = new PingdomObject(driver);
		 ping.clickOnStartTest();
	}
	
	@Then("^get the getPingdomData \"([^\"]*)\"$")
    public void get_the_getpingdomdata_something(int rowvalue) throws InterruptedException, IOException   {
		 ping = new PingdomObject(driver);
		 ping.getPingdomDatas(driver, rowvalue);
    }

}
