import React from "react";
import { Link } from "react-router";
import Header  from"../componentIelts/Header/Header";
import Footer from "../component/Footer/Footer";
import Banner from"../componentIelts/Banner/Banner";
import BlockContent from "../componentIelts/BlockContent/BlockContent";
import MenuLeftTop from "../componentIelts/MenuLeftMobile/MenuLeftTop";
import MenuLeftDesktop from "../componentIelts/MenuLeftDesktop/MenuLeftDesktop";
import BlockTwo from "../componentIelts/BlockTwo/BlockTwo";
import BlockThree from "../componentIelts/BlockThree/BlockThree";
import BlockFour from "../componentIelts/BlockFour/BlockFour";

export default class LayoutIelts extends React.Component {
  componentDidMount () {
     var TechKidsApp = (function($, undefined){
      var init = function(){
        if(TechKidsApp.scrollSpy){
          TechKidsApp.scrollSpy.init();
        }
      }

      return {
        init : init
      }

    }(jQuery));
 
    TechKidsApp.scrollSpy = (function($, undefined){

        var configs = {
          skinWidth: 100,
          animateClasses : [
          "fade_up",
          "fade_left",
          "fade_right",
          "fade_scale",
          ],
          animateOffSuffix : "_off",
          animateTransitionClass : "animate_fade"
        }

        var scrollThrotte = false;
        var viewportHeight = 0;
        var gotFade = false;

        /*
        * Public functions
        */
        var init = function(){
          $(window).bind("resize", calculateViewportHeight);
          calculateViewportHeight();
          $(".navbar_at_top").each(function(){
          gotNav = true;
          });

          initFadeElements();

          if(gotFade){
          $(window).bind("scroll",scrollSpy);
          setTimeout(lateInitFadeElements, 100);
          }
        }


        /*
        * Private functions
        */
        var calculateViewportHeight = function(){
            viewportHeight = $(window).height() - configs.skinWidth;
            if(viewportHeight < 0) viewportHeight = 0;
        }

        var scrollSpy = function(){
          if(scrollThrotte) return;
          scrollThrotte = true;
          setTimeout(function(){scrollThrotte = false}, 100);

          // Fades
          if(gotFade){
            configs.animateClasses.forEach(function(theClass){
              $("."+ theClass + configs.animateOffSuffix).each(function(){
              if($(this).offset().top > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop() + viewportHeight){
              $(this).removeClass(theClass + configs.animateOffSuffix);
              }
              });
            });
           }
      }

      var initFadeElements = function(){
        configs.animateClasses.forEach(function(theClass){
          $("."+theClass).each(function(){
            $(this).addClass(theClass + configs.animateOffSuffix);

            $(this).removeClass(theClass);

            gotFade = true;
          });
        });
      }

      var lateInitFadeElements = function(){
        configs.animateClasses.forEach(function(theClass){
          $("."+ theClass + configs.animateOffSuffix).each(function(){
            $(this).addClass(configs.animateTransitionClass);
          });
        });

        scrollSpy();
      }

      return {
        init: init,
      }
}(jQuery));

    $(function() {
        console.log($("#sidebar"));
        var offset = $("#sidebar").offset();
        var topPadding = 30;
        $(window).scroll(function() {
            if ($(window).scrollTop() > offset.top) {
                $("#sidebar").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                });
            } else {
                $("#sidebar").stop().animate({
                    marginTop: 0
                });
            };
        });
    });


    TechKidsApp.init();

  }
  
  render() {
    console.log("layoutdsfsdf");
    return (
      <div id="Ielts">
        
          <Header/>
          <Banner/>
          <MenuLeftTop/>
          <MenuLeftDesktop/>
          <BlockContent/>
          <BlockTwo/>
          <BlockThree/>
          <BlockFour/>
          <Footer/>
    
      </div>

    );
  }
}
