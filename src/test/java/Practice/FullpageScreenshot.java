package Practice;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import io.github.bonigarcia.wdm.WebDriverManager;

public class FullpageScreenshot {
	
	public static WebDriver driver; 
	
	@BeforeTest
	public void start() throws InterruptedException
	{
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://imarticus.org/");
		Thread.sleep(3000);
		
		
	}
	
	@org.testng.annotations.Test
	public void getFullPageScreenshot() throws IOException
	{
		 File source = ((FirefoxDriver)driver).getFullPageScreenshotAs(OutputType.FILE);
		 FileUtils.copyFile(source, new File("FullpageScreenshot.png"));
		 System.out.println("Full");
		 
	}
	
	@AfterTest
	public void end()
	{
		driver.close();
	}
	
	

}
