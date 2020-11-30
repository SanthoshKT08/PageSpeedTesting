package com.PageSpeed.Generics;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Excel {
	
	public static void main(String[] args) throws IOException {
		FileInputStream fis = new FileInputStream("src/main/resources/TestData.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sheetName = wb.getSheet("Sheet1");
		XSSFRow roe = sheetName.createRow(1);
		XSSFCell cel = roe.createCell(1);
		XSSFRow row1 = sheetName.createRow(2);
		XSSFCell cel2 = roe.createCell(2);
		cel.setCellType(cel.getCellType());
		cel.setCellValue("SoftwareTestingMaterial.com");
		cel2.setCellType(cel.getCellType());
		cel2.setCellValue("Santhosh");
		FileOutputStream fos = new FileOutputStream("src/main/resources/TestData.xlsx");
		wb.write(fos);
		fos.close();
		System.out.println("END OF WRITING DATA IN EXCEL");
	}
}
