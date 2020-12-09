package com.PageSpeed.PageObjects;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.PageSpeed.Generics.FileUtilities;

public class GTmetrixObject {
	
	public GTmetrixObject(WebDriver driver) 
	{
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "(//a[text()='Log In'])[1]")
	private WebElement loginBtn;
	
	
	@FindBy(xpath = "//input[@id=\"li-email\"]")
	private WebElement email;
	
	@FindBy(xpath = "//input[@id=\"li-password\"]")
	private WebElement password;
	
	@FindBy(xpath = "//*[@id=\"menu-site-nav\"]/div[2]/div[1]/form/div[4]/button")
	private WebElement loginbtn2;
	
	@FindBy(xpath = "(//input[@name=\"url\"])[1]")
	private WebElement pageSpeedURL;
	
	@FindBy(xpath = "//button[text()='Analyze']")
	private WebElement analyze;
	
	@FindBy(xpath = "//a[@class=\"btn analyze-form-options-trigger\"]")
	private WebElement analysisOptions;
	
	@FindBy(xpath = "(//select/optgroup[@label=\"Available Locations\"]/option[3])[1]")
	private WebElement locations;
	
	public void clickOnLoginBtn()
	{
		loginBtn.click();
	}
	
	public void enterEmail(String emails)
	{
		email.sendKeys(emails);
	}
	
	
	public void enterPassword(String pwd)
	{
		password.sendKeys(pwd);
	}
	
	public void clickOnLoginToDashboard()
	{
		loginbtn2.click();
	}
	
	public void enterThepageSpeedURL(String url)
	{
		pageSpeedURL.sendKeys(url);
	}
	
	public void clickOnAnalyse()
	{
		analyze.click();
	}
	
	public void verifytheTextInGtmetix(WebDriver driver) throws InterruptedException
	{
		Thread.sleep(1000);
		FileUtilities.handleExplicitWait(driver, "//h1[text()='Latest Performance Report for:']");
	}
	
	public void clickOnAnalasisOptions()
	{
		analysisOptions.click();
	}
	
	public void selectTheRegion(WebDriver driver) // Handle the optgroup dropdowns.
	{
		 List<WebElement> locations = driver.findElements(By.xpath("//select/optgroup[@label=\"Available Locations\"]/option"));
		 for (WebElement loc : locations) {
			 System.out.println(loc.getText());
		}
		Select sa = new Select(driver.findElement(By.xpath("//select")));
		sa.selectByVisibleText(locations.get(2).getText());	
	}
	
	public void getGTmetixData(WebDriver driver, int getRow) throws IOException, InterruptedException                                                              
	{
	
		GTmetrixObject page = new GTmetrixObject(driver);
		page.verifytheTextInGtmetix(driver);
		Thread.sleep(1000);
	
		WebElement desktopScorevalue = driver.findElement(By.xpath("(//span[@class=\"report-score-percent\"])[1]"));
		String desktopScore = desktopScorevalue.getText();
		System.out.println("Desktop Score : " + desktopScore);
		
		Thread.sleep(1000);
		WebElement desktopTimevalue = driver.findElement(By.xpath("(//span[@class=\"report-web-vital-value color-rating-low\"])[1]"));
		String desktopTime = desktopTimevalue.getText();
		System.out.println("Desktop Time : " + desktopTime);
		
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sh = wb.getSheet("pagespeedtesting");
		XSSFRow row = sh.getRow(getRow);
		row.createCell(7).setCellValue(desktopScore);
		row.createCell(8).setCellValue(desktopTime);
		FileOutputStream fout = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fout);
		fout.close();                                                          
	}	
	
	

}
