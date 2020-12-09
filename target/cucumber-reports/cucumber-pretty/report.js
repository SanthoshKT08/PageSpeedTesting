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
  "duration": 7618428900,
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
  "duration": 3746209300,
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
  "duration": 491373000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 164185500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 20562156400,
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
  "duration": 4154129300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 342044600,
  "status": "passed"
});
formatter.uri("2pageSpeedinsight_imarticus_Programpages.feature");
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
  "name": "Enter the Web page URl \"\u003cProgramURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
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
  "name": "get the pageSpeedDatas \"\u003cPageSpeedData\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;",
  "rows": [
    {
      "cells": [
        "ProgramURL",
        "PageSpeedData"
      ],
      "line": 15,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;1"
    },
    {
      "cells": [
        "https://www.imarticus.org/banking-and-wealth-management-bootcamp/",
        "12"
      ],
      "line": 16,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;2"
    },
    {
      "cells": [
        "https://www.imarticus.org/Professional-Certificate-Course-FinTech/",
        "13"
      ],
      "line": 17,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;3"
    },
    {
      "cells": [
        "https://www.imarticus.org/financial-analysis-prodegree/",
        "14"
      ],
      "line": 18,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;4"
    },
    {
      "cells": [
        "https://www.imarticus.org/credit-risk-underwriting-prodegree/",
        "15"
      ],
      "line": 19,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;5"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-finance-and-accounting/",
        "16"
      ],
      "line": 20,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;6"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-banking-and-credit-underwriting/",
        "17"
      ],
      "line": 21,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;7"
    },
    {
      "cells": [
        "https://www.imarticus.org/data-science-prodegree/",
        "18"
      ],
      "line": 22,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;8"
    },
    {
      "cells": [
        "https://www.imarticus.org/machine-learning-prodegree/",
        "19"
      ],
      "line": 23,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;9"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-data-analytics/",
        "20"
      ],
      "line": 24,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;10"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-in-analytics-and-artificial-intelligence/",
        "21"
      ],
      "line": 25,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;11"
    },
    {
      "cells": [
        "https://www.imarticus.org/post-graduate-program-for-agile-business-analyst/",
        "22"
      ],
      "line": 26,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;12"
    },
    {
      "cells": [
        "https://www.imarticus.org/Digital-Marketing-Prodegree/",
        "23"
      ],
      "line": 27,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;13"
    },
    {
      "cells": [
        "https://www.imarticus.org/Post-Graduation-Program-in-Digital-Marketing-with-Digitas/",
        "24"
      ],
      "line": 28,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;14"
    },
    {
      "cells": [
        "https://www.imarticus.org/certified-investment-banking-operations-program/",
        "25"
      ],
      "line": 29,
      "id": "page-speed-testing---program-pages;:-user-navigates-to-the-application;;15"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5646568200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/banking-and-wealth-management-bootcamp/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
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
  "duration": 2621416300,
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
  "duration": 201173000,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 119032600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "duration": 57426500,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "duration": 21956953000,
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
  "duration": 2770931300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 315407700,
  "status": "passed"
});
formatter.before({
  "duration": 527710989300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x006EC013+3194899]\n\tOrdinal0 [0x005D6021+2056225]\n\tOrdinal0 [0x0046F608+587272]\n\tOrdinal0 [0x00463735+538421]\n\tOrdinal0 [0x00462A6F+535151]\n\tOrdinal0 [0x00462E45+536133]\n\tOrdinal0 [0x004627A5+534437]\n\tOrdinal0 [0x0046BBC9+572361]\n\tOrdinal0 [0x00462754+534356]\n\tOrdinal0 [0x00463475+537717]\n\tOrdinal0 [0x00462A6F+535151]\n\tOrdinal0 [0x00462E45+536133]\n\tOrdinal0 [0x004627A5+534437]\n\tOrdinal0 [0x00469EFE+564990]\n\tOrdinal0 [0x00462754+534356]\n\tOrdinal0 [0x00463475+537717]\n\tOrdinal0 [0x00462A6F+535151]\n\tOrdinal0 [0x00462E45+536133]\n\tOrdinal0 [0x004627A5+534437]\n\tOrdinal0 [0x00468186+557446]\n\tOrdinal0 [0x00462754+534356]\n\tOrdinal0 [0x00463475+537717]\n\tOrdinal0 [0x00462A6F+535151]\n\tOrdinal0 [0x00462E45+536133]\n\tOrdinal0 [0x004627A5+534437]\n\tOrdinal0 [0x004674A7+554151]\n\tOrdinal0 [0x00462754+534356]\n\tOrdinal0 [0x00463475+537717]\n\tOrdinal0 [0x00462A6F+535151]\n\tOrdinal0 [0x00462E45+536133]\n\tOrdinal0 [0x004627A5+534437]\n\tOrdinal0 [0x0045F06C+520300]\n\tOrdinal0 [0x00462754+534356]\n\tOrdinal0 [0x004625BF+533951]\n\tOrdinal0 [0x004623D3+533459]\n\tOrdinal0 [0x00470620+591392]\n\tOrdinal0 [0x00412A0C+207372]\n\tOrdinal0 [0x00411D0D+204045]\n\tOrdinal0 [0x0040FC1B+195611]\n\tOrdinal0 [0x003F3B7F+80767]\n\tOrdinal0 [0x003F4B4E+84814]\n\tOrdinal0 [0x003F4AD9+84697]\n\tOrdinal0 [0x005ECE64+2149988]\n\tGetHandleVerifier [0x0085BE95+1400773]\n\tGetHandleVerifier [0x0085BB61+1399953]\n\tGetHandleVerifier [0x008631FA+1430314]\n\tGetHandleVerifier [0x0085C69F+1402831]\n\tOrdinal0 [0x005E3D61+2112865]\n\tOrdinal0 [0x005EE5CB+2155979]\n\tOrdinal0 [0x005EE6F5+2156277]\n\tOrdinal0 [0x005FF26E+2224750]\n\tBaseThreadInitThunk [0x7646FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x76EC75F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x76EC75C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.PageSpeed.Generics.Baseclass.selectBrowser(Baseclass.java:20)\r\n\tat com.PageSpeed.StepDefinitions.ServiceHooks.intializeBrowser(ServiceHooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.PageSpeed.CucumberOptions.TestRunner.feature(TestRunner.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/Professional-Certificate-Course-FinTech/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 3236743389600,
  "status": "passed"
});
formatter.before({
  "duration": 6139227600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
  "name": "Enter the Web page URl \"https://www.imarticus.org/financial-analysis-prodegree/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Anazlyse",
  "keyword": "Then "
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
  "duration": 2131248500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Windows\\TEMP\\scoped_dir1...}, goog:chromeOptions: {debuggerAddress: localhost:54511}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 867cdda1f68f88d4b801144555c546f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.PageSpeed.StepDefinitions.GooglePageInsight.enter_the_URL(GooglePageInsight.java:22)\r\n\tat ✽.Given Enter the URL \"https://developers.google.com/speed/pagespeed/insights/\"(2pageSpeedinsight_imarticus_Programpages.feature:7)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.click_on_Anazlyse()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePageInsight.wait_for_few_minutes()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 271250200,
  "status": "passed"
});
