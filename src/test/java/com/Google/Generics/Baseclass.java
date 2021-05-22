package com.Google.Generics;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Baseclass {
	
	public static WebDriver driver;
	
	public WebDriver selectBrowser(String browser)
	{
		if (System.getProperty("os.name").toLowerCase().contains(OS.WINDOW.name().toLowerCase())) {
			
			if (browser.equalsIgnoreCase(Browsers.CHROME.name())) {
				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
			}
			
			else if (browser.equalsIgnoreCase(Browsers.FIREFOX.name())) 
			{
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			}
			
		}
		
		else if (System.getProperty("os.name").toLowerCase().contains(OS.MAC.name().toLowerCase())) {
				
				if (browser.equalsIgnoreCase(Browsers.CHROME.name())) {
					WebDriverManager.chromedriver().setup();
					driver = new ChromeDriver();
					driver.manage().window().maximize();
					driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
				}
				
				else if (browser.equalsIgnoreCase(Browsers.FIREFOX.name())) 
				{
					WebDriverManager.firefoxdriver().setup();
					driver = new FirefoxDriver();
					driver.manage().window().maximize();
					driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
				}
		}
		
		return driver;
	}
	
	

}
