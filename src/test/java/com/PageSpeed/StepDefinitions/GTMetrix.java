package com.PageSpeed.StepDefinitions;

import org.junit.runner.RunWith;

import com.PageSpeed.Generics.Baseclass;
import com.PageSpeed.PageObjects.GTmetrixObject;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class GTMetrix extends Baseclass {

	public static GTmetrixObject page;

	@When("^Click on Login in$")
	public void click_on_Login_in()   {
		page = new GTmetrixObject(driver);
		page.clickOnLoginBtn();
	}

	@When("^Enter the Email \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_the_Email_and_password(String arg1, String arg2)   {
		page = new GTmetrixObject(driver);
		page.enterEmail(arg1);
		page.enterPassword(arg2);
	}

	@When("^Click on login$")
	public void click_on_login() throws Throwable {
		page = new GTmetrixObject(driver);
		page.clickOnLoginToDashboard();
		Thread.sleep(1000);
	}

	@When("^Select the region$")
	public void select_the_region() throws InterruptedException  {
		page = new GTmetrixObject(driver);
		page.clickOnAnalasisOptions();
		Thread.sleep(1000);
		page.selectTheRegion(driver);
	}

	@When("^Enter the page URL \"([^\"]*)\"$")
	public void enter_the_page_URL(String arg1) throws InterruptedException   {
		Thread.sleep(2000);
		page = new GTmetrixObject(driver);
		page.enterThepageSpeedURL(arg1);
	}

	@When("^Click on GTmetrix Anazlyse$")
	public void click_on_GTmetrix_Anazlyse()   {
		page = new GTmetrixObject(driver);
		page.clickOnAnalyse();
	}

	@Then("^get the getGTmetixData \"([^\"]*)\"$")
	public void get_the_getgtmetixdata_something(int RowValue) throws Throwable {
		page = new GTmetrixObject(driver);
		page.getGTmetixData(driver, RowValue);
	}

}
