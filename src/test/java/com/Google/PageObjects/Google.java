package com.Google.PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Google {

	public Google(WebDriver driver) 
	{
		PageFactory.initElements(driver, this);
	}

	public static List<WebElement> allSuggestions;

	@FindBy(name = "q")
	private WebElement searchTextBox ;

	@FindBy(name = "btnK")
	private WebElement searchBtn;

	public void googleSearch(String search)
	{
		try {
			searchTextBox.sendKeys(search);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}

	}

	public void pressEnterFromSearchBox()
	{
		try {
			searchTextBox.sendKeys(Keys.ENTER);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}

	}

	public void clickOnSearch()
	{
		try {
			searchBtn.click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
		
	}

	public void verifyListOfAutoSuggestions(WebDriver driver)
	{
		try {
			allSuggestions = driver.findElements(By.xpath("//span[contains(text(),'automation')]"));

			for(WebElement text: allSuggestions)
			{
				String texts = text.getText();
				System.out.println(texts);
			}
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
		
	}






}

