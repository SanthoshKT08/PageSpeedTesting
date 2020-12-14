package com.PageSpeed.PageObjects;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.PageSpeed.Generics.FileUtilities;

public class PingdomObject {
	
	
	public PingdomObject(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(id = "urlInput")
	private WebElement url;
	
	@FindBy(xpath = "//app-select[@class=\"ng-tns-c3-0\"]")
	private WebElement testFrom;
	
	@FindBy(xpath = "//div[text()='Asia - Japan - Tokyo']")
	private WebElement selectRegion;
	
	@FindBy(xpath = "/html/body/app-root/main/app-home-hero/header/section/app-test-runner/div/div[2]/div[3]/input")
	private WebElement startTest;
	
	@FindBy(xpath = "//h3[text()='Your Results:']")
	private WebElement verifyText;
	
	public void verifyResultText(WebDriver driver)
	{
		FileUtilities.handleExplicitWait(driver, "//h3[text()='Your Results:']");
	}
	
	
	public void enterTheURL(String URL) throws InterruptedException
	{
		Thread.sleep(1000);
		url.clear();
		url.sendKeys(URL);
	}
	
	public void selectTheRegion()
	{
		testFrom.click();
		selectRegion.click();
	}
	
	public void clickOnStartTest()
	{
		startTest.click();
	}
	
	public void getPingdomDatas(WebDriver driver,int getRow) throws InterruptedException, IOException
	{
		PingdomObject pin = new PingdomObject(driver);
		pin.verifyResultText(driver);
		
		WebElement desktopScorevalue = driver.findElement(By.xpath("(//div[@class=\"value\"])[1]"));
		String desktopScore = desktopScorevalue.getText();
		System.out.println("Desktop Score : " + desktopScore);
		
		Thread.sleep(1000);
		WebElement desktopTimevalue = driver.findElement(By.xpath("(//div[@class=\"value\"])[3]"));
		String desktopTime = desktopTimevalue.getText();
		System.out.println("Desktop Time : " + desktopTime);
		
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh = wb.getSheet("pagespeedtesting");
		XSSFRow row = sh.getRow(getRow);
		row.createCell(9).setCellValue(desktopScore);
		row.createCell(10).setCellValue(desktopTime);
		FileOutputStream fout = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fout);
		fout.close();      
	}

}
