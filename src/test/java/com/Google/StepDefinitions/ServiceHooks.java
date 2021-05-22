package com.Google.StepDefinitions;

import org.apache.commons.mail.EmailException;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import com.Google.Generics.Baseclass;
import com.Google.Generics.Browsers;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ServiceHooks {
	
	public static Baseclass base;
	
	Logger log=com.Google.Generics.LoggerHelper.getLogger(ServiceHooks.class);

	@Before
	public void intializeBrowser()
	{
		base = new Baseclass();
		base.selectBrowser(Browsers.CHROME.name());
	}
	
	@After
	public void endTest(Scenario scenario) throws EmailException {
		if (scenario.isFailed()) {

			try {
				log.info(scenario.getName() + " is Failed");
				final byte[] screenshot = ((TakesScreenshot) base.driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png"); // ... and embed it in
			} catch (WebDriverException e) {
				e.printStackTrace();
			}

		} 
		else 
		{
			try {
				log.info(scenario.getName() + " is pass");
				//scenario.embed(((TakesScreenshot) base.driver).getScreenshotAs(OutputType.BYTES), "image/png");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		base.driver.quit();

	}
	                                                     
}
