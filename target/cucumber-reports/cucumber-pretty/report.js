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
  "duration": 6319078000,
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
  "duration": 2968435700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 207997600,
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
  "duration": 123500700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 118105500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 58963000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20373488800,
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
  "duration": 826805600,
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
  "duration": 160728100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1136013800,
  "status": "passed"
});
formatter.before({
  "duration": 5518122000,
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
  "duration": 2006752100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 73454000,
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
  "duration": 94626800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 89469200,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 54975900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20991807900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
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
  "duration": 189351400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
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
  "duration": 178714600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1076350600,
  "status": "passed"
});
formatter.before({
  "duration": 5624957900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;4",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/mentorship/\"",
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
  "name": "get the page score value \"5\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"5\" and \"4\"",
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
  "duration": 2354230600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 83441900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/mentorship/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 91943400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 78718000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 46552500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19308450200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
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
  "duration": 139072900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
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
  "duration": 147344700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1062240700,
  "status": "passed"
});
formatter.before({
  "duration": 5488900100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;5",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/hackathon/\"",
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
  "name": "get the page score value \"6\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"6\" and \"4\"",
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
  "duration": 1871546300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 75957100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/hackathon/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 104424600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 74880300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 54391900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 16816669900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
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
  "duration": 140345000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
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
  "duration": 153801100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1100335200,
  "status": "passed"
});
formatter.before({
  "duration": 5495699900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;6",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/imarticus-networking/\"",
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
  "name": "get the page score value \"7\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"7\" and \"4\"",
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
  "duration": 2532804400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 110231900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/imarticus-networking/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 119742400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 77275900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 42667700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21458765500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
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
  "duration": 136063200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
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
  "duration": 118744000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1071022700,
  "status": "passed"
});
formatter.before({
  "duration": 5628936700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;7",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/alumni-network/\"",
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
  "name": "get the page score value \"8\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"8\" and \"4\"",
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
  "duration": 1937133200,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 63790500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/alumni-network/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 86262800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 78705900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 51497900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19503874700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
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
  "duration": 119965300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
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
  "duration": 140586500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1090026400,
  "status": "passed"
});
formatter.before({
  "duration": 5630934000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;8",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/testimonials/\"",
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
  "name": "get the page score value \"9\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"9\" and \"4\"",
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
  "duration": 2289392400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 84185500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/testimonials/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 82138000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 117784800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 64939800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19778579500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
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
  "duration": 132207900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
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
  "duration": 100147900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1085062300,
  "status": "passed"
});
formatter.before({
  "duration": 5502287000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;9",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/data-science-club/\"",
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
  "name": "get the page score value \"10\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"10\" and \"4\"",
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
  "duration": 2487968100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 68722000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/data-science-club/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 91342900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 79220200,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 58067500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 18783658300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 115261700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 116675000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1096481600,
  "status": "passed"
});
formatter.before({
  "duration": 5596538600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---career-pages;:-user-navigates-to-the-application;;10",
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/scholarship/\"",
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
  "name": "get the page score value \"11\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "get the page Time value \"11\" and \"4\"",
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
  "duration": 2450298600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 67422700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/scholarship/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 99818000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 91840100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 59600100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 17655464900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 118014200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 94082800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1048441900,
  "status": "passed"
});
formatter.uri("ProgramPages.feature");
formatter.feature({
  "line": 2,
  "name": "Page Speed Testing - Program Pages",
  "description": "\r\nTesting imarticus program pages",
  "id": "page-speed-testing---program-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application",
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
  "name": "Enter the Web page URl \"\u003cProgramURL\u003e\"",
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
  "name": "get the page score value \"\u003cRow\u003e\" and \"\u003cCell\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"\u003cRow1\u003e\" and \"\u003cCell1\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "Row",
        "Cell",
        "Row1",
        "Cell1"
      ],
      "line": 16,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
        "12",
        "3",
        "12",
        "4"
      ],
      "line": 17,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
        "13",
        "3",
        "13",
        "4"
      ],
      "line": 18,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/financial-analysis-prodegree/",
        "14",
        "3",
        "14",
        "4"
      ],
      "line": 19,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
        "15",
        "3",
        "15",
        "4"
      ],
      "line": 20,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
        "16",
        "3",
        "16",
        "4"
      ],
      "line": 21,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
        "17",
        "3",
        "17",
        "4"
      ],
      "line": 22,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-prodegree/",
        "18",
        "3",
        "18",
        "4"
      ],
      "line": 23,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/machine-learning-prodegree/",
        "19",
        "3",
        "19",
        "4"
      ],
      "line": 24,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
        "20",
        "3",
        "20",
        "4"
      ],
      "line": 25,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;10"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
        "21",
        "3",
        "21",
        "4"
      ],
      "line": 26,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;11"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
        "22",
        "3",
        "22",
        "4"
      ],
      "line": 27,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;12"
    },
    {
      "cells": [
        "https://www.imarticus.org/Digital-Marketing-Prodegree/",
        "23",
        "3",
        "23",
        "4"
      ],
      "line": 28,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;13"
    },
    {
      "cells": [
        "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
        "24",
        "3",
        "24",
        "4"
      ],
      "line": 29,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;14"
    },
    {
      "cells": [
        "https://www.imarticus.org/certified-investment-banking-operations-program/",
        "25",
        "3",
        "25",
        "4"
      ],
      "line": 30,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;15"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5528359600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/banking-and-wealth-management-bootcamp/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"12\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"12\" and \"4\"",
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
  "duration": 2104109700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 78521900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 128534600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 91108500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20429413200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 124019700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 90546100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1064578600,
  "status": "passed"
});
formatter.before({
  "duration": 5538931000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/Professional-Certificate-Course-FinTech/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"13\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"13\" and \"4\"",
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
  "duration": 1836039100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 60295100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 133902700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 96210300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22055529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 121713700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 87743000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1026879700,
  "status": "passed"
});
formatter.before({
  "duration": 5556932900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/financial-analysis-prodegree/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"14\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"14\" and \"4\"",
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
  "duration": 2226836000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 72277900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/financial-analysis-prodegree/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 140543300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 92017500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22498379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 143095500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 108109100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 1061685800,
  "status": "passed"
});
formatter.before({
  "duration": 5785627300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/credit-risk-underwriting-prodegree/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"15\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"15\" and \"4\"",
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
  "duration": 2247599200,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 64388200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 120669800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 83269700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22071058500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 114860700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 102065600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 1016254900,
  "status": "passed"
});
formatter.before({
  "duration": 5501486100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"16\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"16\" and \"4\"",
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
  "duration": 2164209900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 75588400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 179757100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 84855100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21066034900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 83866400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 93944300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1070095700,
  "status": "passed"
});
formatter.before({
  "duration": 5536296100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"17\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"17\" and \"4\"",
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
  "duration": 2252377400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 103469400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 183173600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 81796900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21088823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 120607900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 80123400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 1095048900,
  "status": "passed"
});
formatter.before({
  "duration": 5508033000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/data-science-prodegree/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"18\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"18\" and \"4\"",
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
  "duration": 2186416700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 140014300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/data-science-prodegree/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 99079500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 68706000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19807371800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 99077200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 88706800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 1069497200,
  "status": "passed"
});
formatter.before({
  "duration": 5549538900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/machine-learning-prodegree/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"19\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"19\" and \"4\"",
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
  "duration": 2169942800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 80932100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/machine-learning-prodegree/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 108686400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 75667500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20412784200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 115176100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 65840100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 1043169400,
  "status": "passed"
});
formatter.before({
  "duration": 5423809500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-data-analytics/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"20\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"20\" and \"4\"",
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
  "duration": 1972986700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 108078100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 116724700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 85324400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 23066760900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 86025100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 67366000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 1066039400,
  "status": "passed"
});
formatter.before({
  "duration": 5564799500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"21\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"21\" and \"4\"",
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
  "duration": 1940712700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 78418800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 155310100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 80870300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22516550600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 102501200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 80583100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 1032584700,
  "status": "passed"
});
formatter.before({
  "duration": 5377378700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"22\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"22\" and \"4\"",
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
  "duration": 2147537900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 74233100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 142493700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 74348900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19936867600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 106323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 57423100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 1104369800,
  "status": "passed"
});
formatter.before({
  "duration": 5678110000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/Digital-Marketing-Prodegree/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"23\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"23\" and \"4\"",
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
  "duration": 2110028400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 59700900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Digital-Marketing-Prodegree/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 116901800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 81997500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20312572300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 95257900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 144535300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 1014092500,
  "status": "passed"
});
formatter.before({
  "duration": 5476444600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"24\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"24\" and \"4\"",
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
  "duration": 2286848700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 88726400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 164597900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 78114800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20515352700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 99513200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 87547400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 1059823700,
  "status": "passed"
});
formatter.before({
  "duration": 5550116900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": user navigates to the Application",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProgramPages"
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/certified-investment-banking-operations-program/\"",
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
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "get the page score value \"25\" and \"3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"25\" and \"4\"",
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
  "duration": 2310972600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 66951700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/certified-investment-banking-operations-program/",
      "offset": 24
    }
  ],
  "location": "Homepage.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 142785600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 88852400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19703286100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "Homepage.get_the_page_score_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 74408600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    },
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "Homepage.get_the_page_time_value_something_and_something(int,int)"
});
formatter.result({
  "duration": 103846700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 1039337200,
  "status": "passed"
});
formatter.uri("imarticus.feature");
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
  "name": "get the page score value \"\u003cRow\u003e\" and \"\u003cCell\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"\u003cRow1\u003e\" and \"\u003cCell1\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "Row",
        "Cell",
        "Row1",
        "Cell1"
      ],
      "line": 16,
      "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "2",
        "4"
      ],
      "line": 17,
      "id": "page-speed-testing---home-page;:-user-navigates-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5656114200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
  "name": "get the page score value \"2\" and \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "get the page Time value \"2\" and \"4\"",
  "matchedColumns": [
    2,
    3
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
  "duration": 1980337500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Enter_the_Web_page_URL()"
});
formatter.result({
  "duration": 63843800,
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
  "duration": 66326200,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.click_on_Anazlyse()"
});
formatter.result({
  "duration": 86890100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21502955900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 98706400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 71324500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 1031198300,
  "status": "passed"
});
});