package com.PageSpeed.StepDefinitions;

import org.apache.commons.mail.EmailException;
import org.junit.runner.RunWith;

import com.PageSpeed.Generics.FileUtilities;

import cucumber.api.java.en.Given;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class MailAttachment {
	
	@Given("^Send mail to origanization$")
    public void send_mail_to_origanization() throws EmailException {
       FileUtilities.sendMailReport();
    }


}
