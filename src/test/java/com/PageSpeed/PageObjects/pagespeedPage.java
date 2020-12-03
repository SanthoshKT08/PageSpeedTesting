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
	public void viewScore(WebDriver driver, int getRow, int CreateCell) throws IOException
	{
		WebElement value = driver.findElement(By.xpath("(//div[@class=\"lh-gauge__percentage\"])[1]"));
		String score = value.getText();
		System.out.println("Group - " + score);
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh = wb.getSheet("Sheet1");
		XSSFRow row = sh.getRow(getRow);
		row.createCell(CreateCell).setCellValue(score);
		FileOutputStream fout = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fout);
		fout.close();
	}
	public void viewTime(WebDriver driver, int getRow, int CreateCell) throws IOException
	{
		WebElement value = driver.findElement(By.xpath("(//span[text()='Time to Interactive']//following::div[1])[1]"));
		FileUtilities.scrollPage(driver, "window.scrollBy(0,300)", "");
		String time = value.getText();
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh = wb.getSheet("Sheet1");
		XSSFRow row = sh.getRow(getRow);
		row.createCell(CreateCell).setCellValue(time);
		FileOutputStream fout = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fout);
		fout.close();
	}

}
