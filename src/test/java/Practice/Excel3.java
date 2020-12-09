package Practice;

public class Excel3 {
	
	public static void main(String[] args) throws Exception {
		Excel2 ec = new Excel2("src/main/resources/TestData.xlsx");
		ec.setCellData("sheet1", 4, 1, "Suman");
		ec.setCellData("sheet1", 4, 2, "Santhosh");
	}

}
