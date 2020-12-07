package com.PageSpeed.StepDefinitions;

import java.io.IOException;

import org.junit.runner.RunWith;
import com.PageSpeed.Generics.Baseclass;
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
	}
	
	 @And("^get the pageSpeedDatas \"([^\"]*)\"$")
	    public void get_the_pagespeeddatas_something(int pagespeeddata) throws IOException, InterruptedException   {
		 speed = new pagespeedPage(driver);
		 speed.getdata(driver, pagespeeddata);
	    }


	/*@And("^get the page URL and write to Excel \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_page_url_and_write_to_excel_something_and_something(int rowurl, int cellurl) throws Throwable {
		speed = new pagespeedPage(driver);
		speed.getURL(driver, rowurl, cellurl);
		Thread.sleep(1000);

	}

	@And("^get the page score value \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_page_score_value_something_and_something( int rows, int cells) throws IOException, InterruptedException  {

		speed = new pagespeedPage(driver);
		speed.getmobileScore(driver, rows, cells);
		Thread.sleep(1000);

	}

	@And("^get the page Time value \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_page_time_value_something_and_something(int row1, int cell1) throws Throwable {
		speed = new pagespeedPage(driver);
		speed.getmobileTime(driver, row1, cell1);
		Thread.sleep(1000);
	}


	@And("^Click on Desktop to view the score and time$")
	public void click_on_desktop_to_view_the_score_and_time()   {
		speed = new pagespeedPage(driver);
		speed.clickOnDesktop();
	}


	@And("^get the page score value for desktop \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_page_score_value_for_desktop_something_and_something(int dsrow, int dscell) throws Throwable {
		speed = new pagespeedPage(driver);
		speed.getDesktopScore(driver, dsrow, dscell);
	}

	@And("^get the page Time value for desktop \"([^\"]*)\" and \"([^\"]*)\"$")
	public void get_the_page_time_value_for_desktop_something_and_something(int dtrow, int dtcell) throws Throwable {
		speed = new pagespeedPage(driver);
		speed.getDesktopTime(driver, dtrow, dtcell);
	}*/

}
