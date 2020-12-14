$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_GooglePageInsight.feature");
formatter.feature({
  "line": 2,
  "name": "Page Speed on Testing Google page insight - For Homepage, Career pages and Program pages.",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Tester testing on imarticus home page - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-google-page-insight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HomePage-Imarticus"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "get the pageSpeedDatas \"\u003cPageSpeedData\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-google-page-insight;",
  "rows": [
    {
      "cells": [
        "PageSpeedData"
      ],
      "line": 13,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-google-page-insight;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 14,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-google-page-insight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7280066300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Tester testing on imarticus home page - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-google-page-insight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 4,
      "name": "@HomePage-Imarticus"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Web page URl \"http://imarticus.org/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 4070687000,
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
  "duration": 145325600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 69579700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19588310400,
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
  "duration": 3283363000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1067652300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"\u003ccareerURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"\u003cPageSpeedData\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;",
  "rows": [
    {
      "cells": [
        "careerURL",
        "PageSpeedData"
      ],
      "line": 25,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/careers/",
        "3"
      ],
      "line": 26,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/placement/",
        "4"
      ],
      "line": 27,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/mentorship/",
        "5"
      ],
      "line": 28,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/hackathon/",
        "6"
      ],
      "line": 29,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/imarticus-networking/",
        "7"
      ],
      "line": 30,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/alumni-network/",
        "8"
      ],
      "line": 31,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/testimonials/",
        "9"
      ],
      "line": 32,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-club/",
        "10"
      ],
      "line": 33,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/scholarship/",
        "11"
      ],
      "line": 34,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5608113000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/careers/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"3\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2964327100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/careers/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 126907800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 72974200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 17895907100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2564968500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1073378400,
  "status": "passed"
});
formatter.before({
  "duration": 5555008600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/placement/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"4\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2730807900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/placement/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 119769500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 75455400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 18528195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2539492700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1060996300,
  "status": "passed"
});
formatter.before({
  "duration": 5795950000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/mentorship/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"5\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2519066400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/mentorship/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 145111300,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 60981600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20196768300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2456992900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1034081900,
  "status": "passed"
});
formatter.before({
  "duration": 5545755800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/hackathon/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"6\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2357851900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/hackathon/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 113658300,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 80215500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19601052600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2578038800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1014116400,
  "status": "passed"
});
formatter.before({
  "duration": 5748907600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/imarticus-networking/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"7\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3078823200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/imarticus-networking/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 122640600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 64558200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19899845700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2545492200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1073474900,
  "status": "passed"
});
formatter.before({
  "duration": 5640696100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/alumni-network/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"8\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2548958000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/alumni-network/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 123180700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 66290800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 18041902100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2560845500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1067797300,
  "status": "passed"
});
formatter.before({
  "duration": 5672103400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/testimonials/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"9\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2324074500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/testimonials/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 115281700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 86027200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19627374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2517646400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1645414800,
  "status": "passed"
});
formatter.before({
  "duration": 5695560200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/data-science-club/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"10\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2760430900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/data-science-club/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 198365400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 90380000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 18385100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2425524100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1050132200,
  "status": "passed"
});
formatter.before({
  "duration": 5686092900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": ": Tester testing on imarticus Career pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-career-pages---page-speed-testing-in-google-page-insight;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 16,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter the Web page URl \"https://www.imarticus.org/scholarship/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get the pageSpeedDatas \"11\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2629072200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/scholarship/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 123916500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 64472100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19208454200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2444779300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1071348200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"\u003cProgramURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"\u003cPageSpeedData\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "PageSpeedData"
      ],
      "line": 46,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
        "12"
      ],
      "line": 47,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
        "13"
      ],
      "line": 48,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/financial-analysis-prodegree/",
        "14"
      ],
      "line": 49,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
        "15"
      ],
      "line": 50,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
        "16"
      ],
      "line": 51,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
        "17"
      ],
      "line": 52,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-prodegree/",
        "18"
      ],
      "line": 53,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/machine-learning-prodegree/",
        "19"
      ],
      "line": 54,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
        "20"
      ],
      "line": 55,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;10"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
        "21"
      ],
      "line": 56,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;11"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
        "22"
      ],
      "line": 57,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;12"
    },
    {
      "cells": [
        "https://www.imarticus.org/Digital-Marketing-Prodegree/",
        "23"
      ],
      "line": 58,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;13"
    },
    {
      "cells": [
        "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
        "24"
      ],
      "line": 59,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;14"
    },
    {
      "cells": [
        "https://www.imarticus.org/certified-investment-banking-operations-program/",
        "25"
      ],
      "line": 60,
      "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;15"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5505875900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/banking-and-wealth-management-bootcamp/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"12\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3079218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 154825300,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 68240300,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 45804400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21039987200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2416215900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1070377000,
  "status": "passed"
});
formatter.before({
  "duration": 5422707900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/Professional-Certificate-Course-FinTech/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"13\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3050849700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 154460900,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 67932100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 43678100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19134799100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2445461700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 1567093900,
  "status": "passed"
});
formatter.before({
  "duration": 5637107300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/financial-analysis-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"14\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2839366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/financial-analysis-prodegree/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 138519400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 69620800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 55093400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19852806600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2440065500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 1072957000,
  "status": "passed"
});
formatter.before({
  "duration": 5565679700,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/credit-risk-underwriting-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"15\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2813772400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 154485600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 76666000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 37859500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20918635600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2484080900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1039167600,
  "status": "passed"
});
formatter.before({
  "duration": 6000563000,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"16\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2743141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 189325600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 68085100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 37827400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20290016400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2507016700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 1071798500,
  "status": "passed"
});
formatter.before({
  "duration": 5621504000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"17\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2835866000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 179732000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 71096000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 42267700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19292124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2503003100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 1049387100,
  "status": "passed"
});
formatter.before({
  "duration": 5549384100,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/data-science-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"18\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2377673100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/data-science-prodegree/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 166390500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 63580700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 38704700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19868434600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2453254000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 1056681100,
  "status": "passed"
});
formatter.before({
  "duration": 5579192900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/machine-learning-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"19\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2291818800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/machine-learning-prodegree/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 145494700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 81403800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 36062700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22168520400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2462304700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 1046277100,
  "status": "passed"
});
formatter.before({
  "duration": 5531870000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-data-analytics/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"20\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2599643800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 176580200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 64609100,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 39804000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 19614147800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2540253300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 1074721900,
  "status": "passed"
});
formatter.before({
  "duration": 5613391100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"21\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2263681900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 184752800,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 69355600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 39328900,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20345229500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2484072800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 1065892100,
  "status": "passed"
});
formatter.before({
  "duration": 5673398600,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"22\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2936968000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 157864200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 64283600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 42202000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20564366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2441731300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 1067818100,
  "status": "passed"
});
formatter.before({
  "duration": 5565428000,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/Digital-Marketing-Prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"23\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2957469100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Digital-Marketing-Prodegree/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 141020700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 74523000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 42505500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20444781600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2353446300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 1102852200,
  "status": "passed"
});
formatter.before({
  "duration": 5627968300,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"24\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2645669600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 182152600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 70330900,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 37276600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 22935015700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2436294100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 1081345000,
  "status": "passed"
});
formatter.before({
  "duration": 5537086300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": ": Tester testing on imarticus Program pages - page speed testing in Google page insight",
  "description": "",
  "id": "page-speed-on-testing-google-page-insight---for-homepage,-career-pages-and-program-pages.;:-tester-testing-on-imarticus-program-pages---page-speed-testing-in-google-page-insight;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GooglepageInsight-PageSpeedTesting"
    },
    {
      "line": 36,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter the Web page URl \"https://www.imarticus.org/certified-investment-banking-operations-program/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on Anazlyse",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "wait for few minutes",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "get the pageSpeedDatas \"25\"",
  "matchedColumns": [
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
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 2770093200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/certified-investment-banking-operations-program/",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.enter_the_Web_page_URl(String)"
});
formatter.result({
  "duration": 163387000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 68442500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 38811700,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21002571200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 24
    }
  ],
  "location": "GooglePageInsight.get_the_pagespeeddatas_something(int)"
});
formatter.result({
  "duration": 2470871000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 1087381000,
  "status": "passed"
});
formatter.uri("02_GTmetrix.feature");
formatter.feature({
  "line": 2,
  "name": "Page Speed Testing on GTmetrix tool - For Homepage, Career pages and Program pages.",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Select the region",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter the page URL \"\u003cProgramURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the getGTmetixData \"\u003cRowValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "RowValue"
      ],
      "line": 15,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;1"
    },
    {
      "cells": [
        "http://imarticus.org/",
        "2"
      ],
      "line": 16,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5655727400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Select the region",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter the page URL \"http://imarticus.org/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "get the getGTmetixData \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 4738672500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 73352400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 343643500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1086620600,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.select_the_region()"
});
formatter.result({
  "duration": 4308744700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://imarticus.org/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2192572400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 544438900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 41525400500,
  "error_message": "org.openqa.selenium.TimeoutException: Supplied function might have stalled\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:221)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat ✽.Then get the getGTmetixData \"2\"(02_GTmetrix.feature:12)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 15023154000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"\u003cProgramURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"\u003cRowValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "RowValue"
      ],
      "line": 29,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/careers/",
        "3"
      ],
      "line": 30,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/placement/",
        "4"
      ],
      "line": 31,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/mentorship/",
        "5"
      ],
      "line": 32,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/hackathon/",
        "6"
      ],
      "line": 33,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/imarticus-networking/",
        "7"
      ],
      "line": 34,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/alumni-network/",
        "8"
      ],
      "line": 35,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/testimonials/",
        "9"
      ],
      "line": 36,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-club/",
        "10"
      ],
      "line": 37,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/scholarship/",
        "11"
      ],
      "line": 38,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5748775200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/careers/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3310404000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 66297300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 334717200,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1077948300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/careers/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2173344800,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 1959278800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 36072559300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 1140907400,
  "status": "passed"
});
formatter.before({
  "duration": 5517539200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/placement/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3236726000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 68611300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 398136400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1069719600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/placement/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2195190000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 555315300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 33132231500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 1108450100,
  "status": "passed"
});
formatter.before({
  "duration": 5650435400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/mentorship/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3464872000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 98822300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 332609800,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1080935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/mentorship/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2130908500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 582000000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 33040554000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 1052172600,
  "status": "passed"
});
formatter.before({
  "duration": 5578421500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/hackathon/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3505277400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 102420900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 323111400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1093156200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/hackathon/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2139742300,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 580643700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 29107235000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 1121598100,
  "status": "passed"
});
formatter.before({
  "duration": 5516633200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/imarticus-networking/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"7\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 5119804400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 78133600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 319834700,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1078614600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/imarticus-networking/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2151338800,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 552934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 28945373500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 1122652500,
  "status": "passed"
});
formatter.before({
  "duration": 5636049600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/alumni-network/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3104685500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 91459000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 315964900,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1112800100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/alumni-network/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2177973500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 568211600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 29857529200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 1354355200,
  "status": "passed"
});
formatter.before({
  "duration": 5707597400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/testimonials/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"9\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 4508866200,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 68041800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 393109500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1094062300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/testimonials/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2123837100,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 544326700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 30876695000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 1105574600,
  "status": "passed"
});
formatter.before({
  "duration": 5541222700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/data-science-club/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"10\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3142317900,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 63515700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 254069000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1073503700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/data-science-club/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2195908800,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 593759700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 35325224300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 1139675200,
  "status": "passed"
});
formatter.before({
  "duration": 5550719100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 18,
      "name": "@CareerPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter the page URL \"https://www.imarticus.org/scholarship/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "get the getGTmetixData \"11\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3276769400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 56401800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 309734900,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1073703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/scholarship/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2141675200,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 1011608000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 41509967700,
  "error_message": "org.openqa.selenium.TimeoutException: Supplied function might have stalled\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:221)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat ✽.Then get the getGTmetixData \"11\"(02_GTmetrix.feature:26)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 60692407200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enter the page URL \"\u003cProgramURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "get the getGTmetixData \"\u003cRowValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "RowValue"
      ],
      "line": 51,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
        "12"
      ],
      "line": 52,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
        "13"
      ],
      "line": 53,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/financial-analysis-prodegree/",
        "14"
      ],
      "line": 54,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
        "15"
      ],
      "line": 55,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
        "16"
      ],
      "line": 56,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
        "17"
      ],
      "line": 57,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-prodegree/",
        "18"
      ],
      "line": 58,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/machine-learning-prodegree/",
        "19"
      ],
      "line": 59,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
        "20"
      ],
      "line": 60,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;10"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
        "21"
      ],
      "line": 61,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;11"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
        "22"
      ],
      "line": 62,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;12"
    },
    {
      "cells": [
        "https://www.imarticus.org/Digital-Marketing-Prodegree/",
        "23"
      ],
      "line": 63,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;13"
    },
    {
      "cells": [
        "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
        "24"
      ],
      "line": 64,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;14"
    },
    {
      "cells": [
        "https://www.imarticus.org/certified-investment-banking-operations-program/",
        "25"
      ],
      "line": 65,
      "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;15"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5722461000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 40,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enter the page URL \"https://www.imarticus.org/banking-and-wealth-management-bootcamp/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "get the getGTmetixData \"12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3857316200,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 90223900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 311114700,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1108087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2180637900,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 1018284000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 41508867600,
  "error_message": "org.openqa.selenium.TimeoutException: Supplied function might have stalled\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:221)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat ✽.Then get the getGTmetixData \"12\"(02_GTmetrix.feature:48)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 60755849200,
  "status": "passed"
});
formatter.before({
  "duration": 5588638400,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 40,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enter the page URL \"https://www.imarticus.org/Professional-Certificate-Course-FinTech/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "get the getGTmetixData \"13\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 7710260600,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 74158300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 315479000,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1066153400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2246310900,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 989924100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 41509547000,
  "error_message": "org.openqa.selenium.TimeoutException: Supplied function might have stalled\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:221)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat ✽.Then get the getGTmetixData \"13\"(02_GTmetrix.feature:48)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 60730439700,
  "status": "passed"
});
formatter.before({
  "duration": 5492839700,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 40,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enter the page URL \"https://www.imarticus.org/financial-analysis-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "get the getGTmetixData \"14\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3033420700,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 63452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 445025200,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1109907300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/financial-analysis-prodegree/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2195275700,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 992039400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
formatter.result({
  "duration": 41522527900,
  "error_message": "org.openqa.selenium.TimeoutException: Supplied function might have stalled\nBuild info: version: \u00274.0.0-alpha-7\u0027, revision: \u0027de8579b6d5\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:221)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat ✽.Then get the getGTmetixData \"14\"(02_GTmetrix.feature:48)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.PageSpeed.Generics.FileUtilities.handleExplicitWait(FileUtilities.java:171)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.verifytheTextInGtmetix(GTmetrixObject.java:86)\r\n\tat com.PageSpeed.PageObjects.GTmetrixObject.getGTmetixData(GTmetrixObject.java:108)\r\n\tat com.PageSpeed.StepDefinitions.GTMetrix.get_the_getgtmetixdata_something(GTMetrix.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 25021492300,
  "status": "passed"
});
formatter.before({
  "duration": 5501405000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Tester testing on imarticus home page - page speed testing in GTmetrix tool",
  "description": "",
  "id": "page-speed-testing-on-gtmetrix-tool---for-homepage,-career-pages-and-program-pages.;tester-testing-on-imarticus-home-page---page-speed-testing-in-gtmetrix-tool;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GTmetrix-PageSpeedTesting"
    },
    {
      "line": 40,
      "name": "@ProgramPages-Imarticus"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Enter the URL \"https://gtmetrix.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on Login in",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Enter the Email \"santhosh@codewave.in\" and password \"1@santhosh\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on login",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enter the page URL \"https://www.imarticus.org/credit-risk-underwriting-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Click on GTmetrix Anazlyse",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "get the getGTmetixData \"15\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gtmetrix.com/",
      "offset": 15
    }
  ],
  "location": "GooglePageInsight.enter_the_URL(String)"
});
formatter.result({
  "duration": 3450694400,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_Login_in()"
});
formatter.result({
  "duration": 70078000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh@codewave.in",
      "offset": 17
    },
    {
      "val": "1@santhosh",
      "offset": 53
    }
  ],
  "location": "GTMetrix.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 348285500,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_login()"
});
formatter.result({
  "duration": 1079954300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
      "offset": 20
    }
  ],
  "location": "GTMetrix.enter_the_page_URL(String)"
});
formatter.result({
  "duration": 2220394700,
  "status": "passed"
});
formatter.match({
  "location": "GTMetrix.click_on_GTmetrix_Anazlyse()"
});
formatter.result({
  "duration": 1352385300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 24
    }
  ],
  "location": "GTMetrix.get_the_getgtmetixdata_something(int)"
});
