package Practice;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Excel {
	
	public static void main(String[] args) throws IOException, InterruptedException {
		
//		WebDriverManager.chromedriver().setup();
//		WebDriver driver = new ChromeDriver();
//		driver.get("https://developers.google.com/speed/pagespeed/insights/");
//		WebElement urlField = driver.findElement(By.xpath("//*[@id=\"page-speed-insights\"]/div[1]/form/div/input"));
//		urlField.sendKeys("https://imarticus.org/");
//		driver.findElement(By.xpath("//*[@id=\"page-speed-insights\"]/div[1]/form/div/div/div")).click();
//		pagespeedPage speed = new pagespeedPage(driver);
//		speed.verifymobileText(driver);
//		Thread.sleep(3000);
//		WebElement url = driver.findElement(By.xpath("(//a[@class=\"audited-url__link\"])[1]"));
//		String urls = url.getText();
//		System.out.println(urls);
		FileInputStream fis = new FileInputStream("src/main/resources/Excel/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sheetName = wb.createSheet("today");
		XSSFRow row = sheetName.getRow(1);
		FileOutputStream fos = new FileOutputStream("src/main/resources/Excel/TestData.xlsx");
		wb.write(fos);
		fos.close();
		System.out.println("END OF WRITING DATA IN EXCEL");
	
	}
}
