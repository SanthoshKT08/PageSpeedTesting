package com.PageSpeed.Generics;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class HouseJOy {
	
	public static void main(String[] args) throws InterruptedException {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.housejoy.in/appliances-services/tv-installation");
		WebElement price=driver.findElement(By.xpath("//*[@id=\"react-view\"]/div/div/div[2]/div/div/div/div[3]/main/section[2]/div[1]/div[1]/div[2]/div/div/div[2]/div[3]/div[2]/span/text()"));
		Thread.sleep(2000);
		String amount = price.getText();
		System.out.println(amount);
	}

}
