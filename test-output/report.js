$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Pavan_JavaPractice/Automation/BDDFramework/src/main/java/com/crm/qa/Features/LoginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login",
  "description": "",
  "id": "crm-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 14440566741,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 69562605,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase.user_enters_username_and_password()"
});
formatter.result({
  "duration": 5369934452,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase.user_is_on_home_page()"
});
formatter.result({
  "duration": 14747929,
  "status": "passed"
});
});