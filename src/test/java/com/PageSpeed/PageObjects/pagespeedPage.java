package com.PageSpeed.PageObjects;

import java.util.ArrayList;
import java.util.List;

import javax.swing.Spring;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.PageSpeed.Generics.FileUtilities;

public class pagespeedPage {

	public pagespeedPage(WebDriver driver) 
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//*[@id=\"page-speed-insights\"]/div[1]/form/div/input")
	private WebElement urlTextfield;
	
	@FindBy(xpath = "//*[@id=\"page-speed-insights\"]/div[1]/form/div/input")
	private WebElement enterTheURL;
	
	@FindBy(xpath = "//*[@id=\"page-speed-insights\"]/div[1]/form/div/div/div")
	private WebElement analyzebtn;
	
	@FindBy(xpath = "//*[@id=\":5\"]/div/div")
	private WebElement mobiletext;
	
	@FindBy(xpath = "//div[text()='Performance']")
	private WebElement score;
	
	public void clickOnURL()
	{
		urlTextfield.click();
	}
	
	public void clickOnAnalyze()
	{
		analyzebtn.click();
	}
	
	public void enterTheURL(String URL)
	{
		enterTheURL.sendKeys(URL);
	}
	
	public void verifymobileText(WebDriver driver)
	{
		FileUtilities.handleExplicitWait(driver, "//*[@id=\":5\"]/div/div");
	}
	
	public ArrayList<String> viewScore(WebDriver driver)
	{
		List<WebElement> value = driver.findElements(By.xpath("//div[@class=\"lh-gauge__percentage\"]"));
		System.out.println(value);
		System.out.println("Santhosh");
		ArrayList<String> kt = new ArrayList<String>();
		for (WebElement score : value) {
			String per = score.getText();
			kt.add(per);
			System.out.println(per);
		}
		return kt;
	}
	
	public void view(WebDriver driver)
	{
		WebElement value = driver.findElement(By.xpath("(//div[@id='page-speed-insights']/div[2]/div[2]/div[2]/div/div[2]/div/div/a/div[3])[2]"));
		System.out.println("Santhosh testing"+value.getText());
		
		}
	
	
	
	public void viewTime(WebDriver driver)
	{
		List<WebElement> time = driver.findElements(By.xpath("//span[text()='Time to Interactive']//following::div[1]"));
		FileUtilities.scrollPage(driver, "window.scrollBy(0,300)", "");
		for (WebElement qa : time) {
			String sec = qa.getText();
			System.out.println(sec);
		}
		
	}

}
