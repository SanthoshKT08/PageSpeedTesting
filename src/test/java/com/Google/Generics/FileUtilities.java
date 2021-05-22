package com.Google.Generics;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FileUtilities {
	
	public static WebDriverWait wait=null;

	
	public WebDriverWait webdriverWaitObject(WebDriver driver)
	{
		if (wait==null) {
			return new WebDriverWait(driver, 30);
		}
		else {
			return wait;
		}
	}
	
	public WebElement waitForVisibility(WebDriver driver,WebElement element)
	{
		if (wait==null) {
			return webdriverWaitObject(driver).until(ExpectedConditions.visibilityOf(element));
		}
		else {
			return wait.until(ExpectedConditions.visibilityOf(element));
		}
			
		
	}
	
	public static void handleExplicitWait(WebDriver driver, String xpath)
	{
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
	}
	
	
}
