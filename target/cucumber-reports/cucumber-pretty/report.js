$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Careerpages.feature");
formatter.feature({
  "line": 2,
  "name": "Page Speed Testing - Career Pages",
  "description": "\r\nTesting imarticus career pages",
  "id": "page-speed-testing---career-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@careerPages"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application",
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
  "name": "Enter the Web page URl \"\u003ccareerURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page score value \"\u003cRow\u003e\" and \"\u003cCell\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"\u003cRow1\u003e\" and \"\u003cCell1\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "careerURL",
        "Row",
        "Cell",
        "Row1",
        "Cell1"
      ],
      "line": 17,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/careers/",
        "3",
        "3",
        "3",
        "4"
      ],
      "line": 18,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/placement/",
        "4",
        "3",
        "4",
        "4"
      ],
      "line": 19,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/mentorship/",
        "5",
        "3",
        "5",
        "4"
      ],
      "line": 20,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/hackathon/",
        "6",
        "3",
        "6",
        "4"
      ],
      "line": 21,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/imarticus-networking/",
        "7",
        "3",
        "7",
        "4"
      ],
      "line": 22,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/alumni-network/",
        "8",
        "3",
        "8",
        "4"
      ],
      "line": 23,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/testimonials/",
        "9",
        "3",
        "9",
        "4"
      ],
      "line": 24,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-club/",
        "10",
        "3",
        "10",
        "4"
      ],
      "line": 25,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/scholarship/",
        "11",
        "3",
        "11",
        "4"
      ],
      "line": 26,
      "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6252468300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@careerPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/careers/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page score value \"3\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"3\" and \"4\"",
  "matchedColumns": [
    3,
    4
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
  "duration": 2137180800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 121503800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/careers/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 87304400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 81256500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 60727500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20549732800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 833890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 33
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 177329100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1111356300,
  "status": "passed"
});
formatter.before({
  "duration": 5780483300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@careerPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/placement/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page score value \"4\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"4\" and \"4\"",
  "matchedColumns": [
    3,
    4
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
  "duration": 2165869700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 60708100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/placement/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 82243800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 69947000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 48312500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
