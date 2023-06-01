*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${url}    http://localhost:4200/

*** Test Cases ***
Open Website
    Open Site
    Click Animals
    Click Employees
    CloseWebsite

*** Keywords ***
Open Site
    Open Browser    ${url}     Chrome    options=add_experimental_option("detach", True)
    Maximize Browser Window
    Capture Page Screenshot    home.png

Click Animals
    Click Element    //*[@id="navbarSupportedContent"]/ul/li[1]/a
    Click Element    //*[@id="navbarSupportedContent"]/ul/li[2]/a
Click Employees
    Click Element    //*[@id="navbarSupportedContent"]/ul/li[3]/a

CloseWebsite
    Close Browser
