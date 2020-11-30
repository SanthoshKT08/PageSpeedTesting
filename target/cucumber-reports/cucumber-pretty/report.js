$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("imarticus.feature");
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
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---home-page;:-user-navigates-to-the-application",
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
  "name": "Click on Enter the Web page URL",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the value to ExcelSheet \"\u003cRow\u003e\" and \"\u003cCell\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "Row",
        "Cell"
      ],
      "line": 15,
      "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "1",
        "1"
      ],
      "line": 16,
      "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6732328700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;;2",
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
  "name": "Click on Enter the Web page URL",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the value to ExcelSheet \"1\" and \"1\"",
  "matchedColumns": [
    0,
    1
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
  "location": "Homepage.enter_the_URL(String)"
});
formatter.result({
  "duration": 9011660100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 113227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://imarticus.org/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 80825000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 85576299,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22358505600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "Homepage.get_the_value_to_excelsheet_something_and_something(int,int)"
});
formatter.result({
  "duration": 1075031500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 631737699,
  "status": "passed"
});
});