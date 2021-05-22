package com.Google.PageObjects;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Google.Generics.FileUtilities;

public class Resultpage {

	FileUtilities fileUtilities=new FileUtilities();

	public Resultpage(WebDriver driver) 
	{
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "logo")
	private WebElement logo;

	@FindBy(xpath = "//div[@id='search']/div/div/div/div/div/div/div/div/div/div/span/div/div/div[3]/div/div/div/div[2]/div/span")
	private WebElement Word;

	@FindBy(xpath = "//*[@id=\"topstuff\"]/div/div/p[2]")
	private WebElement suggestionsText;

	@FindBy(xpath = "//*[@id=\"topstuff\"]/div/div/p[2]")
	private WebElement HomepageIndiaText;

	@FindBy(xpath = "//*[@id=\"hdtb-msb\"]/div[1]/div/div[2]/a")
	private WebElement category;

	@FindBy(xpath = "//*[@id=\"result-stats\"]/nobr")
	private WebElement responseTime;

	@FindBy(id = "result-stats")
	private WebElement totalNoOfResults;

	@FindBy(id="cwos")
	private WebElement maths;

	public void verifySearchPage()
	{
		try {
			boolean Verifylogo = logo.isDisplayed();

			if(Verifylogo==true)
			{
				System.out.println("Logo is displayed");
			}
			else
			{
				System.out.println("Not Displayed");
			}
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}

	}

	public String verifyWord(WebDriver driver)
	{
		return fileUtilities.waitForVisibility(driver,Word).getText();
	}

	public String verifySuggestionTex(WebDriver driver)
	{

		FileUtilities.handleExplicitWait(driver, "//*[@id=\"topstuff\"]/div/div/p[2]");
		String suggestion = suggestionsText.getText();
		return suggestion;

	}

	public String verifyIndiaTextInHomePage(WebDriver driver)
	{
		FileUtilities.handleExplicitWait(driver, "//*[@id=\"topstuff\"]/div/div/p[2]");
		String india = HomepageIndiaText.getText();
		return india;
	}

	public void clickOnCategory()
	{
		try {
			category.click();
		} 
		catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}

	public void checkResponseTime()
	{
		try {
			String timetaken = responseTime.getText();
			System.out.println(timetaken);
		} 
		catch (NoSuchElementException e) {
			e.printStackTrace();
		}

	}

	public void CheckResponseOnTotalNoOfResults()
	{
		try {
			String totalResults = totalNoOfResults.getText();
			System.out.println(totalResults);
		} 
		catch (NoSuchElementException e) {
			e.printStackTrace();
		}

	}

	public String verifyMaths()
	{
		try {
			return maths.getText();
		}

		catch (NoSuchElementException e) {
			e.printStackTrace();
		}
		return maths.getText();
	}





}
