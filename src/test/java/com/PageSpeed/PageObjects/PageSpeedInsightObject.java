package com.PageSpeed.PageObjects;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.PageSpeed.Generics.FileUtilities;

public class PageSpeedInsightObject {

	public PageSpeedInsightObject(WebDriver driver) 
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
	
	@FindBy(xpath = "//*[@id=\":8\"]/div/div")
	private WebElement desktopBtn;

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
	
	public void clickOnDesktop()
	{
		desktopBtn.click();
	}

	public void verifymobileText(WebDriver driver) throws InterruptedException
	{
		Thread.sleep(1000);
		FileUtilities.handleExplicitWait(driver, "//*[@id=\":5\"]/div/div");
	}

	public void getdata(WebDriver driver, int getRow) throws IOException, InterruptedException                                                              
	{
		WebElement url = driver.findElement(By.xpath("(//a[@class=\"audited-url__link\"])[1]"));
		String urls = url.getText();
		System.out.println(urls);
		
		WebElement mobileScorevalue = driver.findElement(By.xpath("(//div[@class=\"lh-gauge__percentage\"])[1]"));
		String mobileScore = mobileScorevalue.getText();
		System.out.println("Mobile Score : " + mobileScore);
		
		WebElement mobileTimevalue = driver.findElement(By.xpath("(//span[text()='Time to Interactive']//following::div[1])[1]"));
		FileUtilities.scrollPage(driver, "window.scrollBy(0,300)", "");
		String mobileTime = mobileTimevalue.getText();
		System.out.println("Mobile Time : " + mobileTime);
		
		PageSpeedInsightObject speed = new PageSpeedInsightObject(driver);
		speed.verifymobileText(driver);
		Thread.sleep(1000);
		
		speed = new PageSpeedInsightObject(driver);
		speed.clickOnDesktop();
		
		WebElement desktopScorevalue = driver.findElement(By.xpath("(//div[@class=\"lh-gauge__percentage\"])[2]"));
		String desktopScore = desktopScorevalue.getText();
		System.out.println("Desktop Score : " + desktopScore);
		
		WebElement desktopTimevalue = driver.findElement(By.xpath("(//span[text()='Time to Interactive']//following::div[1])[2]"));
		String desktopTime = desktopTimevalue.getText();
		System.out.println("Desktop Time : " + desktopTime);
		
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh = wb.getSheet("pagespeedtesting");
		XSSFRow row = sh.getRow(getRow);
		row.createCell(2).setCellValue(urls);
		row.createCell(3).setCellValue(mobileScore);
		row.createCell(4).setCellValue(mobileTime);
		row.createCell(5).setCellValue(desktopScore);
		row.createCell(6).setCellValue(desktopTime);
		FileOutputStream fout = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fout);
		fout.close();                                                          
	}	
	
}

