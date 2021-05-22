$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search functionality",
  "description": "",
  "id": "google-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Test case 1 : Check response on enter a word/Sentence in the search text box",
  "description": "",
  "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GoogleSearch_TC01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter a \"\u003cword/sentence\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Actual and Expected result",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;",
  "rows": [
    {
      "cells": [
        "word/sentence"
      ],
      "line": 13,
      "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;;1"
    },
    {
      "cells": [
        "happy"
      ],
      "line": 14,
      "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;;2"
    },
    {
      "cells": [
        "what is the meaning of goal"
      ],
      "line": 15,
      "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2338222000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2844502900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test case 1 : Check response on enter a word/Sentence in the search text box",
  "description": "",
  "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GoogleSearch_TC01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter a \"happy\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Actual and Expected result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "happy",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 279511800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.click_on_search_button()"
});
formatter.result({
  "duration": 4565408500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 118494000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_actual_and_expected_result()"
});
formatter.result({
  "duration": 333736500,
  "status": "passed"
});
formatter.after({
  "duration": 1299998300,
  "status": "passed"
});
formatter.before({
  "duration": 1546721300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2454957400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test case 1 : Check response on enter a word/Sentence in the search text box",
  "description": "",
  "id": "google-search-functionality;test-case-1-:-check-response-on-enter-a-word/sentence-in-the-search-text-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GoogleSearch_TC01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter a \"what is the meaning of goal\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Actual and Expected result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "what is the meaning of goal",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 295278000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.click_on_search_button()"
});
formatter.result({
  "duration": 4680879500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 52856400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_actual_and_expected_result()"
});
formatter.result({
  "duration": 224333800,
  "status": "passed"
});
formatter.after({
  "duration": 775244500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Test case 2 : Check response on press enter from the text box",
  "description": "",
  "id": "google-search-functionality;test-case-2-:-check-response-on-press-enter-from-the-text-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@GoogleSearch_TC02"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Enter a \"\u003cword\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "google-search-functionality;test-case-2-:-check-response-on-press-enter-from-the-text-box;",
  "rows": [
    {
      "cells": [
        "word"
      ],
      "line": 24,
      "id": "google-search-functionality;test-case-2-:-check-response-on-press-enter-from-the-text-box;;1"
    },
    {
      "cells": [
        "Automation"
      ],
      "line": 25,
      "id": "google-search-functionality;test-case-2-:-check-response-on-press-enter-from-the-text-box;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1662064600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 3336390700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Test case 2 : Check response on press enter from the text box",
  "description": "",
  "id": "google-search-functionality;test-case-2-:-check-response-on-press-enter-from-the-text-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@GoogleSearch_TC02"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Enter a \"Automation\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 254831400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 5202755900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 60507900,
  "status": "passed"
});
formatter.after({
  "duration": 1156777900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Test case 3 : Check response on entering max length of search keyword.",
  "description": "",
  "id": "google-search-functionality;test-case-3-:-check-response-on-entering-max-length-of-search-keyword.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@GoogleSearch_TC03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Enter a \"\u003cText\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "google-search-functionality;test-case-3-:-check-response-on-entering-max-length-of-search-keyword.;",
  "rows": [
    {
      "cells": [
        "Text"
      ],
      "line": 34,
      "id": "google-search-functionality;test-case-3-:-check-response-on-entering-max-length-of-search-keyword.;;1"
    },
    {
      "cells": [
        "which is the amazing country in the world and why is it important"
      ],
      "line": 35,
      "id": "google-search-functionality;test-case-3-:-check-response-on-entering-max-length-of-search-keyword.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1528065200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 3099518000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Test case 3 : Check response on entering max length of search keyword.",
  "description": "",
  "id": "google-search-functionality;test-case-3-:-check-response-on-entering-max-length-of-search-keyword.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@GoogleSearch_TC03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Enter a \"which is the amazing country in the world and why is it important\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "which is the amazing country in the world and why is it important",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 736715500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 4170467200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 52701500,
  "status": "passed"
});
formatter.after({
  "duration": 813542900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Test case 4 : Check response on entering invalid value in the search field",
  "description": "",
  "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GoogleSearch_TC04"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Enter a \"\u003cInvalid\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify Actual and Expected result for Test Case 5",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;",
  "rows": [
    {
      "cells": [
        "Invalid"
      ],
      "line": 45,
      "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;;1"
    },
    {
      "cells": [
        "@@@@@@@"
      ],
      "line": 46,
      "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;;2"
    },
    {
      "cells": [
        "######"
      ],
      "line": 47,
      "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1611264800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 4705380400,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Test case 4 : Check response on entering invalid value in the search field",
  "description": "",
  "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GoogleSearch_TC04"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Enter a \"@@@@@@@\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify Actual and Expected result for Test Case 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "@@@@@@@",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 223640700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 6271211900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 63321300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_actual_and_expected_result_for_test_case_5()"
});
formatter.result({
  "duration": 72448700,
  "status": "passed"
});
formatter.after({
  "duration": 978816300,
  "status": "passed"
});
formatter.before({
  "duration": 1510444200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 3155003300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Test case 4 : Check response on entering invalid value in the search field",
  "description": "",
  "id": "google-search-functionality;test-case-4-:-check-response-on-entering-invalid-value-in-the-search-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GoogleSearch_TC04"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Enter a \"######\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify Actual and Expected result for Test Case 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "######",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 235833900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 2035610900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 121967100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_actual_and_expected_result_for_test_case_5()"
});
formatter.result({
  "duration": 129773200,
  "status": "passed"
});
formatter.after({
  "duration": 916162000,
  "status": "passed"
});
formatter.before({
  "duration": 1550240000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2792936900,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Test case 5 : Check response on entering invalid value in the search field",
  "description": "",
  "id": "google-search-functionality;test-case-5-:-check-response-on-entering-invalid-value-in-the-search-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@GoogleSearch_TC05"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Enter a \"\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 132807900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 112113700,
  "status": "passed"
});
formatter.after({
  "duration": 763220400,
  "status": "passed"
});
formatter.before({
  "duration": 1638648200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 3389869500,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Test case 6 : Check response on auto-suggestion while enter a word",
  "description": "",
  "id": "google-search-functionality;test-case-6-:-check-response-on-auto-suggestion-while-enter-a-word",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@GoogleSearch_TC06"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "Enter a \"Automation\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "list out the auto suggestions",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "select second one",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 274442700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.list_out_the_auto_suggestions()"
});
formatter.result({
  "duration": 510914700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.select_second_one()"
});
formatter.result({
  "duration": 5128317800,
  "status": "passed"
});
formatter.after({
  "duration": 743097300,
  "status": "passed"
});
formatter.before({
  "duration": 1530418500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 5644664900,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Test case 7 : Verify that the suggestion provided by Google are sorted by most popular/relevant suggestions",
  "description": "",
  "id": "google-search-functionality;test-case-7-:-verify-that-the-suggestion-provided-by-google-are-sorted-by-most-popular/relevant-suggestions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@GoogleSearch_TC07"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Enter a \"Elon musk\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Elon musk",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 219427300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 3326210200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 120396600,
  "status": "passed"
});
formatter.after({
  "duration": 739133500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Test case 8 :Verify that user can make search corresponding to different categories",
  "description": "",
  "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@GoogleSearch_TC08"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Enter a \"\u003ccategories\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "On header click categories",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;",
  "rows": [
    {
      "cells": [
        "categories"
      ],
      "line": 74,
      "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;;1"
    },
    {
      "cells": [
        "Covid"
      ],
      "line": 75,
      "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;;2"
    },
    {
      "cells": [
        "Beloved"
      ],
      "line": 76,
      "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1576745200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 4100611300,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Test case 8 :Verify that user can make search corresponding to different categories",
  "description": "",
  "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@GoogleSearch_TC08"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Enter a \"Covid\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "On header click categories",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Covid",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 228879500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 10134465000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.on_header_click_categories()"
});
formatter.result({
  "duration": 3346030200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 191057200,
  "status": "passed"
});
formatter.after({
  "duration": 777188400,
  "status": "passed"
});
formatter.before({
  "duration": 1409793300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 5465820800,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Test case 8 :Verify that user can make search corresponding to different categories",
  "description": "",
  "id": "google-search-functionality;test-case-8-:verify-that-user-can-make-search-corresponding-to-different-categories;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@GoogleSearch_TC08"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Enter a \"Beloved\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "On header click categories",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Beloved",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 125709900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 7996342400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.on_header_click_categories()"
});
formatter.result({
  "duration": 8618461300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 122940000,
  "status": "passed"
});
formatter.after({
  "duration": 785330500,
  "status": "passed"
});
formatter.before({
  "duration": 1518433600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2721909600,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Test case 9 :Verify that misspelled keyword in google search text box",
  "description": "",
  "id": "google-search-functionality;test-case-9-:verify-that-misspelled-keyword-in-google-search-text-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@GoogleSearch_TC09"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "Enter a \"Fabook\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Fabook",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 205440500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 2733340500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 120942500,
  "status": "passed"
});
formatter.after({
  "duration": 758230000,
  "status": "passed"
});
formatter.before({
  "duration": 1627912900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2370602300,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Test case 10 :Verify that multi word misspelled keywords",
  "description": "",
  "id": "google-search-functionality;test-case-10-:verify-that-multi-word-misspelled-keywords",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@GoogleSearch_TC10"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "Enter a \"Amrican coege\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amrican coege",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 260014500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 11985728000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 66790000,
  "status": "passed"
});
formatter.after({
  "duration": 692040200,
  "status": "passed"
});
formatter.before({
  "duration": 1524551300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 5407747600,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Test case 11 :Verify the performance of search check if the time taken to fetch the response",
  "description": "",
  "id": "google-search-functionality;test-case-11-:verify-the-performance-of-search-check-if-the-time-taken-to-fetch-the-response",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@GoogleSearch_TC11"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "Enter a \"India\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "check response time taken for results",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 66855400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 5119078800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 64308700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.check_response_time_taken_for_results()"
});
formatter.result({
  "duration": 49270200,
  "status": "passed"
});
formatter.after({
  "duration": 1087497500,
  "status": "passed"
});
formatter.before({
  "duration": 1584199900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2401328700,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Test case 12 :Verify that total number of results fetched for a keyword",
  "description": "",
  "id": "google-search-functionality;test-case-12-:verify-that-total-number-of-results-fetched-for-a-keyword",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@GoogleSearch_TC12"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "Enter a \"Apple\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Verify that total number of results",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 207648900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 4484456200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 141497600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_that_total_number_of_results()"
});
formatter.result({
  "duration": 97618300,
  "status": "passed"
});
formatter.after({
  "duration": 789515300,
  "status": "passed"
});
formatter.before({
  "duration": 1316425600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2469574700,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Test case 13 : Verify Google calculator service make any arithmetic request",
  "description": "",
  "id": "google-search-functionality;test-case-13-:-verify-google-calculator-service-make-any-arithmetic-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@GoogleSearch_TC13"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "Enter a \"50+90\u003d\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "check addition value is \"140\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50+90\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 208323000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 2755510700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 123497100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 25
    }
  ],
  "location": "GoogleSearch.check_addition_value_is(String)"
});
formatter.result({
  "duration": 76654400,
  "status": "passed"
});
formatter.after({
  "duration": 712205600,
  "status": "passed"
});
formatter.before({
  "duration": 1656769300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and enter the URL \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 36
    }
  ],
  "location": "GoogleSearch.open_the_browser_and_enter_the_URL(String)"
});
formatter.result({
  "duration": 2236195200,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Test case 14 :Verify from google result to navigate to home page and search something",
  "description": "",
  "id": "google-search-functionality;test-case-14-:verify-from-google-result-to-navigate-to-home-page-and-search-something",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@GoogleSearch_TC14"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "Enter a \"Tim cook\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "Press enter from the text box",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Verify sytem should redirect to search page",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Go forward to existing page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tim cook",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.enter_a_in_the_search_box(String)"
});
formatter.result({
  "duration": 239085300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.press_enter_from_the_text_box()"
});
formatter.result({
  "duration": 2806067100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.verify_sytem_should_redirect_to_search_page()"
});
formatter.result({
  "duration": 113073700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.go_back_to_home_page()"
});
formatter.result({
  "duration": 673662100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.go_forward_to_existing_page()"
});
formatter.result({
  "duration": 1174479100,
  "status": "passed"
});
formatter.after({
  "duration": 1242370200,
  "status": "passed"
});
});