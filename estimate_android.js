jQuery.noConflict();
jQuery(document).ready(function($) {
  // Code that uses jQuery's $ can follow here.
 //define variables

 var imageIDs = [];
 var CONSTANTS = function() {

 var globals = {
    small_img: "Your app probably has around 4-5 key feature pages (excluding any static content, sign in, sign up.",
    medium_img: " Your app probably has around 6-9 key feature pages (excluding any static content, sign in, sign up.) ",
    large_img: " Your app probably has around 10-15 key feature pages (excluding any static content, sign in, sign up.",

    mvp_img:" Minimum Viable Product. Very raw but functional, no UI designer required. ",
    basic_img: "Still basic but pleasing to the eye, perhaps using purchased template",
    polished_img: "Professional bespoke UI design. May also have some animations and transitions etc. ",
    
    email_signup_img: "Classic sign up with an email and password. ",
    facebook_signup_img: "Sign up and sign in with a Facebook account.",
    google_signup_img: "Sign up and sign in with a Google account.",
    github_signup_img: "Sign up and sign in with a Github account.",
    linkedin_signup_img: "Sign up and sign in with a LinkedIn account.",
    subdomains_img: "In combination with multi-tenant accounts, this would allow your customers to access their account with their own subdomain, eg. acme.yourapp.com or xyz.yourapp.com",
    custom_domains_img: "In combination with multi-tenant accounts, this would allow your customers to access their account with their own domain, eg. www.acme.com or www.xyz.com",
    
    dashboard_img: "A dashboard would usually be the first thing a user sees when logged in and would summarize data and show graphs and notices.",
    file_upload_img: "Users would be able to upload files, images, PDF's etc.",
    user_profile_img:"Users will able to manage and publish their profiles to other users within your app, eg Google profiles.",
    notification_img: "User might recieve regular automated notifications from the app to drive engagement or notify them of changes.",
    ratings_img: "Ratings and reviews might be restaurant reviews or customer satisfaction ratings. ",
    free_text_searching_img: "Giving users the ability to search their data in natural ways perhaps with a type-ahead style search box.",
    
    calendaring_img:"Display and capture of data in a calendar format.",
    maps_img:"Showing a map with data points, eg venue locations, driver locations etc.",
    bokings_img:"Selecting start and end dates, managing capacity etc.",
    
    messaging_img:"Allowing users within the app to send messages to other account users.",
    social_sharing_img:" Ability to share information in a controlled way on social media accounts to drive engagement. ",
    commenting_img:"Classic forum functionality for account users or simple commenting on information. ",
    payment_processing_img:"You will process adhoc or regular payments from users and manage refunds etc.",
    shopping_cart_img: "Users will be able to browse products and add them to a cart, Amazon style.",
    product_management_img:"Ability to manage data, eg product listings, availabilities or other data relevant to your domain.",
    
    cms_img:" A content management system would allow editing of significant parts of the static content of the app. ",
    user_admin_pages_img:"Account administrators would be able to list/add/remove/suspend users.",
    content_approval_img: "Account administrators would oversee content submitted by users for publication and would have an approval workflow.",
    usage_analytics_img:"Find out where your users come from and how they use your app. ",
    performance_monitoring_img:"As you scale up it is important to know that you are maintaining a good user experience and making efficient use of your hosting environment.    ",
    multilingual_support_img:"Provide supprt for multiple languages for your app.",
    
    third_party_services_img:"Perhaps a data feed that you need to integrate with or a partner app.",
    api_img:"You are building a platform and you want others to integrate with you directly.",
    sms_img:"Allow your app to send SMS messages.",
    
    ssl_certificate_img:"The industry standard way to ensure your users data is safe during their use of your app. ",
    dos_protection_img:"For high volume app with a high public profile, you may be the target of Denial of Service attacks. ",
    authentication_img:"More common for financial or highly sensitive information based apps.",
     
     crash_reporting_img_android:" Detailed reports of the errors in your app. ",
     payment_information_collection_img_android:" To collect credit cards or other payment methods from users for use with a 3rd party payment provider. ",
     in_app_purchasing_img_android:" Ability for the user to purchase additional content or functionality within the app. ",
     app_icon_designing_img_android:" Professionally designed app icon for multiple device resolutions.",
     cloud_syncing_img_android:" Allow user data to be shared between mobile and/or desktop devices. ",
     device_sensor_data_img_android:" Ability to use and record data from device sensors, eg Accelerometer, Gyroscope or Compass. ",
     barcodes_img_android:" Ability to scan or display barcodes or QR codes. ",
     activity_feed_img_android:" An activity feed would show what user have been doing recently."
}

return {
      getValue: function(s) {
        return globals[s];
          }
    }
  }();
  
$("#small_img").mouseover(function() {
    //imageIDs.push("img1");
    var val = CONSTANTS.getValue("small_img");
    $(this).attr('title', val); 
    $(this).tooltip();
 });




$("#medium_img").mouseover(function() {
    var val = CONSTANTS.getValue("medium_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#large_img").mouseover(function() {
    var val = CONSTANTS.getValue("large_img");
    $(this).attr('title', val);
    $(this).tooltip();
});
  
$("#mvp_img").mouseover(function() {
    var val = CONSTANTS.getValue("mvp_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#basic_img").mouseover(function() {
     var val = CONSTANTS.getValue("basic_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });
   
$("#polished_img").mouseover(function() {
    var val = CONSTANTS.getValue("polished_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });
 
$("#email_signup_img").mouseover(function() {
    var val = CONSTANTS.getValue("email_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#facebook_signup_img").mouseover(function() {
    var val = CONSTANTS.getValue("facebook_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#google_signup_img").mouseover(function() {
    var val = CONSTANTS.getValue("google_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#linkedin_signup_img").mouseover(function() {
    var val = CONSTANTS.getValue("linkedin_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#github_signup_img").mouseover(function() {
    var val = CONSTANTS.getValue("github_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
  });

$("#subdomains_img").mouseover(function() {
    var val = CONSTANTS.getValue("subdomains_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#custom_domains_img").mouseover(function() {
    var val = CONSTANTS.getValue("custom_domains_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#dashboard_img").mouseover(function() {
    var val = CONSTANTS.getValue("dashboard_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#file_upload_img").mouseover(function() {
    var val = CONSTANTS.getValue("file_upload_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#user_profile_img").mouseover(function() {
    var val = CONSTANTS.getValue("user_profile_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#notification_img").mouseover(function() {
    var val = CONSTANTS.getValue("notification_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#ratings_img").mouseover(function() {
    var val = CONSTANTS.getValue("ratings_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#free_text_searching_img").mouseover(function() {
    var val = CONSTANTS.getValue("free_text_searching_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#calendaring_img").mouseover(function() {
    var val = CONSTANTS.getValue("calendaring_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#maps_img").mouseover(function() {
    var val = CONSTANTS.getValue("maps_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#bookings_img").mouseover(function() {
    var val = CONSTANTS.getValue("bookings_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#messaging_img").mouseover(function() {
    var val = CONSTANTS.getValue("messaging_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#social_sharing_img").mouseover(function() {
    var val = CONSTANTS.getValue("social_sharing_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#commenting_img").mouseover(function() {
    var val = CONSTANTS.getValue("commenting_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#payment_processing_img").mouseover(function() {
    var val = CONSTANTS.getValue("payment_processing_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#shopping_cart_img").mouseover(function() {
    var val = CONSTANTS.getValue("shopping_cart_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#product_management_img").mouseover(function() {
    var val = CONSTANTS.getValue("product_management_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#cms_img").mouseover(function() {
    var val = CONSTANTS.getValue("cms_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#user_admin_pages_img").mouseover(function() {
    var val = CONSTANTS.getValue("user_admin_pages_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#content_approval_img").mouseover(function() {
    var val = CONSTANTS.getValue("content_approval_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#usage_analytics_img").mouseover(function() {
    var val = CONSTANTS.getValue("usage_analytics_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#performance_monitoring_img").mouseover(function() {
    var val = CONSTANTS.getValue("performance_monitoring_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#multilingual_support_img").mouseover(function() {
    var val = CONSTANTS.getValue("multilingual_support_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#third_party_services_img").mouseover(function() {
    var val = CONSTANTS.getValue("third_party_services_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#api_img").mouseover(function() {
    var val = CONSTANTS.getValue("api_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#sms_img").mouseover(function() {
    var val = CONSTANTS.getValue("sms_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#ssl_certificate_img").mouseover(function() {
    var val = CONSTANTS.getValue("ssl_certificate_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#dos_protection_img").mouseover(function() {
    var val = CONSTANTS.getValue("dos_protection_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#authentication_img").mouseover(function() {
    var val = CONSTANTS.getValue("authentication_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

    
$("#small_img_android").mouseover(function() {
    //imageIDs.push("img1");
    var val = CONSTANTS.getValue("small_img");
    $(this).attr('title', val); 
    $(this).tooltip();
 });

$("#medium_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("medium_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#large_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("large_img");
    $(this).attr('title', val);
    $(this).tooltip();
});
  
$("#mvp_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("mvp_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#basic_img_android").mouseover(function() {
     var val = CONSTANTS.getValue("basic_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });
   
$("#polished_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("polished_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });
 
$("#email_signup_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("email_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#facebook_signup_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("facebook_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#google_signup_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("google_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#linkedin_signup_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("linkedin_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#github_signup_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("github_signup_img");
    $(this).attr('title', val);
    $(this).tooltip();
  });


$("#file_upload_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("file_upload_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#user_profile_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("user_profile_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#notification_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("notification_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#activity_feed_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("activity_feed_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
$("#ratings_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("ratings_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#free_text_searching_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("free_text_searching_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#app_icon_designing_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("app_icon_designing_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
$("#cloud_syncing_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("cloud_syncing_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
$("#device_sensor_data_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("device_sensor_data_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
$("#barcodes_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("barcodes_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
    
$("#calendaring_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("calendaring_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#maps_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("maps_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#bookings_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("bookings_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#messaging_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("messaging_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#social_sharing_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("social_sharing_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#commenting_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("commenting_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#payment_processing_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("payment_processing_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#shopping_cart_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("shopping_cart_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#in_app_purchasing_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("in_app_purchasing_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });
    
$("#payment_information_collection_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("payment_information_collection_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });    

$("#usage_analytics_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("usage_analytics_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });

$("#multilingual_support_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("multilingual_support_img");
    $(this).attr('title', val);
    $(this).tooltip();
 });
    
$("#crash_reporting_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("crash_reporting_img_android");
    $(this).attr('title', val);
    $(this).tooltip();
 });    

$("#third_party_services_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("third_party_services_img");
    $(this).attr('title', val);
    $(this).tooltip();
});

$("#sms_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("sms_img");
    $(this).attr('title', val);
    $(this).tooltip();
});


$("#authentication_img_android").mouseover(function() {
    var val = CONSTANTS.getValue("authentication_img");
    $(this).attr('title', val);
    $(this).tooltip();
});    
    
    
    
    
    
    
var selected= 'color';

$(".tm_pb_main_blurb_image").click(function() {
 
     if($(this).hasClass(selected) )
        {
           $(this).removeClass(selected);
         }
      else 
        {  
         $(this).addClass(selected);
        }
    });


//this is for all images
$(".estimatemyapp_images").tooltip(
{
position : 
      { my:  'bottom+220', 
        at: 'center',}
      });
});
