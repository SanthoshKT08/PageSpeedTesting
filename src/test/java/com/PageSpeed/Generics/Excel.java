package com.PageSpeed.Generics;

import java.io.IOException;                    
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.PageSpeed.PageObjects.pagespeedPage;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Excel {
	
	public static void main(String[] args) throws IOException, InterruptedException {
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://developers.google.com/speed/pagespeed/insights/");
		WebElement urlField = driver.findElement(By.xpath("//*[@id=\"page-speed-insights\"]/div[1]/form/div/input"));
		urlField.sendKeys("https://imarticus.org/");
		driver.findElement(By.xpath("//*[@id=\"page-speed-insights\"]/div[1]/form/div/div/div")).click();
		pagespeedPage speed = new pagespeedPage(driver);
		speed.verifymobileText(driver);
		Thread.sleep(3000);
		WebElement url = driver.findElement(By.xpath("(//a[@class=\"audited-url__link\"])[1]"));
		String urls = url.getText();
		System.out.println(urls);
		
		
//		FileInputStream fis = new FileInputStream("src/main/resources/TestData.xlsx");
//		XSSFWorkbook wb = new XSSFWorkbook(fis);
//		XSSFSheet sheetName = wb.getSheet("Sheet1");
//		FileOutputStream fos = new FileOutputStream("src/main/resources/TestData.xlsx");
//		wb.write(fos);
//		fos.close();
//		System.out.println("END OF WRITING DATA IN EXCEL");
	}
}
