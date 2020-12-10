$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1pageSpeedinsight_imarticus_Homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Page Speed Testing - Home Page",
  "description": "\r\nTesting imarticus home page",
  "id": "page-speed-testing---home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---home-page;user-navigates-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "get the pageSpeedDatas \"\u003cPageSpeedData\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "page-speed-testing---home-page;user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "PageSpeedData"
      ],
      "line": 14,
      "id": "page-speed-testing---home-page;user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 15,
      "id": "page-speed-testing---home-page;user-navigates-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7560487700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---home-page;user-navigates-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "get the pageSpeedDatas \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://developers.google.com/speed/pagespeed/insights/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2818776200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://imarticus.org/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 132742400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 79987800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19484194900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 3160203000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 341961400,
  "status": "passed"
});
formatter.uri("ZEmailAttachtment.feature");
formatter.feature({
  "line": 2,
  "name": "Sending mail",
  "description": "\r\nTesting imarticus program pages",
  "id": "sending-mail",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Email_Attachment"
    }
  ]
});
formatter.before({
  "duration": 5763446000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": ": Mail",
  "description": "",
  "id": "sending-mail;:-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Send mail to origanization",
  "keyword": "Given "
});
formatter.match({
  "location": "MailAttachment.send_mail_to_origanization()"
});
formatter.result({
  "duration": 5335934700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 333007600,
  "status": "passed"
});
});