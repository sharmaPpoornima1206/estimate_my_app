jQuery.noConflict();jQuery(document).ready(function($){var imageIDs=[];var CONSTANTS=function(){var globals={small_img:"Your app probably has around 4-5 key feature pages (excluding any static content, sign in, sign up.",medium_img:" Your app probably has around 6-9 key feature pages (excluding any static content, sign in, sign up.) ",large_img:" Your app probably has around 10-15 key feature pages (excluding any static content, sign in, sign up.",mvp_img:" Minimum Viable Product. Very raw but functional, no UI designer required. ",basic_img:"Still basic but pleasing to the eye, perhaps using purchased template",polished_img:"Professional bespoke UI design. May also have some animations and transitions etc. ",email_signup_img:"Classic sign up with an email and password. ",facebook_signup_img:"Sign up and sign in with a Facebook account.",google_signup_img:"Sign up and sign in with a Google account.",github_signup_img:"Sign up and sign in with a Github account.",linkedin_signup_img:"Sign up and sign in with a LinkedIn account.",subdomains_img:"In combination with multi-tenant accounts, this would allow your customers to access their account with their own subdomain, eg. acme.yourapp.com or xyz.yourapp.com",custom_domains_img:"In combination with multi-tenant accounts, this would allow your customers to access their account with their own domain, eg. www.acme.com or www.xyz.com",dashboard_img:"A dashboard would usually be the first thing a user sees when logged in and would summarize data and show graphs and notices.",file_upload_img:"Users would be able to upload files, images, PDF's etc.",user_profile_img:"Users will able to manage and publish their profiles to other users within your app, eg Google profiles.",notification_img:"User might recieve regular automated notifications from the app to drive engagement or notify them of changes.",ratings_img:"Ratings and reviews might be restaurant reviews or customer satisfaction ratings. ",free_text_searching_img:"Giving users the ability to search their data in natural ways perhaps with a type-ahead style search box.",calendaring_img:"Display and capture of data in a calendar format.",maps_img:"Showing a map with data points, eg venue locations, driver locations etc.",bookings_img:"Selecting start and end dates, managing capacity etc.",messaging_img:"Allowing users within the app to send messages to other account users.",social_sharing_img:" Ability to share information in a controlled way on social media accounts to drive engagement. ",commenting_img:"Classic forum functionality for account users or simple commenting on information. ",payment_processing_img:"You will process adhoc or regular payments from users and manage refunds etc.",shopping_cart_img:"Users will be able to browse products and add them to a cart, Amazon style.",product_management_img:"Ability to manage data, eg product listings, availabilities or other data relevant to your domain.",cms_img:" A content management system would allow editing of significant parts of the static content of the app. ",user_admin_pages_img:"Account administrators would be able to list/add/remove/suspend users.",content_approval_img:"Account administrators would oversee content submitted by users for publication and would have an approval workflow.",usage_analytics_img:"Find out where your users come from and how they use your app. ",performance_monitoring_img:"As you scale up it is important to know that you are maintaining a good user experience and making efficient use of your hosting environment.    ",multilingual_support_img:"Provide supprt for multiple languages for your app.",third_party_services_img:"Perhaps a data feed that you need to integrate with or a partner app.",api_img:"You are building a platform and you want others to integrate with you directly.",sms_img:"Allow your app to send SMS messages.",ssl_certificate_img:"The industry standard way to ensure your users data is safe during their use of your app. ",dos_protection_img:"For high volume app with a high public profile, you may be the target of Denial of Service attacks. ",authentication_img:"More common for financial or highly sensitive information based apps.",crash_reporting_img_android:" Detailed reports of the errors in your app. ",payment_information_collection_img_android:" To collect credit cards or other payment methods from users for use with a 3rd party payment provider. ",in_app_purchasing_img_android:" Ability for the user to purchase additional content or functionality within the app. ",app_icon_designing_img_android:" Professionally designed app icon for multiple device resolutions.",cloud_syncing_img_android:" Allow user data to be shared between mobile and/or desktop devices. ",device_sensor_data_img_android:" Ability to use and record data from device sensors, eg Accelerometer, Gyroscope or Compass. ",barcodes_img_android:" Ability to scan or display barcodes or QR codes. ",activity_feed_img_android:" An activity feed would show what user have been doing recently."}
return{getValue:function(s){return globals[s]}}}();$("#small_img").mouseover(function(){var val=CONSTANTS.getValue("small_img");$(this).attr('title',val);$(this).tooltip()});var jsonObj=[];var howBigYourApp=0;var levelOfUI=0;var TotalValue=0;var totalUsersAccounts=0;var email=0;var facebook=0;var google=0;var linkedIn=0;var github=0;var subdomains=0;var custom_domains=0;var totalUsersContents=0;var dashboard=0;var fileUpload=0;var userProfile=0;var notification=0;var ratingsReviews=0;var textSearching=0;var activityFeed=0;var totaldatesLocations=0;var calendaring=0;var maps=0;var bookings=0;var totalsocialEngage=0;var messaging=0;var socialSharing=0;var commenting=0;var totalbillingEcomm=0;var payment=0;var shoppingCart=0;var product=0;var inAppPurchasing=0;var paymentCollection=0;var totaladminFeedback=0;var cmsIntegration=0;var adminPages=0;var contentApproval=0;var usageAnalytics=0;var monitoring=0;var multilingual=0;var crashReporting=0;var totalapiIntegration=0;var thirdPartyService=0;var apiIntegration=0;var smsMessaging=0;var totalsecurity=0;var sslCert=0;var dosProtection=0;var twoFactorAuth=0;var totalMobileFeature=0;var appIcon=0;var cloudSync=0;var deviceSensor=0;var barcode=0;$("li.tm_pb_tab_0").bind('click',function(){$('div.tm_pb_all_tab > div.tm_pb_tab_0').removeClass("tm_pb_tab_0");jsonObj=[];$("div .tm_pb_tab_1 .color").removeClass("color");$("#total").text('');totalUsersAccounts=0;totalUsersContents=0;totaldatesLocations=0;totalsocialEngage=0;totalbillingEcomm=0;totaladminFeedback=0;totalapiIntegration=0;totalsecurity=0;totalMobileFeature=0;howBigYourApp=0;levelOfUI=0;TotalValue=0;email=0;facebook=0;google=0;linkedIn=0;github=0;subdomains=0;custom_domains=0;dashboard=0;fileUpload=0;userProfile=0;notification=0;ratingsReviews=0;textSearching=0;activityFeed=0;calendaring=0;maps=0;bookings=0;messaging=0;socialSharing=0;commenting=0;payment=0;shoppingCart=0;product=0;inAppPurchasing=0;paymentCollection=0;cmsIntegration=0;adminPages=0;contentApproval=0;usageAnalytics=0;monitoring=0;multilingual=0;crashReporting=0;thirdPartyService=0;apiIntegration=0;smsMessaging=0;sslCert=0;dosProtection=0;twoFactorAuth=0;appIcon=0;cloudSync=0;deviceSensor=0;barcode=0});$("li.tm_pb_tab_1").bind('click',function(){$("div .tm_pb_tab_0 .color").removeClass("color");$("div.tm_pb_all_tabs .tm_pb_tab_1").removeClass(".tm_pb_tab_1");$(" #total").text('');jsonObj=[];totalUsersAccounts=0;totalUsersContents=0;totaldatesLocations=0;totalsocialEngage=0;totalbillingEcomm=0;totaladminFeedback=0;totalapiIntegration=0;totalsecurity=0;totalMobileFeature=0;howBigYourApp=0;levelOfUI=0;TotalValue=0;email=0;facebook=0;google=0;linkedIn=0;github=0;subdomains=0;custom_domains=0;dashboard=0;fileUpload=0;userProfile=0;notification=0;ratingsReviews=0;textSearching=0;activityFeed=0;calendaring=0;maps=0;bookings=0;messaging=0;socialSharing=0;commenting=0;payment=0;shoppingCart=0;product=0;inAppPurchasing=0;paymentCollection=0;cmsIntegration=0;adminPages=0;contentApproval=0;usageAnalytics=0;monitoring=0;multilingual=0;crashReporting=0;thirdPartyService=0;apiIntegration=0;smsMessaging=0;sslCert=0;dosProtection=0;twoFactorAuth=0;appIcon=0;cloudSync=0;deviceSensor=0;barcode=0});$(".how_big_app img").click(function(){var howBigAppid=this.id;var item={};for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].SelectionType=="HowBigYourBusiness"){jsonObj.splice(i,1);break}
if(howBigAppid=='small_img_1')
{howBigYourApp=1000;item["SelectionType"]='HowBigYourBusiness';item["title"]='Small Business';item["cost"]=howBigYourApp}
else if(howBigAppid=='medium_img_1')
{howBigYourApp=3000;item["SelectionType"]='HowBigYourBusiness';item["title"]='Medium Business';item["cost"]=howBigYourApp}
else if(howBigAppid=='large_img_1')
{howBigYourApp=6000;item["SelectionType"]='HowBigYourBusiness';item["title"]='Large Business';item["cost"]=howBigYourApp}
jsonObj.push(item);var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".what_level_ui img").click(function(){var whatLevelUiId=this.id;var item={};for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].SelectionType=="WhatLevelOfUI"){jsonObj.splice(i,1);break}
if(whatLevelUiId=='mvp_img_1')
{levelOfUI=1400;item["SelectionType"]='WhatLevelOfUI';item["title"]='MVP';item["cost"]=levelOfUI}
else if(whatLevelUiId=='basic_img_1')
{levelOfUI=4500;item["SelectionType"]='WhatLevelOfUI';item["title"]='Basic';item["cost"]=levelOfUI}
else if(whatLevelUiId=='polished_img_1')
{levelOfUI=10500;item["SelectionType"]='WhatLevelOfUI';item["title"]='Polished';item["cost"]=levelOfUI}
jsonObj.push(item);var jsonString11=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".users_accounts img").click(function(){var usersAccount_id=this.id;var item={};if(usersAccount_id=='email_signup_img_1'&&email==0)
{email=300;item["SelectionType"]='UserAccounts';item["title"]='EmailSignUp';item["cost"]=email;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='email_signup_img_1'&&email!=0)
{email=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="EmailSignUp"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='facebook_signup_img_1'&&facebook==0)
{facebook=300;item["SelectionType"]='UserAccounts';item["title"]='FacebookAccount';item["cost"]=facebook;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='facebook_signup_img_1'&&facebook!=0)
{facebook=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="FacebookAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='google_signup_img_1'&&google==0)
{google=300;item["SelectionType"]='UserAccounts';item["title"]='GoogleAccount';item["cost"]=google;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='google_signup_img_1'&&google!=0)
{google=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="GoogleAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='linkedin_signup_img_1'&&linkedIn==0)
{linkedIn=300;item["SelectionType"]='UserAccounts';item["title"]='linkedInAccount';item["cost"]=linkedIn;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='linkedin_signup_img_1'&&linkedIn!=0)
{linkedIn=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="linkedInAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='github_signup_img_1'&&github==0)
{github=300;item["SelectionType"]='UserAccounts';item["title"]='githubAccount';item["cost"]=github;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='github_signup_img_1'&&github!=0)
{github=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="githubAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='subdomains_img_1'&&subdomains==0)
{subdomains=500;item["SelectionType"]='UserAccounts';item["title"]='subdomainsAccount';item["cost"]=subdomains;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='subdomains_img_1'&&subdomains!=0)
{subdomains=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="subdomainsAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
if(usersAccount_id=='custom_domains_img_1'&&custom_domains==0)
{custom_domains=500;item["SelectionType"]='UserAccounts';item["title"]='CustomDomainsAccount';item["cost"]=custom_domains;jsonObj.push(item);totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
else if(usersAccount_id=='custom_domains_img_1'&&custom_domains!=0)
{custom_domains=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="CustomDomainsAccount"){jsonObj.splice(i,1);break}
totalUsersAccounts=email+facebook+google+linkedIn+github+subdomains+custom_domains}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".user_content img").click(function(){var userContent_id=this.id;var item={};if(userContent_id=='dashboard_img_1'&&dashboard==0)
{dashboard=1000;item["SelectionType"]='User Contents';item["title"]='Dashboard';item["cost"]=dashboard;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='dashboard_img_1'&&dashboard!=0)
{dashboard=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Dashboard"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='file_upload_img_1'&&fileUpload==0)
{fileUpload=500;item["SelectionType"]='User Contents';item["title"]='FileUpload';item["cost"]=fileUpload;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='file_upload_img_1'&&fileUpload!=0)
{fileUpload=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="FileUpload"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='user_profile_img_1'&&userProfile==0)
{userProfile=500;item["SelectionType"]='User Contents';item["title"]='UserProfile';item["cost"]=userProfile;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='user_profile_img_1'&&userProfile!=0)
{userProfile=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="UserProfile"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='notification_img_1'&¬ification==0)
{notification=450;item["SelectionType"]='User Contents';item["title"]='Notification';item["cost"]=notification;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='notification_img_1'&¬ification!=0)
{notification=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Notification"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='ratings_img_1'&&ratingsReviews==0)
{ratingsReviews=700;item["SelectionType"]='User Contents';item["title"]='RatingsReviews';item["cost"]=ratingsReviews;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='ratings_img_1'&¬ification!=0)
{ratingsReviews=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="RatingsReviews"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='free_text_searching_img_1'&&textSearching==0)
{textSearching=1000;item["SelectionType"]='User Contents';item["title"]='TextSearching';item["cost"]=textSearching;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='free_text_searching_img_1'&&textSearching!=0)
{textSearching=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="TextSearching"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
if(userContent_id=='activity_feed_img_android_1'&&activityFeed==0)
{activityFeed=450;item["SelectionType"]='User Contents';item["title"]='ActivityFeed';item["cost"]=activityFeed;jsonObj.push(item);totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
else if(userContent_id=='activity_feed_img_android_1'&&activityFeed!=0)
{activityFeed=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="ActivityFeed"){jsonObj.splice(i,1);break}
totalUsersContents=dashboard+fileUpload+userProfile+notification+ratingsReviews+textSearching+activityFeed}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".dates_locations img").click(function(){var datesLocations_id=this.id;var item={};if(datesLocations_id=='calendaring_img_1'&&calendaring==0)
{calendaring=1000;item["SelectionType"]='Dates & Loactions';item["title"]='Calendaring';item["cost"]=calendaring;jsonObj.push(item);totaldatesLocations=calendaring+maps+bookings}
else if(datesLocations_id=='calendaring_img_1'&&calendaring!=0)
{calendaring=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Calendaring"){jsonObj.splice(i,1);break}
totaldatesLocations=calendaring+maps+bookings}
if(datesLocations_id=='maps_img_1'&&maps==0)
{maps=700;item["SelectionType"]='Dates & Loactions';item["title"]='Maps';item["cost"]=maps;jsonObj.push(item);totaldatesLocations=calendaring+maps+bookings}
else if(datesLocations_id=='maps_img_1'&&maps!=0)
{maps=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Maps"){jsonObj.splice(i,1);break}
totaldatesLocations=calendaring+maps+bookings}
if(datesLocations_id=='bookings_img_1'&&bookings==0)
{bookings=1500;item["SelectionType"]='Dates & Loactions';item["title"]='Bookings';item["cost"]=bookings;jsonObj.push(item);totaldatesLocations=calendaring+maps+bookings}
else if(datesLocations_id=='bookings_img_1'&&bookings!=0)
{bookings=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Bookings"){jsonObj.splice(i,1);break}
totaldatesLocations=calendaring+maps+bookings}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".social_engagements img").click(function(){var socialEngage_id=this.id;var item={};if(socialEngage_id=='messaging_img_1'&&messaging==0)
{messaging=2000;item["SelectionType"]='Social Engagement';item["title"]='Messaging';item["cost"]=messaging;jsonObj.push(item);totalsocialEngage=messaging+socialSharing+commenting}
else if(socialEngage_id=='messaging_img_1'&&messaging!=0)
{messaging=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Messaging"){jsonObj.splice(i,1);break}
totalsocialEngage=messaging+socialSharing+commenting}
if(socialEngage_id=='social_sharing_img_1'&&socialSharing==0)
{socialSharing=300;item["SelectionType"]='Social Engagement';item["title"]='SocialSharing';item["cost"]=socialSharing;jsonObj.push(item);totalsocialEngage=messaging+socialSharing+commenting}
else if(socialEngage_id=='social_sharing_img_1'&&socialSharing!=0)
{socialSharing=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="SocialSharing"){jsonObj.splice(i,1);break}
totalsocialEngage=messaging+socialSharing+commenting}
if(socialEngage_id=='commenting_img_1'&&commenting==0)
{commenting=2000;item["SelectionType"]='Social Engagement';item["title"]='Commenting';item["cost"]=commenting;jsonObj.push(item);totalsocialEngage=messaging+socialSharing+commenting}
else if(socialEngage_id=='commenting_img_1'&&commenting!=0)
{commenting=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Commenting"){jsonObj.splice(i,1);break}
totalsocialEngage=messaging+socialSharing+commenting}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".billing_ecommerce img").click(function(){var billingEcomm_id=this.id;var item={};if(billingEcomm_id=='payment_processing_img_1'&&payment==0)
{payment=1500;item["SelectionType"]='Billing Ecommerce';item["title"]='Payment';item["cost"]=payment;jsonObj.push(item);totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
else if(billingEcomm_id=='payment_processing_img_1'&&payment!=0)
{payment=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Payment"){jsonObj.splice(i,1);break}
totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
if(billingEcomm_id=='shopping_cart_img_1'&&shoppingCart==0)
{shoppingCart=2000;item["SelectionType"]='Billing Ecommerce';item["title"]='ShoppingCart';item["cost"]=shoppingCart;jsonObj.push(item);totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
else if(billingEcomm_id=='shopping_cart_img_1'&&shoppingCart!=0)
{shoppingCart=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="ShoppingCart"){jsonObj.splice(i,1);break}
totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
if(billingEcomm_id=='Product_management_img_1'&&product==0)
{product=100;item["SelectionType"]='Billing Ecommerce';item["title"]='Product';item["cost"]=product;jsonObj.push(item);totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
else if(billingEcomm_id=='Product_management_img_1'&&product!=0)
{product=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Product"){jsonObj.splice(i,1);break}
totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
if(billingEcomm_id=='in_app_purchasing_1'&&inAppPurchasing==0)
{inAppPurchasing=650;item["SelectionType"]='Billing Ecommerce';item["title"]='InAppPurchasing';item["cost"]=inAppPurchasing;jsonObj.push(item);totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
else if(billingEcomm_id=='in_app_purchasing_1'&&inAppPurchasing!=0)
{inAppPurchasing=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="InAppPurchasing"){jsonObj.splice(i,1);break}
totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
if(billingEcomm_id=='payment_collection_1'&&paymentCollection==0)
{paymentCollection=650;item["SelectionType"]='Billing Ecommerce';item["title"]='PaymentCollection';item["cost"]=paymentCollection;jsonObj.push(item);totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
else if(billingEcomm_id=='payment_collection_1'&&paymentCollection!=0)
{paymentCollection=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="PaymentCollection"){jsonObj.splice(i,1);break}
totalbillingEcomm=payment+shoppingCart+product+inAppPurchasing+paymentCollection}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".admin_feedback img").click(function(){var adminFeedback_id=this.id;var item={};if(adminFeedback_id=='cms_img_1'&&cmsIntegration==0)
{cmsIntegration=700;item["SelectionType"]='Admin Feedback';item["title"]='CmsIntegration';item["cost"]=cmsIntegration;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='cms_img_1'&&cmsIntegration!=0)
{cmsIntegration=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="CmsIntegration"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='user_admin_pages_img_1'&&adminPages==0)
{adminPages=700;item["SelectionType"]='Admin Feedback';item["title"]='AdminPages';item["cost"]=adminPages;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='user_admin_pages_img_1'&&adminPages!=0)
{adminPages=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="AdminPages"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='content_approval_img_1'&&contentApproval==0)
{contentApproval=500;item["SelectionType"]='Admin Feedback';item["title"]='ContentApproval';item["cost"]=contentApproval;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='content_approval_img_1'&&contentApproval!=0)
{contentApproval=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="ContentApproval"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='usage_analytics_img_1'&&usageAnalytics==0)
{usageAnalytics=300;item["SelectionType"]='Admin Feedback';item["title"]='UsageAnalytics';item["cost"]=usageAnalytics;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='usage_analytics_img_1'&&usageAnalytics!=0)
{usageAnalytics=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="UsageAnalytics"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='performance_monitoring_img_1'&&monitoring==0)
{monitoring=100;item["SelectionType"]='Admin Feedback';item["title"]='Monitoring';item["cost"]=monitoring;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='performance_monitoring_img_1'&&monitoring!=0)
{monitoring=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Monitoring"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='multilingual_support_img_1'&&multilingual==0)
{multilingual=500;item["SelectionType"]='Admin Feedback';item["title"]='Multilingual';item["cost"]=multilingual;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='multilingual_support_img_1'&&multilingual!=0)
{multilingual=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Multilingual"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
if(adminFeedback_id=='crash_reporting_android_1'&&crashReporting==0)
{crashReporting=200;item["SelectionType"]='Admin Feedback';item["title"]='CrashReporting';item["cost"]=crashReporting;jsonObj.push(item);totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
else if(adminFeedback_id=='crash_reporting_android_1'&&crashReporting!=0)
{crashReporting=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="CrashReporting"){jsonObj.splice(i,1);break}
totaladminFeedback=cmsIntegration+adminPages+contentApproval+usageAnalytics+monitoring+multilingual+crashReporting}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".api_integration img").click(function(){var apiIntegration_id=this.id;var item={};if(apiIntegration_id=='third_party_services_img_1'&&thirdPartyService==0)
{thirdPartyService=700;item["SelectionType"]='Api Integration';item["title"]='Thirdpartyservices';item["cost"]=thirdPartyService;jsonObj.push(item);totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
else if(apiIntegration_id=='third_party_services_img_1'&&thirdPartyService!=0)
{thirdPartyService=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Thirdpartyservices"){jsonObj.splice(i,1);break}
totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
if(apiIntegration_id=='api_img_1'&&apiIntegration==0)
{apiIntegration=1500;item["SelectionType"]='Api Integration';item["title"]='ApiIntegration';item["cost"]=apiIntegration;jsonObj.push(item);totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
else if(apiIntegration_id=='api_img_1'&&apiIntegration!=0)
{apiIntegration=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="ApiIntegration"){jsonObj.splice(i,1);break}
totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
if(apiIntegration_id=='sms_img_1'&&smsMessaging==0)
{smsMessaging=700;item["SelectionType"]='Api Integration';item["title"]='SmsMessaging';item["cost"]=smsMessaging;jsonObj.push(item);totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
else if(apiIntegration_id=='sms_img_1'&&smsMessaging!=0)
{smsMessaging=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="SmsMessaging"){jsonObj.splice(i,1);break}
totalapiIntegration=thirdPartyService+apiIntegration+smsMessaging}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".security img").click(function(){var security_id=this.id;var item={};if(security_id=='ssl_certificate_img_1'&&sslCert==0)
{sslCert=300;item["SelectionType"]='Security';item["title"]='SslCert';item["cost"]=sslCert;jsonObj.push(item);totalsecurity=sslCert+dosProtection+twoFactorAuth}
else if(security_id=='ssl_certificate_img_1'&&sslCert!=0)
{sslCert=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="SslCert"){jsonObj.splice(i,1);break}
totalsecurity=sslCert+dosProtection+twoFactorAuth}
if(security_id=='dos_protection_img_1'&&dosProtection==0)
{dosProtection=700;item["SelectionType"]='Security';item["title"]='DosProtection';item["cost"]=dosProtection;jsonObj.push(item);totalsecurity=sslCert+dosProtection+twoFactorAuth}
else if(security_id=='dos_protection_img_1'&&dosProtection!=0)
{dosProtection=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="DosProtection"){jsonObj.splice(i,1);break}
totalsecurity=sslCert+dosProtection+twoFactorAuth}
if(security_id=='authentication_img_1'&&twoFactorAuth==0)
{twoFactorAuth=700;item["SelectionType"]='Security';item["title"]='TwoFactorAuth';item["cost"]=twoFactorAuth;jsonObj.push(item);totalsecurity=sslCert+dosProtection+twoFactorAuth}
else if(security_id=='authentication_img_1'&&twoFactorAuth!=0)
{twoFactorAuth=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="TwoFactorAuth"){jsonObj.splice(i,1);break}
totalsecurity=sslCert+dosProtection+twoFactorAuth}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$(".mobile_feature img").click(function(){var mobileFeature_id=this.id;var item={};if(mobileFeature_id=='app_icon_img_1'&&appIcon==0)
{appIcon=700;item["SelectionType"]='Mobile Features';item["title"]='AppIcon';item["cost"]=appIcon;jsonObj.push(item);totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
else if(mobileFeature_id=='app_icon_img_1'&&appIcon!=0)
{appIcon=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="AppIcon"){jsonObj.splice(i,1);break}
totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
if(mobileFeature_id=='cloud_syncing_img_1'&&cloudSync==0)
{cloudSync=700;item["SelectionType"]='Mobile Features';item["title"]='Cloudsync';item["cost"]=cloudSync;jsonObj.push(item);totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
else if(mobileFeature_id=='cloud_syncing_img_1'&&cloudSync!=0)
{cloudSync=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Cloudsync"){jsonObj.splice(i,1);break}
totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
if(mobileFeature_id=='device_sensor_data_1'&&deviceSensor==0)
{deviceSensor=1000;item["SelectionType"]='Mobile Features';item["title"]='Devicesensor';item["cost"]=deviceSensor;jsonObj.push(item);totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
else if(mobileFeature_id=='device_sensor_data_1'&&deviceSensor!=0)
{deviceSensor=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Devicesensor"){jsonObj.splice(i,1);break}
totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
if(mobileFeature_id=='barcodes_img_1'&&barcode==0)
{barcode=300;item["SelectionType"]='Mobile Features';item["title"]='Barcode';item["cost"]=barcode;jsonObj.push(item);totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
else if(mobileFeature_id=='barcodes_img_1'&&barcode!=0)
{barcode=0;for(var i=0;i<jsonObj.length;i++)
if(jsonObj[i].title=="Barcode"){jsonObj.splice(i,1);break}
totalMobileFeature=appIcon+cloudSync+deviceSensor+barcode}
var jsonString=JSON.stringify(jsonObj);TotalValue=howBigYourApp+levelOfUI+totalUsersAccounts+totalUsersContents+totaldatesLocations+totalsocialEngage+totalbillingEcomm+totaladminFeedback+totalapiIntegration+totalsecurity+totalMobileFeature;document.getElementById('total').innerHTML=TotalValue});$("#medium_img").mouseover(function(){var val=CONSTANTS.getValue("medium_img");$(this).attr('title',val);$(this).tooltip()});$("#large_img").mouseover(function(){var val=CONSTANTS.getValue("large_img");$(this).attr('title',val);$(this).tooltip()});$("#mvp_img").mouseover(function(){var val=CONSTANTS.getValue("mvp_img");$(this).attr('title',val);$(this).tooltip()});$("#basic_img").mouseover(function(){var val=CONSTANTS.getValue("basic_img");$(this).attr('title',val);$(this).tooltip()});$("#polished_img").mouseover(function(){var val=CONSTANTS.getValue("polished_img");$(this).attr('title',val);$(this).tooltip()});$("#email_signup_img").mouseover(function(){var val=CONSTANTS.getValue("email_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#facebook_signup_img").mouseover(function(){var val=CONSTANTS.getValue("facebook_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#google_signup_img").mouseover(function(){var val=CONSTANTS.getValue("google_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#linkedin_signup_img").mouseover(function(){var val=CONSTANTS.getValue("linkedin_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#github_signup_img").mouseover(function(){var val=CONSTANTS.getValue("github_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#subdomains_img").mouseover(function(){var val=CONSTANTS.getValue("subdomains_img");$(this).attr('title',val);$(this).tooltip()});$("#custom_domains_img").mouseover(function(){var val=CONSTANTS.getValue("custom_domains_img");$(this).attr('title',val);$(this).tooltip()});$("#dashboard_img").mouseover(function(){var val=CONSTANTS.getValue("dashboard_img");$(this).attr('title',val);$(this).tooltip()});$("#file_upload_img").mouseover(function(){var val=CONSTANTS.getValue("file_upload_img");$(this).attr('title',val);$(this).tooltip()});$("#user_profile_img").mouseover(function(){var val=CONSTANTS.getValue("user_profile_img");$(this).attr('title',val);$(this).tooltip()});$("#notification_img").mouseover(function(){var val=CONSTANTS.getValue("notification_img");$(this).attr('title',val);$(this).tooltip()});$("#ratings_img").mouseover(function(){var val=CONSTANTS.getValue("ratings_img");$(this).attr('title',val);$(this).tooltip()});$("#free_text_searching_img").mouseover(function(){var val=CONSTANTS.getValue("free_text_searching_img");$(this).attr('title',val);$(this).tooltip()});$("#calendaring_img").mouseover(function(){var val=CONSTANTS.getValue("calendaring_img");$(this).attr('title',val);$(this).tooltip()});$("#maps_img").mouseover(function(){var val=CONSTANTS.getValue("maps_img");$(this).attr('title',val);$(this).tooltip()});$("#bookings_img").mouseover(function(){var val=CONSTANTS.getValue("bookings_img");$(this).attr('title',val);$(this).tooltip()});$("#messaging_img").mouseover(function(){var val=CONSTANTS.getValue("messaging_img");$(this).attr('title',val);$(this).tooltip()});$("#social_sharing_img").mouseover(function(){var val=CONSTANTS.getValue("social_sharing_img");$(this).attr('title',val);$(this).tooltip()});$("#commenting_img").mouseover(function(){var val=CONSTANTS.getValue("commenting_img");$(this).attr('title',val);$(this).tooltip()});$("#payment_processing_img").mouseover(function(){var val=CONSTANTS.getValue("payment_processing_img");$(this).attr('title',val);$(this).tooltip()});$("#shopping_cart_img").mouseover(function(){var val=CONSTANTS.getValue("shopping_cart_img");$(this).attr('title',val);$(this).tooltip()});$("#product_management_img").mouseover(function(){var val=CONSTANTS.getValue("product_management_img");$(this).attr('title',val);$(this).tooltip()});$("#cms_img").mouseover(function(){var val=CONSTANTS.getValue("cms_img");$(this).attr('title',val);$(this).tooltip()});$("#user_admin_pages_img").mouseover(function(){var val=CONSTANTS.getValue("user_admin_pages_img");$(this).attr('title',val);$(this).tooltip()});$("#content_approval_img").mouseover(function(){var val=CONSTANTS.getValue("content_approval_img");$(this).attr('title',val);$(this).tooltip()});$("#usage_analytics_img").mouseover(function(){var val=CONSTANTS.getValue("usage_analytics_img");$(this).attr('title',val);$(this).tooltip()});$("#performance_monitoring_img").mouseover(function(){var val=CONSTANTS.getValue("performance_monitoring_img");$(this).attr('title',val);$(this).tooltip()});$("#multilingual_support_img").mouseover(function(){var val=CONSTANTS.getValue("multilingual_support_img");$(this).attr('title',val);$(this).tooltip()});$("#third_party_services_img").mouseover(function(){var val=CONSTANTS.getValue("third_party_services_img");$(this).attr('title',val);$(this).tooltip()});$("#api_img").mouseover(function(){var val=CONSTANTS.getValue("api_img");$(this).attr('title',val);$(this).tooltip()});$("#sms_img").mouseover(function(){var val=CONSTANTS.getValue("sms_img");$(this).attr('title',val);$(this).tooltip()});$("#ssl_certificate_img").mouseover(function(){var val=CONSTANTS.getValue("ssl_certificate_img");$(this).attr('title',val);$(this).tooltip()});$("#dos_protection_img").mouseover(function(){var val=CONSTANTS.getValue("dos_protection_img");$(this).attr('title',val);$(this).tooltip()});$("#authentication_img").mouseover(function(){var val=CONSTANTS.getValue("authentication_img");$(this).attr('title',val);$(this).tooltip()});$("#small_img_android").mouseover(function(){var val=CONSTANTS.getValue("small_img");$(this).attr('title',val);$(this).tooltip()});$("#medium_img_android").mouseover(function(){var val=CONSTANTS.getValue("medium_img");$(this).attr('title',val);$(this).tooltip()});$("#large_img_android").mouseover(function(){var val=CONSTANTS.getValue("large_img");$(this).attr('title',val);$(this).tooltip()});$("#mvp_img_android").mouseover(function(){var val=CONSTANTS.getValue("mvp_img");$(this).attr('title',val);$(this).tooltip()});$("#basic_img_android").mouseover(function(){var val=CONSTANTS.getValue("basic_img");$(this).attr('title',val);$(this).tooltip()});$("#polished_img_android").mouseover(function(){var val=CONSTANTS.getValue("polished_img");$(this).attr('title',val);$(this).tooltip()});$("#email_signup_img_android").mouseover(function(){var val=CONSTANTS.getValue("email_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#facebook_signup_img_android").mouseover(function(){var val=CONSTANTS.getValue("facebook_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#google_signup_img_android").mouseover(function(){var val=CONSTANTS.getValue("google_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#linkedin_signup_img_android").mouseover(function(){var val=CONSTANTS.getValue("linkedin_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#github_signup_img_android").mouseover(function(){var val=CONSTANTS.getValue("github_signup_img");$(this).attr('title',val);$(this).tooltip()});$("#file_upload_img_android").mouseover(function(){var val=CONSTANTS.getValue("file_upload_img");$(this).attr('title',val);$(this).tooltip()});$("#user_profile_img_android").mouseover(function(){var val=CONSTANTS.getValue("user_profile_img");$(this).attr('title',val);$(this).tooltip()});$("#notification_img_android").mouseover(function(){var val=CONSTANTS.getValue("notification_img");$(this).attr('title',val);$(this).tooltip()});$("#activity_feed_img_android").mouseover(function(){var val=CONSTANTS.getValue("activity_feed_img_android");$(this).attr('title',val);$(this).tooltip()});$("#ratings_img_android").mouseover(function(){var val=CONSTANTS.getValue("ratings_img");$(this).attr('title',val);$(this).tooltip()});$("#free_text_searching_img_android").mouseover(function(){var val=CONSTANTS.getValue("free_text_searching_img");$(this).attr('title',val);$(this).tooltip()});$("#app_icon_designing_img_android").mouseover(function(){var val=CONSTANTS.getValue("app_icon_designing_img_android");$(this).attr('title',val);$(this).tooltip()});$("#cloud_syncing_img_android").mouseover(function(){var val=CONSTANTS.getValue("cloud_syncing_img_android");$(this).attr('title',val);$(this).tooltip()});$("#device_sensor_data_img_android").mouseover(function(){var val=CONSTANTS.getValue("device_sensor_data_img_android");$(this).attr('title',val);$(this).tooltip()});$("#barcodes_img_android").mouseover(function(){var val=CONSTANTS.getValue("barcodes_img_android");$(this).attr('title',val);$(this).tooltip()});$("#calendaring_img_android").mouseover(function(){var val=CONSTANTS.getValue("calendaring_img");$(this).attr('title',val);$(this).tooltip()});$("#maps_img_android").mouseover(function(){var val=CONSTANTS.getValue("maps_img");$(this).attr('title',val);$(this).tooltip()});$("#bookings_img_android").mouseover(function(){var val=CONSTANTS.getValue("bookings_img");$(this).attr('title',val);$(this).tooltip()});$("#messaging_img_android").mouseover(function(){var val=CONSTANTS.getValue("messaging_img");$(this).attr('title',val);$(this).tooltip()});$("#social_sharing_img_android").mouseover(function(){var val=CONSTANTS.getValue("social_sharing_img");$(this).attr('title',val);$(this).tooltip()});$("#commenting_img_android").mouseover(function(){var val=CONSTANTS.getValue("commenting_img");$(this).attr('title',val);$(this).tooltip()});$("#payment_processing_img_android").mouseover(function(){var val=CONSTANTS.getValue("payment_processing_img");$(this).attr('title',val);$(this).tooltip()});$("#shopping_cart_img_android").mouseover(function(){var val=CONSTANTS.getValue("shopping_cart_img");$(this).attr('title',val);$(this).tooltip()});$("#in_app_purchasing_img_android").mouseover(function(){var val=CONSTANTS.getValue("in_app_purchasing_img_android");$(this).attr('title',val);$(this).tooltip()});$("#payment_information_collection_img_android").mouseover(function(){var val=CONSTANTS.getValue("payment_information_collection_img_android");$(this).attr('title',val);$(this).tooltip()});$("#usage_analytics_img_android").mouseover(function(){var val=CONSTANTS.getValue("usage_analytics_img");$(this).attr('title',val);$(this).tooltip()});$("#multilingual_support_img_android").mouseover(function(){var val=CONSTANTS.getValue("multilingual_support_img");$(this).attr('title',val);$(this).tooltip()});$("#crash_reporting_img_android").mouseover(function(){var val=CONSTANTS.getValue("crash_reporting_img_android");$(this).attr('title',val);$(this).tooltip()});$("#third_party_services_img_android").mouseover(function(){var val=CONSTANTS.getValue("third_party_services_img");$(this).attr('title',val);$(this).tooltip()});$("#sms_img_android").mouseover(function(){var val=CONSTANTS.getValue("sms_img");$(this).attr('title',val);$(this).tooltip()});$("#authentication_img_android").mouseover(function(){var val=CONSTANTS.getValue("authentication_img");$(this).attr('title',val);$(this).tooltip()});var selected='color';$(".tm_pb_main_blurb_image").click(function(){if($(this).hasClass(selected))
{$(this).removeClass(selected)}
else{$(this).addClass(selected)}});$(document).on('click','.image_grid',function(){$('.image_grid').attr('checked',!1).removeClass(selected);$(this).attr('checked',!0).addClass(selected)});$(document).on('click','.image_grid_UI',function(){$('.image_grid_UI').attr('checked',!1).removeClass(selected);$(this).attr('checked',!0).addClass(selected)});$('button.tm_pb_contact_submit').click(function(){$.ajax({url:'/estimate_post.php',dataType:"json",type:"POST",data:{json:JSON.stringify(jsonObj)},success:function(){console.log('success!!')}})});$(".estimatemyapp_images").tooltip({position:{my:'bottom+220',at:'center',}})})